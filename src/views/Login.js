// Global Login Page
window.LoginPage = {
  render: async () => {
    // Redirect if already logged in
    if (window.AuthService && window.AuthService.isAuthenticated()) {
      window.location.hash = '#/dashboard';
      return '';
    }

    return `
      <div class="container section" style="min-height: 80vh; display: flex; align-items: center; justify-content: center;">
        <div class="card" style="max-width: 450px; width: 100%; padding: 2.5rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600)); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: white;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
              </svg>
            </div>
            <h1 style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-primary-800);" data-i18n="login.title">Connexion</h1>
            <p style="color: var(--color-gray-600);" data-i18n="login.subtitle">Accédez à votre espace personnel</p>
          </div>

          <form id="login-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div id="login-error" style="display: none; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #dc2626; padding: 1rem; border-radius: var(--radius-md); font-size: 0.9rem;"></div>
            
            <div>
              <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="login.email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required
                autocomplete="email"
                style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none;"
                onfocus="this.style.borderColor='var(--color-primary-400)'; this.style.boxShadow='0 0 0 3px rgba(16, 185, 129, 0.1)'"
                onblur="this.style.borderColor='var(--color-gray-200)'; this.style.boxShadow='none'"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label for="password" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="login.password">Mot de passe</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required
                autocomplete="current-password"
                style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none;"
                onfocus="this.style.borderColor='var(--color-primary-400)'; this.style.boxShadow='0 0 0 3px rgba(16, 185, 129, 0.1)'"
                onblur="this.style.borderColor='var(--color-gray-200)'; this.style.boxShadow='none'"
                placeholder="••••••••"
              />
            </div>

            <button 
              type="submit" 
              class="btn"
              id="login-btn"
              style="width: 100%; padding: 1rem; font-size: 1rem; font-weight: 600; margin-top: 0.5rem;"
            >
              <span data-i18n="login.submit">Se connecter</span>
            </button>
          </form>


        </div>
      </div>
    `;
  },

  setup: () => {
    const form = document.getElementById('login-form');
    const errorDiv = document.getElementById('login-error');
    const submitBtn = document.getElementById('login-btn');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Disable button and show loading
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"/></svg> Connexion...</span>';

        try {
          await window.AuthService.login(email, password);

          // Refresh navbar
          if (window.Navbar && window.Navbar.update) {
            window.Navbar.update();
          }

          // Redirect to dashboard
          window.location.hash = '#/dashboard';
        } catch (error) {
          errorDiv.textContent = error.message || 'Erreur de connexion';
          errorDiv.style.display = 'block';

          // Re-enable button
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span data-i18n="login.submit">Se connecter</span>';
        }
      });
    }
  }
};
