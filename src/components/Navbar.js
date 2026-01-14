// Global Navbar component
window.Navbar = {
  render: () => {
    const isAuthenticated = window.AuthService && window.AuthService.isAuthenticated();
    const user = isAuthenticated ? window.AuthService.getCurrentUser() : null;

    return `
      <div class="container navbar">
        <a href="#/" class="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
          </svg>
          <span>Health-Tech</span>
        </a>
        
        <button class="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav class="nav-links">
          <a href="#/" class="nav-link">Accueil</a>
          <a href="#/program" class="nav-link">Programme</a>
          <a href="#/speakers" class="nav-link">Intervenants</a>
          <a href="#/information" class="nav-link">Infos Pratiques</a>
          <a href="#/partners" class="nav-link">Partenaires</a>
          <a href="#/organizers" class="nav-link">Organisateurs</a>
          <div class="nav-extras">
            ${isAuthenticated ? `
              <a href="#/dashboard" class="btn" style="display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 1rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>${user?.is_team ? user?.nom || 'Mon équipe' : user?.prenom || 'Mon espace'}</span>
              </a>
            ` : `
              <a href="#/login" class="btn" style="display: flex; align-items: center; gap: 0.5rem;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                  <polyline points="10 17 15 12 10 7"></polyline>
                  <line x1="15" y1="12" x2="3" y2="12"></line>
                </svg>
                Connexion
              </a>
            `}
          </div>
        </nav>
      </div>
    `;
  },

  setup: () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });

      links.forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navLinks.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
      });
    }
  },

  update: () => {
    const header = document.getElementById('header');
    if (header) {
      header.innerHTML = window.Navbar.render();
      window.Navbar.setup();
    }
  }
};
