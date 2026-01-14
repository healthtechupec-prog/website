// Global Register Page
window.RegisterPage = {
    render: async () => {
        // Redirect if already logged in
        if (window.AuthService && window.AuthService.isAuthenticated()) {
            window.location.hash = '#/dashboard';
            return '';
        }

        return `
      <div class="container section" style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 2rem 1rem;">
        <div class="card" style="max-width: 500px; width: 100%; padding: 2.5rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 64px; height: 64px; background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600)); border-radius: 16px; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: white;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h1 style="font-size: 2rem; margin-bottom: 0.5rem; color: var(--color-primary-800);" data-i18n="register.title">Inscription</h1>
            <p style="color: var(--color-gray-600);" data-i18n="register.subtitle">Créez votre compte pour participer</p>
          </div>

          <form id="register-form" style="display: flex; flex-direction: column; gap: 1.25rem;">
            <div id="register-error" style="display: none; background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); color: #dc2626; padding: 1rem; border-radius: var(--radius-md); font-size: 0.9rem;"></div>
            <div id="register-success" style="display: none; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: var(--color-primary-700); padding: 1rem; border-radius: var(--radius-md); font-size: 0.9rem;"></div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label for="nom" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="register.lastName">Nom</label>
                <input 
                  type="text" 
                  id="nom" 
                  name="nom" 
                  required
                  autocomplete="family-name"
                  style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none;"
                  onfocus="this.style.borderColor='var(--color-primary-400)'; this.style.boxShadow='0 0 0 3px rgba(16, 185, 129, 0.1)'"
                  onblur="this.style.borderColor='var(--color-gray-200)'; this.style.boxShadow='none'"
                  placeholder="Dupont"
                />
              </div>
              <div>
                <label for="prenom" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="register.firstName">Prénom</label>
                <input 
                  type="text" 
                  id="prenom" 
                  name="prenom" 
                  required
                  autocomplete="given-name"
                  style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none;"
                  onfocus="this.style.borderColor='var(--color-primary-400)'; this.style.boxShadow='0 0 0 3px rgba(16, 185, 129, 0.1)'"
                  onblur="this.style.borderColor='var(--color-gray-200)'; this.style.boxShadow='none'"
                  placeholder="Jean"
                />
              </div>
            </div>

            <div>
              <label for="email" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="register.email">Email</label>
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
              <label for="password" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="register.password">Mot de passe</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                required
                minlength="6"
                autocomplete="new-password"
                style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none;"
                onfocus="this.style.borderColor='var(--color-primary-400)'; this.style.boxShadow='0 0 0 3px rgba(16, 185, 129, 0.1)'"
                onblur="this.style.borderColor='var(--color-gray-200)'; this.style.boxShadow='none'"
                placeholder="••••••••"
              />
              <p style="font-size: 0.8rem; color: var(--color-gray-500); margin-top: 0.25rem;">Minimum 6 caractères</p>
            </div>

            <div>
              <label for="role" style="display: block; margin-bottom: 0.5rem; font-weight: 500; color: var(--color-gray-700);" data-i18n="register.role">Rôle</label>
              <select 
                id="role" 
                name="role" 
                required
                style="width: 100%; padding: 0.875rem 1rem; border: 2px solid var(--color-gray-200); border-radius: var(--radius-md); font-size: 1rem; transition: border-color 0.2s, box-shadow 0.2s; outline: none; background: white; cursor: pointer;"
                onfocus="this.style.borderColor='var(--color-primary-400)'; this.style.boxShadow='0 0 0 3px rgba(16, 185, 129, 0.1)'"
                onblur="this.style.borderColor='var(--color-gray-200)'; this.style.boxShadow='none'"
              >
                <option value="2" data-i18n="register.roleStudent">Étudiant</option>
                <option value="3" data-i18n="register.roleExpert">Expert / Mentor</option>
              </select>
            </div>

            <button 
              type="submit" 
              class="btn"
              id="register-btn"
              style="width: 100%; padding: 1rem; font-size: 1rem; font-weight: 600; margin-top: 0.5rem;"
            >
              <span data-i18n="register.submit">Créer mon compte</span>
            </button>
          </form>

          <div style="text-align: center; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--color-gray-200);">
            <p style="color: var(--color-gray-600);">
              <span data-i18n="register.hasAccount">Déjà un compte ?</span>
              <a href="#/login" style="color: var(--color-primary-600); font-weight: 600; margin-left: 0.25rem; text-decoration: none;" data-i18n="register.login">Se connecter</a>
            </p>
          </div>
        </div>
      </div>
    `;
    },

    setup: () => {
        const form = document.getElementById('register-form');
        const errorDiv = document.getElementById('register-error');
        const successDiv = document.getElementById('register-success');
        const submitBtn = document.getElementById('register-btn');

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();

                const userData = {
                    nom: document.getElementById('nom').value,
                    prenom: document.getElementById('prenom').value,
                    email: document.getElementById('email').value,
                    mot_de_passe: document.getElementById('password').value,
                    id_role: parseInt(document.getElementById('role').value),
                };

                // Hide previous messages
                errorDiv.style.display = 'none';
                successDiv.style.display = 'none';

                // Disable button and show loading
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span style="display: flex; align-items: center; justify-content: center; gap: 0.5rem;"><svg width="20" height="20" viewBox="0 0 24 24" style="animation: spin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"/></svg> Inscription...</span>';

                try {
                    await window.AuthService.register(userData);

                    // Show success message
                    successDiv.textContent = 'Compte créé avec succès ! Redirection vers la connexion...';
                    successDiv.style.display = 'block';

                    // Redirect to login after 2 seconds
                    setTimeout(() => {
                        window.location.hash = '#/login';
                    }, 2000);
                } catch (error) {
                    errorDiv.textContent = error.message || 'Erreur lors de l\'inscription';
                    errorDiv.style.display = 'block';

                    // Re-enable button
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<span data-i18n="register.submit">Créer mon compte</span>';
                }
            });
        }
    }
};
