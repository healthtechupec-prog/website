// Dashboard Page - Role-based views
window.DashboardPage = {
  render: async () => {
    const user = window.AuthService.getCurrentUser();
    if (!user) {
      return '<div class="container"><p>Chargement...</p></div>';
    }

    const roleId = user.id_role;

    return `
      <div class="dashboard-container">
        <div class="dashboard-sidebar">
          <div class="sidebar-user-section">
            <div class="user-info">
              <div class="user-avatar">${user.is_team ? (user.nom?.charAt(0) || 'E') : (user.prenom?.charAt(0) || 'U') + (user.nom?.charAt(0) || '')}</div>
              <div class="user-details">
                <h3>${user.is_team ? user.nom || 'Mon Équipe' : (user.prenom + ' ' + user.nom)}</h3>
                <span class="user-role">${user.is_team ? 'Équipe' : window.DashboardPage.getRoleName(roleId)}</span>
              </div>
            </div>
            <button class="logout-btn" onclick="window.AuthService.logout()" title="Déconnexion">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
          <nav class="dashboard-nav">
            ${window.DashboardPage.getSidebarNav(roleId)}
          </nav>
        </div>
        <div class="dashboard-main">
          <div id="dashboard-content">
            ${await window.DashboardPage.getDefaultContent(roleId, user)}
          </div>
        </div>
      </div>
    `;
  },

  setup: () => {
    // Setup sidebar navigation
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.addEventListener('click', async (e) => {
        e.preventDefault();
        const section = link.dataset.section;

        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const content = document.getElementById('dashboard-content');
        content.innerHTML = '<div class="loading">Chargement...</div>';
        content.innerHTML = await window.DashboardPage.loadSection(section);
        window.DashboardPage.setupSection(section);
      });
    });

    // Setup first section
    const user = window.AuthService.getCurrentUser();
    window.DashboardPage.setupSection(window.DashboardPage.getDefaultSection(user.id_role));
  },

  getRoleName: (roleId) => {
    const roles = { 1: 'Administrateur', 2: 'Participant', 3: 'Expert', 4: 'Examinateur' };
    return roles[roleId] || 'Utilisateur';
  },

  getSidebarNav: (roleId) => {
    const navItems = {
      1: [ // Admin
        { id: 'admin-users', icon: 'users', label: 'Gestion Utilisateurs' },
        { id: 'admin-teams', icon: 'team', label: 'Gestion Équipes' },
        { id: 'admin-reset', icon: 'trash', label: 'Réinitialiser' },
        { id: 'account-settings', icon: 'settings', label: 'Mon Compte' }
      ],
      2: [ // Participant
        { id: 'participant-team', icon: 'team', label: 'Mon Équipe' },
        { id: 'participant-deliverable', icon: 'file', label: 'Livrables' },
        { id: 'participant-experts', icon: 'users', label: 'Trouver un Expert' },
        { id: 'participant-rdv', icon: 'calendar', label: 'Mes Rendez-vous' },
        { id: 'account-settings', icon: 'settings', label: 'Mon Compte' }
      ],
      3: [ // Expert
        { id: 'expert-profile', icon: 'user', label: 'Mon Profil' },
        { id: 'expert-disponibilites', icon: 'calendar', label: 'Mes Disponibilités' },
        { id: 'expert-demandes', icon: 'file', label: 'Demandes en attente' },
        { id: 'expert-rdv', icon: 'calendar', label: 'Mes Rendez-vous' },
        { id: 'account-settings', icon: 'settings', label: 'Mon Compte' }
      ],
      4: [ // Examinateur
        { id: 'examiner-deliverables', icon: 'file', label: 'Livrables' },
        { id: 'examiner-notes', icon: 'edit', label: 'Mes Notes' },
        { id: 'account-settings', icon: 'settings', label: 'Mon Compte' }
      ]
    };

    const items = navItems[roleId] || [];
    return items.map((item, index) => `
      <a href="#" class="sidebar-link ${index === 0 ? 'active' : ''}" data-section="${item.id}">
        ${window.DashboardPage.getIcon(item.icon)}
        <span>${item.label}</span>
      </a>
    `).join('');
  },

  getIcon: (name) => {
    const icons = {
      users: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      upload: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>',
      team: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      trash: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>',
      file: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>',
      calendar: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>',
      user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
      edit: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
      settings: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>'
    };
    return icons[name] || '';
  },

  getDefaultSection: (roleId) => {
    const defaults = { 1: 'admin-users', 2: 'participant-team', 3: 'expert-profile', 4: 'examiner-deliverables' };
    return defaults[roleId] || 'participant-team';
  },

  getDefaultContent: async (roleId, user) => {
    return await window.DashboardPage.loadSection(window.DashboardPage.getDefaultSection(roleId));
  },

  loadSection: async (section) => {
    switch (section) {
      // Admin sections
      case 'admin-users': return await window.DashboardPage.renderAdminUsers();
      case 'admin-teams': return await window.DashboardPage.renderAdminTeams();
      case 'admin-reset': return window.DashboardPage.renderAdminReset();

      // Participant sections
      case 'participant-team': return await window.DashboardPage.renderParticipantTeam();
      case 'participant-deliverable': return await window.DashboardPage.renderParticipantDeliverables();
      case 'participant-experts': return await window.DashboardPage.renderParticipantExperts();
      case 'participant-rdv': return await window.DashboardPage.renderParticipantRdv();

      // Expert sections
      case 'expert-profile': return await window.DashboardPage.renderExpertProfile();
      case 'expert-disponibilites': return await window.DashboardPage.renderExpertDisponibilites();
      case 'expert-demandes': return await window.DashboardPage.renderExpertDemandes();
      case 'expert-rdv': return await window.DashboardPage.renderExpertRdv();

      // Examiner sections
      case 'examiner-deliverables': return await window.DashboardPage.renderExaminerDeliverables();
      case 'examiner-notes': return await window.DashboardPage.renderExaminerNotes();

      // Common sections
      case 'account-settings': return window.DashboardPage.renderAccountSettings();

      default: return '<p>Section non trouvée</p>';
    }
  },

  setupSection: (section) => {
    switch (section) {
      case 'admin-users': window.DashboardPage.setupAdminUsers(); break;
      case 'admin-teams': window.DashboardPage.setupAdminTeams(); break;
      case 'admin-reset': window.DashboardPage.setupAdminReset(); break;
      case 'participant-deliverable': window.DashboardPage.setupDeliverableForm(); break;
      case 'participant-experts': window.DashboardPage.setupExpertSearch(); break;
      case 'participant-rdv': window.DashboardPage.setupRdvForm(); break;
      case 'expert-profile': window.DashboardPage.setupExpertProfile(); break;
      case 'expert-disponibilites': window.DashboardPage.setupExpertDisponibilites(); break;
      case 'expert-demandes': window.DashboardPage.setupExpertDemandes(); break;
      case 'examiner-deliverables': window.DashboardPage.setupExaminerNoting(); break;
      case 'account-settings': window.DashboardPage.setupAccountSettings(); break;
    }
  },

  // ==================== ADMIN SECTIONS ====================

  // Store data for filtering
  adminData: { users: [], teams: [], filters: { role: '', team: '', search: '' } },

  renderAdminUsers: async () => {
    try {
      const [users, teams] = await Promise.all([
        window.ApiService.get('/utilisateurs/'),
        window.ApiService.get('/equipes/').catch(() => [])
      ]);

      // Store for later use
      window.DashboardPage.adminData.users = users;
      window.DashboardPage.adminData.teams = teams;

      const teamMap = {};
      teams.forEach(t => teamMap[t.id_equipe] = t.nom);

      return `
        <div class="section-header">
          <h2>Gestion des Utilisateurs</h2>
          <span class="badge">${users.length} utilisateurs</span>
          <button id="export-csv-btn" class="btn btn-outline" style="margin-left: auto;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Exporter CSV
          </button>
        </div>
        
        <!-- Formulaire création utilisateur -->
        <div class="card" style="margin-bottom: 1.5rem;">
          <div class="card-body">
            <h3>➕ Créer un utilisateur</h3>
            <form id="create-user-form" style="margin-top: 1rem;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="user-nom">Nom *</label>
                  <input type="text" id="user-nom" class="form-control" required placeholder="Dupont">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="user-prenom">Prénom *</label>
                  <input type="text" id="user-prenom" class="form-control" required placeholder="Jean">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="user-email">Email *</label>
                  <input type="email" id="user-email" class="form-control" required placeholder="jean.dupont@email.com">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="user-password">Mot de passe *</label>
                  <input type="text" id="user-password" class="form-control" required placeholder="Mot de passe">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="user-role">Rôle *</label>
                  <select id="user-role" class="form-control" required>
                    <option value="1">Administrateur</option>
                    <option value="3" selected>Expert</option>
                    <option value="4">Examinateur</option>
                  </select>
                </div>
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">Créer l'utilisateur</button>
            </form>
            <div id="user-create-result" style="margin-top: 1rem;"></div>
          </div>
        </div>
        
        <!-- Filtres -->
        <div class="filters-bar" style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
          <input type="text" id="filter-search" placeholder="Rechercher nom ou email..." class="form-control" style="flex: 1; min-width: 200px;">
          <select id="filter-role" class="form-control" style="width: auto; min-width: 150px;">
            <option value="">Tous les rôles</option>
            <option value="1">Administrateur</option>
            <option value="2">Participant</option>
            <option value="3">Expert</option>
            <option value="4">Examinateur</option>
          </select>
          <select id="filter-team" class="form-control" style="width: auto; min-width: 150px;">
            <option value="">Toutes les équipes</option>
            <option value="null">Sans équipe</option>
            ${teams.map(t => `<option value="${t.id_equipe}">${t.nom}</option>`).join('')}
          </select>
        </div>
        
        <div class="table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Rôle</th>
                <th>Équipe</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="users-table-body">
              ${window.DashboardPage.renderUsersRows(users, teams, teamMap)}
            </tbody>
          </table>
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  renderUsersRows: (users, teams, teamMap) => {
    return users.map(u => `
      <tr data-user-id="${u.id_utilisateur}">
        <td><strong>${u.prenom} ${u.nom}</strong></td>
        <td>${u.email}</td>
        <td>
          <select class="role-select form-control" data-user-id="${u.id_utilisateur}" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;">
            <option value="1" ${u.id_role === 1 ? 'selected' : ''}>Admin</option>
            <option value="2" ${u.id_role === 2 ? 'selected' : ''}>Participant</option>
            <option value="3" ${u.id_role === 3 ? 'selected' : ''}>Expert</option>
            <option value="4" ${u.id_role === 4 ? 'selected' : ''}>Examinateur</option>
          </select>
        </td>
        <td>
          <select class="team-select form-control" data-user-id="${u.id_utilisateur}" style="padding: 0.25rem 0.5rem; font-size: 0.85rem;">
            <option value="">Aucune</option>
            ${teams.map(t => `<option value="${t.id_equipe}" ${u.id_equipe === t.id_equipe ? 'selected' : ''}>${t.nom}</option>`).join('')}
          </select>
        </td>
        <td>
          <button class="status-toggle btn-sm ${u.actif ? 'btn-active' : 'btn-inactive'}" data-user-id="${u.id_utilisateur}" data-active="${u.actif}">
            ${u.actif ? '✓ Actif' : '✗ Inactif'}
          </button>
        </td>
        <td>
          <span class="action-status" data-user-id="${u.id_utilisateur}" style="font-size: 0.8rem; color: var(--color-gray-500);"></span>
        </td>
      </tr>
    `).join('');
  },

  setupAdminUsers: () => {
    const { users, teams } = window.DashboardPage.adminData;
    const teamMap = {};
    teams.forEach(t => teamMap[t.id_equipe] = t.nom);

    // User creation form
    const createUserForm = document.getElementById('create-user-form');
    if (createUserForm) {
      createUserForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const resultDiv = document.getElementById('user-create-result');
        const submitBtn = createUserForm.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Création...';

        try {
          const result = await window.ApiService.post('/utilisateurs/', {
            nom: document.getElementById('user-nom').value,
            prenom: document.getElementById('user-prenom').value,
            email: document.getElementById('user-email').value,
            mot_de_passe: document.getElementById('user-password').value,
            id_role: parseInt(document.getElementById('user-role').value)
          });

          resultDiv.innerHTML = `<div class="success-message">✅ Utilisateur "${result.prenom} ${result.nom}" créé avec succès !</div>`;
          createUserForm.reset();

          // Refresh after 1.5s
          setTimeout(async () => {
            const content = await window.DashboardPage.renderAdminUsers();
            document.getElementById('dashboard-content').innerHTML = content;
            window.DashboardPage.setupAdminUsers();
          }, 1500);
        } catch (error) {
          resultDiv.innerHTML = `<div class="error-message">Erreur: ${error.message}</div>`;
        }

        submitBtn.disabled = false;
        submitBtn.textContent = "Créer l'utilisateur";
      });
    }

    // Export CSV
    const exportBtn = document.getElementById('export-csv-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', async () => {
        exportBtn.disabled = true;
        exportBtn.innerHTML = 'Export...';
        try {
          const response = await fetch('http://localhost:8000/utilisateurs/export-csv', {
            headers: { 'Authorization': `Bearer ${window.AuthService.getToken()}` }
          });
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'utilisateurs.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
        } catch (error) {
          alert(`Erreur: ${error.message}`);
        }
        exportBtn.disabled = false;
        exportBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 0.5rem;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>Exporter CSV`;
      });
    }

    // Filters
    const applyFilters = () => {
      const search = document.getElementById('filter-search').value.toLowerCase();
      const role = document.getElementById('filter-role').value;
      const team = document.getElementById('filter-team').value;

      let filtered = users;

      if (search) {
        filtered = filtered.filter(u =>
          u.nom.toLowerCase().includes(search) ||
          u.prenom.toLowerCase().includes(search) ||
          u.email.toLowerCase().includes(search)
        );
      }
      if (role) {
        filtered = filtered.filter(u => u.id_role === parseInt(role));
      }
      if (team === 'null') {
        filtered = filtered.filter(u => !u.id_equipe);
      } else if (team) {
        filtered = filtered.filter(u => u.id_equipe === parseInt(team));
      }

      document.getElementById('users-table-body').innerHTML = window.DashboardPage.renderUsersRows(filtered, teams, teamMap);
      window.DashboardPage.attachUserActions();
    };

    document.getElementById('filter-search')?.addEventListener('input', applyFilters);
    document.getElementById('filter-role')?.addEventListener('change', applyFilters);
    document.getElementById('filter-team')?.addEventListener('change', applyFilters);

    // Attach actions to rows
    window.DashboardPage.attachUserActions();
  },

  attachUserActions: () => {
    // Role change
    document.querySelectorAll('.role-select').forEach(select => {
      select.addEventListener('change', async (e) => {
        const userId = e.target.dataset.userId;
        const newRole = parseInt(e.target.value);
        const statusEl = document.querySelector(`.action-status[data-user-id="${userId}"]`);

        statusEl.textContent = 'Enregistrement...';
        try {
          await window.ApiService.put(`/utilisateurs/${userId}`, { id_role: newRole });
          statusEl.textContent = '✓';
          statusEl.style.color = '#047857';
          setTimeout(() => statusEl.textContent = '', 2000);
        } catch (error) {
          statusEl.textContent = '✗';
          statusEl.style.color = '#dc2626';
        }
      });
    });

    // Team change
    document.querySelectorAll('.team-select').forEach(select => {
      select.addEventListener('change', async (e) => {
        const userId = e.target.dataset.userId;
        const newTeam = e.target.value ? parseInt(e.target.value) : null;
        const statusEl = document.querySelector(`.action-status[data-user-id="${userId}"]`);

        statusEl.textContent = 'Enregistrement...';
        try {
          await window.ApiService.put(`/utilisateurs/${userId}`, { id_equipe: newTeam });
          statusEl.textContent = '✓';
          statusEl.style.color = '#047857';
          setTimeout(() => statusEl.textContent = '', 2000);
        } catch (error) {
          statusEl.textContent = '✗';
          statusEl.style.color = '#dc2626';
        }
      });
    });

    // Status toggle
    document.querySelectorAll('.status-toggle').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const userId = e.target.dataset.userId;
        const currentActive = e.target.dataset.active === 'true';
        const newActive = !currentActive;
        const statusEl = document.querySelector(`.action-status[data-user-id="${userId}"]`);

        statusEl.textContent = 'Enregistrement...';
        try {
          await window.ApiService.put(`/utilisateurs/${userId}`, { actif: newActive });
          e.target.dataset.active = newActive;
          e.target.textContent = newActive ? '✓ Actif' : '✗ Inactif';
          e.target.className = `status-toggle btn-sm ${newActive ? 'btn-active' : 'btn-inactive'}`;
          statusEl.textContent = '✓';
          statusEl.style.color = '#047857';
          setTimeout(() => statusEl.textContent = '', 2000);
        } catch (error) {
          statusEl.textContent = '✗';
          statusEl.style.color = '#dc2626';
        }
      });
    });
  },

  renderAdminImport: () => {
    return `
      <div class="section-header">
        <h2>Import CSV</h2>
      </div>
      <div class="card">
        <div class="card-body">
          <p class="text-muted">Format attendu : <code>nom;prenom;email;id_role;id_equipe</code></p>
          <p class="text-muted">Mot de passe par défaut : <code>prenom.nom</code> (en minuscules)</p>
      <div class="form-group" style="margin-top: 1.5rem;">
        <label for="csv-file">Sélectionner un fichier CSV</label>
        <input type="file" id="csv-file" accept=".csv" class="form-control">
      </div>
      <button id="import-btn" class="btn btn-primary" style="margin-top: 1rem;">
        Importer les utilisateurs
      </button>
      <div id="import-result" style="margin-top: 1rem;"></div>
    </div>
  </div>
`;
  },

  setupAdminImport: () => {
    const btn = document.getElementById('import-btn');
    if (btn) {
      btn.addEventListener('click', async () => {
        const fileInput = document.getElementById('csv-file');
        const resultDiv = document.getElementById('import-result');

        if (!fileInput.files[0]) {
          resultDiv.innerHTML = '<div class="error-message">Veuillez sélectionner un fichier</div>';
          return;
        }

        btn.disabled = true;
        btn.textContent = 'Import en cours...';

        try {
          const formData = new FormData();
          formData.append('file', fileInput.files[0]);

          const response = await fetch('http://localhost:8000/utilisateurs/import-csv', {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${window.AuthService.getToken()} ` },
            body: formData
          });

          const result = await response.json();

          resultDiv.innerHTML = `
  <div class="success-message">
    <strong>Import terminé :</strong> ${result.succes}/${result.total} utilisateurs créés
              ${result.erreurs.length > 0 ? `<br><small>Erreurs : ${result.erreurs.join(', ')}</small>` : ''}
            </div>
  `;
        } catch (error) {
          resultDiv.innerHTML = `<div class="error-message"> Erreur: ${error.message}</div> `;
        }

        btn.disabled = false;
        btn.textContent = 'Importer les utilisateurs';
      });
    }
  },

  renderAdminTeams: async () => {
    try {
      const teams = await window.ApiService.get('/equipes/');
      return `
        <div class="section-header">
          <h2>Gestion des Équipes</h2>
          <span class="badge">${teams.length} équipes</span>
        </div>
        
        <!-- Formulaire création équipe avec credentials -->
        <div class="card" style="margin-bottom: 1.5rem;">
          <div class="card-body">
            <h3>➕ Créer une nouvelle équipe</h3>
            <form id="create-team-form" style="margin-top: 1rem;">
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="team-name">Nom de l'équipe *</label>
                  <input type="text" id="team-name" class="form-control" required placeholder="Ex: Les Innovateurs">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="team-email">Email de connexion *</label>
                  <input type="email" id="team-email" class="form-control" required placeholder="equipe1@hackathon.com">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="team-password">Mot de passe *</label>
                  <input type="text" id="team-password" class="form-control" required placeholder="Mot de passe initial">
                </div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="team-sujet">Sujet du projet</label>
                  <input type="text" id="team-sujet" class="form-control" placeholder="Sujet du projet...">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="team-description">Description</label>
                  <input type="text" id="team-description" class="form-control" placeholder="Description...">
                </div>
              </div>
              <button type="submit" class="btn btn-primary" style="margin-top: 1rem;">Créer l'équipe</button>
            </form>
            <div id="team-create-result" style="margin-top: 1rem;"></div>
          </div>
        </div>
        
        <!-- Liste des équipes -->
        <h3>📋 Liste des équipes</h3>
        <div class="table-container" style="margin-top: 1rem;">
          <table class="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Sujet</th>
                <th>Statut</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${teams.map(t => `
                <tr>
                  <td>#${t.id_equipe}</td>
                  <td><strong>${t.nom}</strong></td>
                  <td>${t.email}</td>
                  <td>${t.sujet_projet || '-'}</td>
                  <td>
                    <span class="status-badge ${t.est_actif ? 'active' : 'inactive'}">
                      ${t.est_actif ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td>
                    <button class="btn btn-sm btn-outline toggle-team-btn" data-team-id="${t.id_equipe}" data-active="${t.est_actif}">
                      ${t.est_actif ? '🔒 Désactiver' : '🔓 Activer'}
                    </button>
                    <button class="btn btn-sm delete-team-btn" data-team-id="${t.id_equipe}" style="background: #fee2e2; color: #dc2626; border: none; margin-left: 0.5rem;">
                      🗑️
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          ${teams.length === 0 ? '<p class="text-muted" style="padding: 1rem;">Aucune équipe créée</p>' : ''}
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  setupAdminTeams: () => {
    const form = document.getElementById('create-team-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const resultDiv = document.getElementById('team-create-result');
        const submitBtn = form.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Création...';

        try {
          const result = await window.ApiService.post('/equipes/', {
            nom: document.getElementById('team-name').value,
            email: document.getElementById('team-email').value,
            mot_de_passe: document.getElementById('team-password').value,
            sujet_projet: document.getElementById('team-sujet').value || null,
            description: document.getElementById('team-description').value || null
          });

          resultDiv.innerHTML = `<div class="success-message">✅ Équipe "${result.nom}" créée ! Email: ${result.email}</div>`;
          form.reset();

          // Refresh after 1.5s
          setTimeout(async () => {
            const content = await window.DashboardPage.renderAdminTeams();
            document.getElementById('dashboard-content').innerHTML = content;
            window.DashboardPage.setupAdminTeams();
          }, 1500);
        } catch (error) {
          resultDiv.innerHTML = `<div class="error-message">Erreur: ${error.message}</div>`;
        }

        submitBtn.disabled = false;
        submitBtn.textContent = "Créer l'équipe";
      });
    }

    // Toggle team status
    document.querySelectorAll('.toggle-team-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const teamId = e.target.dataset.teamId;
        const isActive = e.target.dataset.active === 'true';

        try {
          await window.ApiService.put(`/equipes/${teamId}`, {
            est_actif: !isActive
          });
          // Refresh
          const content = await window.DashboardPage.renderAdminTeams();
          document.getElementById('dashboard-content').innerHTML = content;
          window.DashboardPage.setupAdminTeams();
        } catch (error) {
          alert(`Erreur: ${error.message}`);
        }
      });
    });

    // Delete team buttons
    document.querySelectorAll('.delete-team-btn').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const teamId = e.target.dataset.teamId;
        if (!confirm('Supprimer cette équipe ? Cette action est irréversible.')) return;

        try {
          await window.ApiService.delete(`/equipes/${teamId}`);
          // Refresh
          const content = await window.DashboardPage.renderAdminTeams();
          document.getElementById('dashboard-content').innerHTML = content;
          window.DashboardPage.setupAdminTeams();
        } catch (error) {
          alert(`Erreur: ${error.message}`);
        }
      });
    });
  },

  renderAdminReset: () => {
    return `
      <div class="section-header">
        <h2>Réinitialisation</h2>
      </div>
      <div class="card danger-zone">
        <div class="card-body">
          <h3>⚠️ Zone Dangereuse</h3>
          <p>Cette action supprimera :</p>
          <ul>
            <li>Tous les utilisateurs (sauf les admins)</li>
            <li>Toutes les équipes</li>
            <li>Tous les livrables</li>
            <li>Toutes les notes</li>
            <li>Tous les rendez-vous</li>
          </ul>
          <button id="reset-btn" class="btn btn-danger" style="margin-top: 1rem;">
            Réinitialiser la base de données
          </button>
          <div id="reset-result" style="margin-top: 1rem;"></div>
        </div>
      </div>
    `;
  },

  setupAdminReset: () => {
    const btn = document.getElementById('reset-btn');
    if (btn) {
      btn.addEventListener('click', async () => {
        if (!confirm('Êtes-vous sûr de vouloir réinitialiser la base de données ? Cette action est irréversible.')) {
          return;
        }

        btn.disabled = true;
        btn.textContent = 'Réinitialisation...';

        try {
          await window.ApiService.post('/utilisateurs/reset-db');
          document.getElementById('reset-result').innerHTML = '<div class="success-message">Base réinitialisée avec succès</div>';
        } catch (error) {
          document.getElementById('reset-result').innerHTML = `<div class="error-message">Erreur: ${error.message}</div>`;
        }

        btn.disabled = false;
        btn.textContent = 'Réinitialiser la base de données';
      });
    }
  },

  // ==================== PARTICIPANT SECTIONS ====================
  renderParticipantTeam: async () => {
    const user = window.AuthService.getCurrentUser();

    // For team accounts, use the team info from the user object
    if (user.is_team) {
      try {
        const team = await window.ApiService.get('/equipes/mon-equipe/info');
        return `
          <div class="section-header">
            <h2>Mon Équipe</h2>
          </div>
          <div class="card">
            <div class="card-body">
              <h3>🏆 ${team.nom}</h3>
              <p><strong>Sujet du projet:</strong> ${team.sujet_projet || 'Non défini'}</p>
              <p><strong>Description:</strong> ${team.description || 'Pas de description'}</p>
            </div>
          </div>
        `;
      } catch (error) {
        return `
          <div class="section-header">
            <h2>Mon Équipe</h2>
          </div>
          <div class="card">
            <div class="card-body">
              <h3>🏆 ${user.nom || 'Mon Équipe'}</h3>
              <p class="text-muted">Bienvenue dans votre espace équipe !</p>
            </div>
          </div>
        `;
      }
    }

    // Fallback for old user-based system (should not happen)
    return `
      <div class="section-header">
        <h2>Mon Équipe</h2>
      </div>
      <div class="card">
        <div class="card-body text-center">
          <p>Vous n'êtes pas connecté en tant qu'équipe.</p>
        </div>
      </div>
    `;
  },

  renderParticipantDeliverables: async () => {
    const user = window.AuthService.getCurrentUser();

    if (!user.id_equipe) {
      return '<div class="error-message">Vous devez appartenir à une équipe pour soumettre des livrables.</div>';
    }

    try {
      const deliverables = await window.ApiService.get('/livrables/');

      return `
        <div class="section-header">
          <h2>Livrables</h2>
        </div>
        
        <div class="card" style="margin-bottom: 2rem;">
          <div class="card-body">
            <h3>Nouveau Livrable</h3>
            <form id="deliverable-form">
              <div class="form-group">
                <label for="titre">Titre *</label>
                <input type="text" id="titre" name="titre" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" name="description" class="form-control" rows="3"></textarea>
              </div>
              
              <!-- Choice between link or file upload -->
              <div class="form-group">
                <label>Type de soumission *</label>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="radio" name="submission-type" value="link" checked> 
                    <span>🔗 Lien externe</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                    <input type="radio" name="submission-type" value="file"> 
                    <span>📁 Fichier (PDF/ZIP)</span>
                  </label>
                </div>
              </div>
              
              <!-- Link input -->
              <div class="form-group" id="link-input-group">
                <label for="lien">Lien (Google Drive, GitHub, etc.)</label>
                <input type="url" id="lien" name="lien" class="form-control" placeholder="https://...">
              </div>
              
              <!-- File input (hidden by default) -->
              <div class="form-group" id="file-input-group" style="display: none;">
                <label for="fichier">Fichier (PDF ou ZIP, max 50 Mo)</label>
                <input type="file" id="fichier" name="fichier" class="form-control" accept=".pdf,.zip">
                <small class="text-muted">Formats acceptés : PDF, ZIP</small>
              </div>
              
              <button type="submit" class="btn btn-primary">Soumettre le livrable</button>
            </form>
            <div id="deliverable-result" style="margin-top: 1rem;"></div>
          </div>
        </div>
        
        <h3>Mes Livrables</h3>
        <div class="cards-grid">
          ${deliverables.map(d => `
            <div class="card">
              <div class="card-body">
                <h4>${d.titre}</h4>
                <p>${d.description || 'Pas de description'}</p>
                ${d.lien_fichier ? (d.lien_fichier.startsWith('/files/livrables/')
          ? `<a href="http://localhost:8000${d.lien_fichier}" target="_blank" class="btn btn-outline">📁 Télécharger</a>`
          : `<a href="${d.lien_fichier}" target="_blank" class="btn btn-outline">🔗 Voir le lien</a>`
        ) : ''}
                <small class="text-muted">Déposé le ${new Date(d.date_depot).toLocaleDateString('fr-FR')}</small>
              </div>
            </div>
          `).join('')}
          ${deliverables.length === 0 ? '<p class="text-muted">Aucun livrable soumis</p>' : ''}
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  setupDeliverableForm: () => {
    const form = document.getElementById('deliverable-form');
    if (!form) return;

    // Toggle between link and file input
    const radioButtons = form.querySelectorAll('input[name="submission-type"]');
    const linkGroup = document.getElementById('link-input-group');
    const fileGroup = document.getElementById('file-input-group');

    radioButtons.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.value === 'link') {
          linkGroup.style.display = 'block';
          fileGroup.style.display = 'none';
        } else {
          linkGroup.style.display = 'none';
          fileGroup.style.display = 'block';
        }
      });
    });

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const user = window.AuthService.getCurrentUser();
      const resultDiv = document.getElementById('deliverable-result');
      const submissionType = form.querySelector('input[name="submission-type"]:checked').value;

      resultDiv.innerHTML = '<div class="info-message">Envoi en cours...</div>';

      try {
        if (submissionType === 'link') {
          // Submit via link
          await window.ApiService.post('/livrables/', {
            titre: form.titre.value,
            description: form.description.value,
            lien_fichier: form.lien.value,
            id_equipe: user.id_equipe
          });
        } else {
          // Submit via file upload
          const fileInput = document.getElementById('fichier');
          if (!fileInput.files[0]) {
            resultDiv.innerHTML = '<div class="error-message">Veuillez sélectionner un fichier</div>';
            return;
          }

          const formData = new FormData();
          formData.append('titre', form.titre.value);
          formData.append('description', form.description.value || '');
          formData.append('file', fileInput.files[0]);

          const token = window.AuthService.getToken();
          const response = await fetch('http://localhost:8000/livrables/upload', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`
            },
            body: formData
          });

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || "Erreur lors de l'upload");
          }
        }

        resultDiv.innerHTML = '<div class="success-message">Livrable soumis avec succès !</div>';
        form.reset();

        // Refresh the list
        setTimeout(() => {
          document.querySelector('[data-section="participant-deliverable"]').click();
        }, 1500);
      } catch (error) {
        resultDiv.innerHTML = `<div class="error-message">Erreur: ${error.message}</div>`;
      }
    });
  },

  renderParticipantRdv: async () => {
    const user = window.AuthService.getCurrentUser();

    if (!user.id_equipe) {
      return '<div class="error-message">Vous devez appartenir à une équipe pour voir vos rendez-vous.</div>';
    }

    try {
      const rdvs = await window.ApiService.get('/rendezvous/equipe/mes-rdv');

      const statusLabels = {
        'en_attente': '🟡 En attente de validation',
        'valide': '🟢 Confirmé',
        'refuse': '🔴 Refusé'
      };

      const statusColors = {
        'en_attente': '#f59e0b',
        'valide': '#10b981',
        'refuse': '#ef4444'
      };

      return `
        <div class="section-header">
          <h2>Mes Rendez-vous</h2>
          <span class="badge">${rdvs.length} RDV</span>
        </div>
        
        <p class="text-muted" style="margin-bottom: 1rem;">
          💡 Pour prendre un nouveau rendez-vous, allez dans "Trouver un Expert" et consultez leurs disponibilités.
        </p>
        
        <div class="cards-grid">
          ${rdvs.map(r => `
            <div class="card" style="border-left: 4px solid ${statusColors[r.statut] || '#ccc'};">
              <div class="card-body">
                <h4>👨‍🏫 ${r.expert_prenom || ''} ${r.expert_nom || 'Expert #' + r.id_expert}</h4>
                <p><strong>📅 Date:</strong> ${new Date(r.date).toLocaleString('fr-FR')}</p>
                <p><strong>Statut:</strong> ${statusLabels[r.statut] || r.statut}</p>
                ${r.commentaire ? `<p>💬 ${r.commentaire}</p>` : ''}
                ${r.statut === 'en_attente' ? `
                  <button class="btn btn-outline btn-sm btn-cancel-rdv" data-id="${r.id_rdv}" style="margin-top: 0.5rem; color: #dc2626; border-color: #dc2626;">
                    ❌ Annuler
                  </button>
                ` : ''}
              </div>
            </div>
          `).join('')}
          ${rdvs.length === 0 ? '<p class="text-muted">Aucun rendez-vous. Utilisez "Trouver un Expert" pour en demander un !</p>' : ''}
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  setupRdvForm: () => {
    // Cancel buttons for pending RDVs
    document.querySelectorAll('.btn-cancel-rdv').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        if (confirm('Annuler ce rendez-vous ?')) {
          try {
            await window.ApiService.delete(`/rendezvous/${id}`);
            document.querySelector('[data-section="participant-rdv"]').click();
          } catch (error) {
            alert('Erreur: ' + error.message);
          }
        }
      });
    });
  },

  // ==================== PARTICIPANT - RECHERCHE EXPERTS ====================
  renderParticipantExperts: async () => {
    const user = window.AuthService.getCurrentUser();

    if (!user.id_equipe) {
      return '<div class="error-message">Vous devez appartenir à une équipe pour contacter des experts.</div>';
    }

    try {
      const experts = await window.ApiService.get('/expert/search');

      return `
        <div class="section-header">
          <h2>Trouver un Expert</h2>
        </div>
        
        <div class="card" style="margin-bottom: 2rem;">
          <div class="card-body">
            <h3>🔍 Filtrer les experts</h3>
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
              <div class="form-group" style="flex: 1; min-width: 200px;">
                <label for="filter-competence">Compétence</label>
                <input type="text" id="filter-competence" class="form-control" placeholder="Ex: IA, Data, Backend...">
              </div>
              <div class="form-group" style="flex: 1; min-width: 200px;">
                <label for="filter-org">Organisation</label>
                <input type="text" id="filter-org" class="form-control" placeholder="Ex: UPEC, Google...">
              </div>
              <div class="form-group" style="align-self: flex-end;">
                <button id="btn-search-experts" class="btn btn-primary">Rechercher</button>
              </div>
            </div>
          </div>
        </div>
        
        <div id="experts-list" class="cards-grid">
          ${experts.map(e => `
            <div class="card expert-card">
              <div class="card-body">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                  <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, #4F46E5, #7C3AED); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    ${e.prenom?.charAt(0) || ''}${e.nom?.charAt(0) || ''}
                  </div>
                  <div>
                    <h4 style="margin: 0;">${e.prenom} ${e.nom}</h4>
                    <small class="text-muted">${e.organisation || 'Organisation non renseignée'}</small>
                  </div>
                </div>
                ${e.competences ? `<p><strong>Compétences:</strong> ${e.competences}</p>` : ''}
                ${e.bio ? `<p>${e.bio.substring(0, 100)}${e.bio.length > 100 ? '...' : ''}</p>` : ''}
                <button class="btn btn-outline btn-view-expert" data-expert-id="${e.id_utilisateur}">👀 Voir disponibilités</button>
              </div>
            </div>
          `).join('')}
          ${experts.length === 0 ? '<p class="text-muted">Aucun expert disponible</p>' : ''}
        </div>
        
        <div id="expert-modal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000;">
          <div class="modal-content" style="background: white; max-width: 600px; margin: 5% auto; padding: 2rem; border-radius: 16px; max-height: 80vh; overflow-y: auto;">
            <div id="expert-modal-body">Chargement...</div>
            <button class="btn btn-outline" id="close-modal" style="margin-top: 1rem;">Fermer</button>
          </div>
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  setupExpertSearch: () => {
    const searchBtn = document.getElementById('btn-search-experts');
    if (searchBtn) {
      searchBtn.addEventListener('click', async () => {
        const competence = document.getElementById('filter-competence').value;
        const org = document.getElementById('filter-org').value;

        let url = '/expert/search';
        const params = [];
        if (competence) params.push(`competence=${encodeURIComponent(competence)}`);
        if (org) params.push(`organisation=${encodeURIComponent(org)}`);
        if (params.length) url += '?' + params.join('&');

        try {
          const experts = await window.ApiService.get(url);
          const listDiv = document.getElementById('experts-list');

          listDiv.innerHTML = experts.length === 0
            ? '<p class="text-muted">Aucun expert trouvé</p>'
            : experts.map(e => `
              <div class="card expert-card">
                <div class="card-body">
                  <h4>${e.prenom} ${e.nom}</h4>
                  <small class="text-muted">${e.organisation || ''}</small>
                  ${e.competences ? `<p><strong>Compétences:</strong> ${e.competences}</p>` : ''}
                  <button class="btn btn-outline btn-view-expert" data-expert-id="${e.id_utilisateur}">👀 Voir disponibilités</button>
                </div>
              </div>
            `).join('');

          window.DashboardPage.attachExpertModalListeners();
        } catch (error) {
          console.error('Erreur recherche:', error);
        }
      });
    }

    window.DashboardPage.attachExpertModalListeners();

    const closeBtn = document.getElementById('close-modal');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        document.getElementById('expert-modal').style.display = 'none';
      });
    }
  },

  attachExpertModalListeners: () => {
    document.querySelectorAll('.btn-view-expert').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const expertId = e.target.dataset.expertId;
        const modal = document.getElementById('expert-modal');
        const modalBody = document.getElementById('expert-modal-body');

        modal.style.display = 'block';
        modalBody.innerHTML = '<p>Chargement...</p>';

        try {
          const [profile, dispos] = await Promise.all([
            window.ApiService.get(`/expert/${expertId}/profile`),
            window.ApiService.get(`/expert/${expertId}/disponibilites`)
          ]);

          modalBody.innerHTML = `
            <h3>${profile.prenom} ${profile.nom}</h3>
            <p><strong>Organisation:</strong> ${profile.organisation || 'Non renseignée'}</p>
            <p><strong>Compétences:</strong> ${profile.competences || 'Non renseignées'}</p>
            ${profile.bio ? `<p>${profile.bio}</p>` : ''}
            
            <hr>
            <h4>📅 Disponibilités</h4>
            ${dispos.length > 0 ? `
              <ul style="list-style: none; padding: 0;">
                ${dispos.map(d => `
                  <li style="padding: 0.5rem; background: #f3f4f6; margin-bottom: 0.5rem; border-radius: 8px;">
                    📆 ${new Date(d.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                    de ${d.heure_debut} à ${d.heure_fin}
                    <button class="btn btn-sm btn-primary btn-book-rdv" 
                      data-expert-id="${expertId}" 
                      data-date="${d.date}" 
                      data-heure="${d.heure_debut}"
                      style="margin-left: 1rem;">
                      Prendre RDV
                    </button>
                  </li>
                `).join('')}
              </ul>
            ` : '<p class="text-muted">Aucune disponibilité renseignée</p>'}
            
            <hr>
            <h4>Ou choisir une date personnalisée</h4>
            <form id="custom-rdv-form">
              <input type="hidden" id="rdv-expert-id" value="${expertId}">
              <div class="form-group">
                <label for="rdv-date">Date et heure</label>
                <input type="datetime-local" id="rdv-date" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="rdv-comment">Commentaire</label>
                <textarea id="rdv-comment" class="form-control" rows="2"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Demander le RDV</button>
            </form>
            <div id="rdv-modal-result" style="margin-top: 1rem;"></div>
          `;

          // Book RDV buttons
          document.querySelectorAll('.btn-book-rdv').forEach(bookBtn => {
            bookBtn.addEventListener('click', async (evt) => {
              const expId = evt.target.dataset.expertId;
              const date = evt.target.dataset.date;
              const heure = evt.target.dataset.heure;
              const dateTime = `${date}T${heure}`;

              try {
                await window.ApiService.post('/rendezvous/demander', {
                  id_expert: parseInt(expId),
                  date: dateTime,
                  commentaire: 'Basé sur disponibilité'
                });
                document.getElementById('rdv-modal-result').innerHTML = '<div class="success-message">Demande envoyée !</div>';
              } catch (err) {
                document.getElementById('rdv-modal-result').innerHTML = `<div class="error-message">Erreur: ${err.message}</div>`;
              }
            });
          });

          // Custom form
          const customForm = document.getElementById('custom-rdv-form');
          if (customForm) {
            customForm.addEventListener('submit', async (evt) => {
              evt.preventDefault();
              const expId = document.getElementById('rdv-expert-id').value;
              const date = document.getElementById('rdv-date').value;
              const comment = document.getElementById('rdv-comment').value;

              try {
                await window.ApiService.post('/rendezvous/demander', {
                  id_expert: parseInt(expId),
                  date: date,
                  commentaire: comment
                });
                document.getElementById('rdv-modal-result').innerHTML = '<div class="success-message">Demande envoyée !</div>';
              } catch (err) {
                document.getElementById('rdv-modal-result').innerHTML = `<div class="error-message">Erreur: ${err.message}</div>`;
              }
            });
          }
        } catch (error) {
          modalBody.innerHTML = `<div class="error-message">Erreur: ${error.message}</div>`;
        }
      });
    });
  },

  // ==================== EXPERT SECTIONS ====================
  renderExpertProfile: async () => {
    const user = window.AuthService.getCurrentUser();

    // Charger le profil existant
    let profile = { organisation: '', competences: '', bio: '' };
    try {
      profile = await window.ApiService.get('/expert/profile');
    } catch (error) {
      console.log('Pas de profil existant');
    }

    return `
            <div class="section-header">
              <h2>Mon Profil Expert</h2>
      </div>
            <div class="card">
              <div class="card-body">
                ${profile.organisation || profile.competences || profile.bio ?
        '<div class="info-message" style="margin-bottom: 1rem; padding: 0.75rem; background: #dbeafe; color: #1d4ed8; border-radius: 8px;">Votre profil est déjà rempli. Vous pouvez modifier les informations ci-dessous.</div>' :
        '<div class="info-message" style="margin-bottom: 1rem; padding: 0.75rem; background: #fef3c7; color: #b45309; border-radius: 8px;">Complétez votre profil pour que les équipes puissent vous connaître.</div>'
      }
                <form id="expert-profile-form">
                  <div class="form-group">
                    <label for="organisation">Organisation</label>
                    <input type="text" id="organisation" name="organisation" class="form-control"
                      placeholder="Votre entreprise/université..."
                      value="${profile.organisation || ''}">
                  </div>
                  <div class="form-group">
                    <label for="competences">Compétences</label>
                    <textarea id="competences" name="competences" class="form-control" rows="3"
                      placeholder="IA, Data Science, Backend, Frontend...">${profile.competences || ''}</textarea>
                  </div>
                  <div class="form-group">
                    <label for="bio">Bio</label>
                    <textarea id="bio" name="bio" class="form-control" rows="4"
                      placeholder="Présentez-vous aux équipes...">${profile.bio || ''}</textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Enregistrer</button>
                </form>
                <div id="profile-result" style="margin-top: 1rem;"></div>
              </div>
            </div>
          `;
  },

  setupExpertProfile: () => {
    const form = document.getElementById('expert-profile-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const resultDiv = document.getElementById('profile-result');
        const submitBtn = form.querySelector('button[type="submit"]');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Enregistrement...';

        try {
          await window.ApiService.put('/expert/profile', {
            organisation: form.organisation.value,
            competences: form.competences.value,
            bio: form.bio.value
          });
          resultDiv.innerHTML = '<div class="success-message">Profil enregistré avec succès !</div>';
        } catch (error) {
          resultDiv.innerHTML = `<div class="error-message"> Erreur: ${error.message}</div> `;
        }

        submitBtn.disabled = false;
        submitBtn.textContent = 'Enregistrer';
      });
    }
  },

  // EXPERT - Gestion des Disponibilités
  renderExpertDisponibilites: async () => {
    try {
      const dispos = await window.ApiService.get('/expert/disponibilites');

      return `
        <div class="section-header">
          <h2>Mes Disponibilités</h2>
        </div>
        
        <div class="card" style="margin-bottom: 2rem;">
          <div class="card-body">
            <h3>➕ Ajouter une disponibilité</h3>
            <form id="dispo-form">
              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <div class="form-group" style="flex: 1; min-width: 150px;">
                  <label for="dispo-date">Date</label>
                  <input type="date" id="dispo-date" class="form-control" required>
                </div>
                <div class="form-group" style="flex: 1; min-width: 120px;">
                  <label for="dispo-debut">Heure début</label>
                  <input type="time" id="dispo-debut" class="form-control" required>
                </div>
                <div class="form-group" style="flex: 1; min-width: 120px;">
                  <label for="dispo-fin">Heure fin</label>
                  <input type="time" id="dispo-fin" class="form-control" required>
                </div>
                <div class="form-group" style="align-self: flex-end;">
                  <button type="submit" class="btn btn-primary">Ajouter</button>
                </div>
              </div>
            </form>
            <div id="dispo-result" style="margin-top: 1rem;"></div>
          </div>
        </div>
        
        <h3>📅 Mes créneaux</h3>
        <div class="cards-grid" id="dispos-list">
          ${dispos.map(d => `
            <div class="card">
              <div class="card-body">
                <h4>📆 ${new Date(d.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</h4>
                <p>De <strong>${d.heure_debut}</strong> à <strong>${d.heure_fin}</strong></p>
                <button class="btn btn-outline btn-sm btn-delete-dispo" data-id="${d.id_disponibilite}">🗑️ Supprimer</button>
              </div>
            </div>
          `).join('')}
          ${dispos.length === 0 ? '<p class="text-muted">Aucune disponibilité renseignée. Ajoutez vos créneaux pour que les équipes puissent prendre RDV !</p>' : ''}
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  setupExpertDisponibilites: () => {
    const form = document.getElementById('dispo-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const resultDiv = document.getElementById('dispo-result');

        try {
          await window.ApiService.post('/expert/disponibilites', {
            date: document.getElementById('dispo-date').value,
            heure_debut: document.getElementById('dispo-debut').value,
            heure_fin: document.getElementById('dispo-fin').value
          });

          resultDiv.innerHTML = '<div class="success-message">Disponibilité ajoutée !</div>';
          form.reset();

          // Refresh
          setTimeout(() => {
            document.querySelector('[data-section="expert-disponibilites"]').click();
          }, 1000);
        } catch (error) {
          resultDiv.innerHTML = `<div class="error-message">Erreur: ${error.message}</div>`;
        }
      });
    }

    // Delete buttons
    document.querySelectorAll('.btn-delete-dispo').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        if (confirm('Supprimer cette disponibilité ?')) {
          try {
            await window.ApiService.delete(`/expert/disponibilites/${id}`);
            document.querySelector('[data-section="expert-disponibilites"]').click();
          } catch (error) {
            alert('Erreur: ' + error.message);
          }
        }
      });
    });
  },

  // EXPERT - Demandes de RDV en attente
  renderExpertDemandes: async () => {
    try {
      const demandes = await window.ApiService.get('/rendezvous/expert/demandes');

      return `
        <div class="section-header">
          <h2>Demandes en attente</h2>
          <span class="badge">${demandes.length} demande(s)</span>
        </div>
        
        <div class="cards-grid">
          ${demandes.map(d => `
            <div class="card" style="border-left: 4px solid #f59e0b;">
              <div class="card-body">
                <h4>🏢 ${d.equipe_nom || 'Équipe #' + d.id_equipe}</h4>
                <p><strong>📅 Date demandée:</strong> ${new Date(d.date).toLocaleString('fr-FR')}</p>
                ${d.commentaire ? `<p>💬 ${d.commentaire}</p>` : ''}
                <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                  <button class="btn btn-primary btn-validate-rdv" data-id="${d.id_rdv}" data-action="valide">✅ Accepter</button>
                  <button class="btn btn-outline btn-validate-rdv" data-id="${d.id_rdv}" data-action="refuse" style="color: #dc2626; border-color: #dc2626;">❌ Refuser</button>
                </div>
              </div>
            </div>
          `).join('')}
          ${demandes.length === 0 ? '<p class="text-muted">Aucune demande en attente 🎉</p>' : ''}
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  setupExpertDemandes: () => {
    document.querySelectorAll('.btn-validate-rdv').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        const action = e.target.dataset.action;

        try {
          await window.ApiService.put(`/rendezvous/${id}/valider`, {
            statut: action
          });

          // Refresh
          document.querySelector('[data-section="expert-demandes"]').click();
        } catch (error) {
          alert('Erreur: ' + error.message);
        }
      });
    });
  },

  renderExpertRdv: async () => {
    try {
      const rdvs = await window.ApiService.get('/rendezvous/expert/mes-rdv');

      const statusLabels = {
        'en_attente': '🟡 En attente',
        'valide': '🟢 Validé',
        'refuse': '🔴 Refusé'
      };

      const statusColors = {
        'en_attente': '#f59e0b',
        'valide': '#10b981',
        'refuse': '#ef4444'
      };

      return `
        <div class="section-header">
          <h2>Mes Rendez-vous</h2>
          <span class="badge">${rdvs.length} RDV</span>
        </div>
        <div class="cards-grid">
          ${rdvs.map(r => `
            <div class="card" style="border-left: 4px solid ${statusColors[r.statut] || '#ccc'};">
              <div class="card-body">
                <h4>🏢 ${r.equipe_nom || 'Équipe #' + r.id_equipe}</h4>
                <p><strong>📅 Date:</strong> ${new Date(r.date).toLocaleString('fr-FR')}</p>
                <p><strong>Statut:</strong> ${statusLabels[r.statut] || r.statut}</p>
                ${r.commentaire ? `<p>💬 ${r.commentaire}</p>` : ''}
              </div>
            </div>
          `).join('')}
          ${rdvs.length === 0 ? '<p class="text-muted">Aucun rendez-vous planifié</p>' : ''}
        </div>
      `;
    } catch (error) {
      return `<div class="error-message">Erreur: ${error.message}</div>`;
    }
  },

  // ==================== EXAMINER SECTIONS ====================
  renderExaminerDeliverables: async () => {
    try {
      const deliverables = await window.ApiService.get('/livrables/');

      return `
            <div class="section-header">
          <h2>Livrables à évaluer</h2>
          <span class="badge">${deliverables.length} livrables</span>
        </div>
            <div class="cards-grid">
              ${deliverables.map(d => `
            <div class="card deliverable-card" data-id="${d.id_livrable}">
              <div class="card-body">
                <h4>${d.titre}</h4>
                <p class="text-muted">Équipe #${d.id_equipe}</p>
                <p>${d.description || 'Pas de description'}</p>
                ${d.lien_fichier ? `<a href="${d.lien_fichier}" target="_blank" class="btn btn-outline btn-sm">Voir le fichier</a>` : ''}
                <hr>
                <form class="note-form" data-livrable="${d.id_livrable}">
                  <div class="form-group">
                    <label>Note (0-20)</label>
                    <input type="number" name="valeur" min="0" max="20" class="form-control" required>
                  </div>
                  <div class="form-group">
                    <label>Commentaire</label>
                    <textarea name="commentaire" class="form-control" rows="2"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary btn-sm">Enregistrer</button>
                </form>
              </div>
            </div>
          `).join('')}
              ${deliverables.length === 0 ? '<p class="text-muted">Aucun livrable à évaluer</p>' : ''}
            </div>
          `;
    } catch (error) {
      return `<div class="error-message"> Erreur: ${error.message}</div> `;
    }
  },

  setupExaminerNoting: () => {
    document.querySelectorAll('.note-form').forEach(form => {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const livrableId = form.dataset.livrable;

        try {
          await window.ApiService.post('/notes/', {
            id_livrable: parseInt(livrableId),
            valeur: parseInt(form.valeur.value),
            commentaire: form.commentaire.value
          });

          form.innerHTML = '<div class="success-message">Note enregistrée !</div>';
        } catch (error) {
          alert(`Erreur: ${error.message} `);
        }
      });
    });
  },

  renderExaminerNotes: async () => {
    try {
      const notes = await window.ApiService.get('/notes/');
      const user = window.AuthService.getCurrentUser();
      const myNotes = notes.filter(n => n.id_expert === user.id_utilisateur);

      return `
            <div class="section-header">
          <h2>Mes Notes</h2>
          <span class="badge">${myNotes.length} notes</span>
        </div>
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Livrable</th>
                    <th>Note</th>
                    <th>Commentaire</th>
                  </tr>
                </thead>
                <tbody>
                  ${myNotes.map(n => `
                <tr>
                  <td>Livrable #${n.id_livrable}</td>
                  <td><strong>${n.valeur}/20</strong></td>
                  <td>${n.commentaire || '-'}</td>
                </tr>
              `).join('')}
                </tbody>
              </table>
              ${myNotes.length === 0 ? '<p class="text-muted">Aucune note enregistrée</p>' : ''}
            </div>
          `;
    } catch (error) {
      return `<div class="error-message"> Erreur: ${error.message}</div> `;
    }
  },

  // ==================== ACCOUNT SETTINGS ====================
  renderAccountSettings: () => {
    const user = window.AuthService.getCurrentUser();
    const isTeam = window.AuthService.isTeam();

    // Different display for team vs individual user accounts
    const accountInfo = isTeam ? `
                  <h3>Informations de l'équipe</h3>
                  <div style="margin-top: 1rem;">
                    <p><strong>Nom de l'équipe :</strong> ${user.nom || 'Non défini'}</p>
                    <p><strong>Email :</strong> ${user.email || 'Non défini'}</p>
                    <p><strong>Type de compte :</strong> Équipe Participante</p>
                  </div>
    ` : `
                  <h3>Informations personnelles</h3>
                  <div style="margin-top: 1rem;">
                    <p><strong>Nom :</strong> ${user.nom || 'Non défini'}</p>
                    <p><strong>Prénom :</strong> ${user.prenom || 'Non défini'}</p>
                    <p><strong>Email :</strong> ${user.email || 'Non défini'}</p>
                    <p><strong>Rôle :</strong> ${window.DashboardPage.getRoleName(user.id_role)}</p>
                  </div>
    `;

    return `
            <div class="section-header">
              <h2>Mon Compte</h2>
      </div>

            <div class="cards-grid">
              <div class="card">
                <div class="card-body">
                  ${accountInfo}
                </div>
              </div>

              <div class="card">
                <div class="card-body">
                  <h3>Modifier mon mot de passe</h3>
                  <form id="password-change-form" style="margin-top: 1rem;">
                    <div class="form-group">
                      <label for="current-password">Mot de passe actuel *</label>
                      <input type="password" id="current-password" name="current-password" class="form-control" required>
                    </div>
                    <div class="form-group">
                      <label for="new-password">Nouveau mot de passe *</label>
                      <input type="password" id="new-password" name="new-password" class="form-control" required minlength="6">
                    </div>
                    <div class="form-group">
                      <label for="confirm-password">Confirmer le nouveau mot de passe *</label>
                      <input type="password" id="confirm-password" name="confirm-password" class="form-control" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Changer le mot de passe</button>
                  </form>
                  <div id="password-result" style="margin-top: 1rem;"></div>
                </div>
              </div>
            </div>
          `;
  },

  setupAccountSettings: () => {
    const form = document.getElementById('password-change-form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const resultDiv = document.getElementById('password-result');
        const submitBtn = form.querySelector('button[type="submit"]');

        const currentPassword = form['current-password'].value;
        const newPassword = form['new-password'].value;
        const confirmPassword = form['confirm-password'].value;

        // Validation
        if (newPassword !== confirmPassword) {
          resultDiv.innerHTML = '<div class="error-message">Les mots de passe ne correspondent pas</div>';
          return;
        }

        if (newPassword.length < 6) {
          resultDiv.innerHTML = '<div class="error-message">Le mot de passe doit contenir au moins 6 caractères</div>';
          return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Modification en cours...';

        try {
          await window.ApiService.put('/utilisateurs/me/password', {
            ancien_mot_de_passe: currentPassword,
            nouveau_mot_de_passe: newPassword
          });

          resultDiv.innerHTML = '<div class="success-message">Mot de passe modifié avec succès !</div>';
          form.reset();
        } catch (error) {
          resultDiv.innerHTML = `<div class="error-message"> Erreur: ${error.message}</div> `;
        }

        submitBtn.disabled = false;
        submitBtn.textContent = 'Changer le mot de passe';
      });
    }
  }
};
