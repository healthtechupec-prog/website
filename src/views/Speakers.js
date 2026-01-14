// Global Speakers Page with Search and Filtering
window.SpeakersPage = {
  speakers: [
    { nom: 'TALEB', prenom: 'Farid', organisation: 'FUTUR AGE', domaine: 'Innovation' },
    { nom: 'CHEVALIER', prenom: 'Marc', organisation: 'Ex-MENGEN - Acteurs de l\'innovation & entreprise', domaine: 'Innovation' },
    { nom: 'CESSAC', prenom: 'Pascal', organisation: 'Directeur EHPAD + Informaticien IA + DU Géronto', domaine: 'Gériatrie' },
    { nom: 'MENAPACE', prenom: 'Marjorie', organisation: 'CNIL (Atelier RGPD)', domaine: 'Juridique' },
    { nom: 'DELLIERE', prenom: 'Christelle', organisation: 'Notre Temps (Journaliste)', domaine: 'Média' },
    { nom: 'KUPIEC', prenom: 'Jean-Manuel', organisation: 'OCIRP (Aidants)', domaine: 'Aidants' },
    { nom: 'ROBERT', prenom: 'Emmanuelle', organisation: 'CMQ PACA', domaine: 'Formation' },
    { nom: 'FAURE', prenom: 'Alexandre', organisation: 'Longévité', domaine: 'Innovation' },
    { nom: 'HEIDET', prenom: 'Matthieu', organisation: 'AP-HP - SAMU 94 & Urgences', domaine: 'Santé' },
    { nom: 'MERZOUK', prenom: 'Kamel', organisation: 'Pôle de compétitivité, Startup', domaine: 'Innovation' },
    { nom: 'SENOVA', prenom: 'Yann', organisation: 'AP-HP - Neurochirurgie', domaine: 'Santé' },
    { nom: 'RECTO', prenom: 'Caryn', organisation: 'AP-HP - Urgences & Gériatrie', domaine: 'Santé' },
    { nom: 'BROUSSIER', prenom: 'Amaury', organisation: 'AP-HP - Gériatrie', domaine: 'Gériatrie' },
    { nom: 'MARCON', prenom: 'Nathalie', organisation: 'Avocate, Maître de conférences (Fonction publique)', domaine: 'Juridique' },
    { nom: 'BALDOVINI', prenom: 'Maud', organisation: 'Maître de conférences, Droit de la santé', domaine: 'Juridique' },
    { nom: 'SALSAC', prenom: 'Laurent', organisation: 'Président Ordre Infirmier', domaine: 'Santé' },
    { nom: 'LAURENT', prenom: 'Marie', organisation: 'Gériatre - Resp. scientifique & Pédago CMQ', domaine: 'Gériatrie' },
    { nom: 'DIB', prenom: 'Gabriel', organisation: 'Fondateur & Président Age Impulse', domaine: 'Innovation' },
    { nom: 'SCAIN', prenom: 'Anne-Laure', organisation: 'AP-HP - Urgences & Gériatrie', domaine: 'Santé' }
  ],

  getInitials: (prenom, nom) => {
    return (prenom.charAt(0) + nom.charAt(0)).toUpperCase();
  },

  getColorClass: (index) => {
    const colors = [
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-purple-500 to-purple-600',
      'from-orange-500 to-orange-600',
      'from-pink-500 to-pink-600',
      'from-teal-500 to-teal-600',
      'from-indigo-500 to-indigo-600',
      'from-red-500 to-red-600'
    ];
    return colors[index % colors.length];
  },

  getDomaines: function () {
    const domaines = [...new Set(this.speakers.map(s => s.domaine))];
    return domaines.sort();
  },

  render: async function () {
    const domaines = this.getDomaines();

    return `
      <div class="container section">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h1 style="margin-bottom: 1rem; font-size: 3rem;">Intervenants</h1>
          <p style="color: var(--color-gray-600); font-size: 1.125rem;">Rencontrez nos experts en santé, innovation et droit</p>
        </div>
        
        <!-- Search and Filter Bar -->
        <div class="card" style="margin-bottom: 2rem; padding: 1.5rem;">
          <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center;">
            <!-- Search Input -->
            <div style="flex: 1; min-width: 250px;">
              <div style="position: relative;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--color-gray-400);">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input 
                  type="text" 
                  id="speaker-search" 
                  placeholder="Rechercher par nom..."
                  style="width: 100%; padding: 0.875rem 1rem 0.875rem 3rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s; outline: none;"
                />
              </div>
            </div>
            
            <!-- Domain Filter -->
            <div style="min-width: 200px;">
              <select 
                id="speaker-filter" 
                style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; background: white; cursor: pointer; outline: none;"
              >
                <option value="">Tous les domaines</option>
                ${domaines.map(d => `<option value="${d}">${d}</option>`).join('')}
              </select>
            </div>
            
            <!-- Results Count -->
            <div id="speaker-count" style="color: var(--color-gray-600); font-size: 0.9rem; padding: 0.5rem 1rem; background: var(--color-gray-100); border-radius: var(--radius-md);">
              ${this.speakers.length} intervenants
            </div>
          </div>
        </div>
        
        <!-- Speakers Grid -->
        <div id="speakers-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem;">
          ${this.renderSpeakers(this.speakers)}
        </div>
        
        <!-- No Results Message -->
        <div id="no-results" style="display: none; text-align: center; padding: 4rem 2rem;">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; color: var(--color-gray-400);">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <h3 style="color: var(--color-gray-600); margin-bottom: 0.5rem;">Aucun résultat trouvé</h3>
          <p style="color: var(--color-gray-500);">Essayez de modifier votre recherche ou vos filtres</p>
        </div>
      </div>
    `;
  },

  renderSpeakers: function (speakers) {
    if (speakers.length === 0) return '';

    return speakers.map((speaker, index) => `
      <div class="speaker-card card" 
           data-nom="${speaker.nom.toLowerCase()}" 
           data-prenom="${speaker.prenom.toLowerCase()}" 
           data-domaine="${speaker.domaine}"
           style="text-align: center; padding: 0; overflow: hidden; transition: transform 0.3s, box-shadow 0.3s;"
           onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 12px 24px rgba(0,0,0,0.1)'"
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
        <div style="height: 120px; background: linear-gradient(135deg, var(--color-primary-100) 0%, var(--color-primary-200) 100%); position: relative; display: flex; align-items: center; justify-content: center;">
          <div class="bg-gradient-to-br ${this.getColorClass(index)}" style="width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.75rem; font-weight: 700; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            ${this.getInitials(speaker.prenom, speaker.nom)}
          </div>
        </div>
        <div style="padding: 1.5rem 1rem;">
          <h3 style="margin-bottom: 0.25rem; font-size: 1.2rem; color: var(--color-primary-900);">${speaker.prenom} ${speaker.nom}</h3>
          <span style="display: inline-block; padding: 0.25rem 0.75rem; background: var(--color-primary-100); color: var(--color-primary-700); border-radius: 9999px; font-size: 0.75rem; font-weight: 600; margin-bottom: 0.75rem;">${speaker.domaine}</span>
          <p style="color: var(--color-gray-600); font-size: 0.85rem; line-height: 1.5;">${speaker.organisation}</p>
        </div>
      </div>
    `).join('');
  },

  setup: function () {
    const searchInput = document.getElementById('speaker-search');
    const filterSelect = document.getElementById('speaker-filter');
    const grid = document.getElementById('speakers-grid');
    const countDiv = document.getElementById('speaker-count');
    const noResults = document.getElementById('no-results');
    const self = this;

    const filterSpeakers = () => {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const domainFilter = filterSelect.value;

      let filtered = self.speakers.filter(speaker => {
        const matchesSearch = searchTerm === '' ||
          speaker.nom.toLowerCase().includes(searchTerm) ||
          speaker.prenom.toLowerCase().includes(searchTerm) ||
          `${speaker.prenom} ${speaker.nom}`.toLowerCase().includes(searchTerm);

        const matchesDomain = domainFilter === '' || speaker.domaine === domainFilter;

        return matchesSearch && matchesDomain;
      });

      grid.innerHTML = self.renderSpeakers(filtered);
      countDiv.textContent = `${filtered.length} intervenant${filtered.length > 1 ? 's' : ''}`;

      if (filtered.length === 0) {
        noResults.style.display = 'block';
        grid.style.display = 'none';
      } else {
        noResults.style.display = 'none';
        grid.style.display = 'grid';
      }
    };

    if (searchInput) {
      searchInput.addEventListener('input', filterSpeakers);
      searchInput.addEventListener('focus', function () {
        this.style.borderColor = 'var(--color-primary-400)';
        this.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.1)';
      });
      searchInput.addEventListener('blur', function () {
        this.style.borderColor = 'var(--color-gray-200)';
        this.style.boxShadow = 'none';
      });
    }

    if (filterSelect) {
      filterSelect.addEventListener('change', filterSpeakers);
    }
  }
};
