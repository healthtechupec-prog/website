// Global Information Page
window.InformationPage = {
  render: async () => {
    return `
      <div class="container section">
        <div style="text-align: center; margin-bottom: 4rem;">
          <h1 style="margin-bottom: 1rem; font-size: 3rem;" data-i18n="info.title">Informations Pratiques</h1>
          <p style="color: var(--color-gray-600); font-size: 1.125rem;" data-i18n="info.subtitle">Tout ce qu'il faut savoir sur l'événement</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 2rem; margin-bottom: 3rem;">
          <!-- Venue Card -->
          <div class="card" style="background: linear-gradient(135deg, var(--color-primary-50), white);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600)); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h2 style="color: var(--color-primary-700); font-size: 1.5rem; margin: 0;" data-i18n="info.venue.title">Lieu de l'événement</h2>
            </div>
            <p style="font-weight: 600; color: var(--color-gray-800); font-size: 1.1rem;">Université Paris-Est Créteil</p>
            <p style="color: var(--color-gray-600); line-height: 1.7;">Campus de Vitry-sur-Seine<br>122 rue Paul Armangot<br>94400 Vitry-sur-Seine</p>
          </div>
          
          <!-- Dates Card -->
          <div class="card" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), white);">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600)); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              </div>
              <h2 style="color: var(--color-primary-700); font-size: 1.5rem; margin: 0;" data-i18n="info.dates.title">Dates</h2>
            </div>
            <div style="display: grid; gap: 1rem;">
              <div style="padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: var(--radius-md);">
                <p style="font-weight: 700; color: var(--color-primary-700);">Jeudi 5 Février 2026</p>
                <p style="color: var(--color-gray-600); font-size: 0.9rem;">8h00 - 22h00 (nuit possible)</p>
              </div>
              <div style="padding: 1rem; background: rgba(16, 185, 129, 0.1); border-radius: var(--radius-md);">
                <p style="font-weight: 700; color: var(--color-primary-700);">Vendredi 6 Février 2026</p>
                <p style="color: var(--color-gray-600); font-size: 0.9rem;">8h00 - 19h00 (remise des prix)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Lieux sur le campus -->
        <div class="card" style="margin-bottom: 3rem; background: linear-gradient(135deg, rgba(139, 92, 246, 0.05), white);">
          <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #8B5CF6, #7C3AED); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            </div>
            <h2 style="color: var(--color-primary-700); font-size: 1.5rem; margin: 0;">🏫 Lieux sur le campus</h2>
          </div>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem;">
            <div style="padding: 1.25rem; background: white; border-radius: 12px; border-left: 4px solid #8B5CF6; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="font-weight: 700; color: var(--color-primary-800); margin-bottom: 0.5rem;">🏛️ Hall et Amphi Chimie</p>
              <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Accueil et plénière</p>
            </div>
            <div style="padding: 1.25rem; background: white; border-radius: 12px; border-left: 4px solid #10B981; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="font-weight: 700; color: var(--color-primary-800); margin-bottom: 0.5rem;">💻 RDC Bâtiment RT</p>
              <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Salles de travail (salles 01 à 019)</p>
            </div>
            <div style="padding: 1.25rem; background: white; border-radius: 12px; border-left: 4px solid #F59E0B; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="font-weight: 700; color: var(--color-primary-800); margin-bottom: 0.5rem;">🔔 Clocher</p>
              <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Accueil partenaires et QG des coachs</p>
            </div>
            <div style="padding: 1.25rem; background: white; border-radius: 12px; border-left: 4px solid #EC4899; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
              <p style="font-weight: 700; color: var(--color-primary-800); margin-bottom: 0.5rem;">🏘️ Hall Bâtiment RT</p>
              <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Village des métiers</p>
            </div>
          </div>
        </div>
        
        <!-- Transport & Map Section -->
        <div class="card" style="margin-bottom: 3rem; overflow: hidden; padding: 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; min-height: 400px;">
            <!-- Left: Transport Info -->
            <div style="padding: 2rem; display: flex; flex-direction: column; justify-content: center;">
              <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600)); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6v6"></path><path d="M16 6v6"></path><path d="M4 9h16"></path><path d="M4 12h16"></path><path d="M6 19h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path><circle cx="7" cy="16" r="1"></circle><circle cx="17" cy="16" r="1"></circle></svg>
                </div>
                <h2 style="color: var(--color-primary-700); font-size: 1.5rem; margin: 0;">Comment venir ?</h2>
              </div>

              <!-- Eco message -->
              <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05)); padding: 1rem; border-radius: 12px; margin-bottom: 1.5rem; border: 1px solid rgba(16, 185, 129, 0.3);">
                <p style="margin: 0; color: #047857; font-weight: 600; display: flex; align-items: center; gap: 0.5rem;">
                  🌱 Privilégiez les transports en commun et le covoiturage !
                </p>
              </div>
              
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                <!-- Metro -->
                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: linear-gradient(135deg, rgba(0, 60, 166, 0.08), rgba(0, 60, 166, 0.02)); border-radius: 12px; border-left: 4px solid #003CA6;">
                  <div style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: #003CA6; border-radius: 50%; flex-shrink: 0;">
                    <span style="color: white; font-weight: 800; font-size: 1.1rem;">7</span>
                  </div>
                  <div>
                    <p style="font-weight: 600; color: var(--color-gray-800); margin: 0;">Métro Ligne 7</p>
                    <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Villejuif Louis Aragon</p>
                  </div>
                </div>
                
                <!-- Tram -->
                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: linear-gradient(135deg, rgba(110, 202, 151, 0.12), rgba(110, 202, 151, 0.02)); border-radius: 12px; border-left: 4px solid #6ECA97;">
                  <div style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: #6ECA97; border-radius: 50%; flex-shrink: 0;">
                    <span style="color: white; font-weight: 800; font-size: 0.9rem;">T7</span>
                  </div>
                  <div>
                    <p style="font-weight: 600; color: var(--color-gray-800); margin: 0;">Tramway T7</p>
                    <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Domaine Chérioux</p>
                  </div>
                </div>
                
                <!-- Bus -->
                <div style="display: flex; align-items: center; gap: 1rem; padding: 1rem; background: linear-gradient(135deg, rgba(130, 200, 230, 0.15), rgba(130, 200, 230, 0.02)); border-radius: 12px; border-left: 4px solid #82C8E6;">
                  <div style="display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: #82C8E6; border-radius: 50%; flex-shrink: 0;">
                    <span style="color: #1a1a2e; font-weight: 800; font-size: 1.2rem;">🚌</span>
                  </div>
                  <div>
                    <p style="font-weight: 600; color: var(--color-gray-800); margin: 0;">Bus 132 & 185</p>
                    <p style="color: var(--color-gray-600); font-size: 0.9rem; margin: 0;">Arrêt Rue Paul Armangot</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right: Google Map -->
            <div style="position: relative; min-height: 400px;">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.266335259872!2d2.3730737119308754!3d48.776805406324996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673f7847d521b%3A0x193a7eceffdb5b88!2sIUT%20de%20Cr%C3%A9teil-Vitry!5e0!3m2!1sfr!2sfr!4v1767967281628!5m2!1sfr!2sfr"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div style="max-width: 900px; margin: 0 auto;">
          <h2 style="text-align: center; margin-bottom: 2rem; font-size: 2rem; color: var(--color-primary-800);" data-i18n="info.faq.title">Questions Fréquentes</h2>
          
          <div style="display: grid; gap: 1.5rem;">
            <div class="card">
              <h3 style="color: var(--color-primary-700); margin-bottom: 0.75rem; font-size: 1.1rem;" data-i18n="info.faq.q1">Qui peut participer ?</h3>
              <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="info.faq.a1">Tous les étudiants sont les bienvenus ! Ingénieurs, informaticiens, managers, professionnels de santé, juristes... L'événement réunit 150 à 200 participants de profils variés pour former des équipes pluridisciplinaires.</p>
            </div>
            
            <div class="card">
              <h3 style="color: var(--color-primary-700); margin-bottom: 0.75rem; font-size: 1.1rem;" data-i18n="info.faq.q2">Quel est le format de l'événement ?</h3>
              <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="info.faq.a2">Un hackathon de 36 heures avec production de Proof of Concept (PoC). Les finalistes présentent leur projet devant un Grand Jury.</p>
            </div>
            
            <div class="card">
              <h3 style="color: var(--color-primary-700); margin-bottom: 0.75rem; font-size: 1.1rem;" data-i18n="info.faq.q3">C'est gratuit ?</h3>
              <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="info.faq.a3">Oui ! La participation est entièrement gratuite. Les repas sont fournis pendant toute la durée de l'événement (paniers repas, buffet, petit-déjeuner, cocktail de clôture).</p>
            </div>
            
            <div class="card">
              <h3 style="color: var(--color-primary-700); margin-bottom: 0.75rem; font-size: 1.1rem;" data-i18n="info.faq.q4">Que dois-je apporter ?</h3>
              <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="info.faq.a4">Apportez votre ordinateur portable, chargeur, et votre motivation ! Si vous restez la nuit, pensez à un coussin et des affaires de confort.</p>
            </div>

            <div class="card">
              <h3 style="color: var(--color-primary-700); margin-bottom: 0.75rem; font-size: 1.1rem;" data-i18n="info.faq.q5">Comment sont formées les équipes ?</h3>
              <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="info.faq.a5">Les équipes seront formées sur place pour garantir la pluridisciplinarité. Chaque équipe désigne un manager et bénéficie de l'accompagnement de coachs.</p>
            </div>

            <div class="card">
              <h3 style="color: var(--color-primary-700); margin-bottom: 0.75rem; font-size: 1.1rem;" data-i18n="info.faq.q6">Y a-t-il des experts disponibles ?</h3>
              <p style="color: var(--color-gray-700); line-height: 1.7;" data-i18n="info.faq.a6">Oui ! Des experts seront disponibles en présentiel et en distanciel tout au long de l'événement. Vous pourrez solliciter des rendez-vous avec eux. Des ressources et bibliographies seront également accessibles en ligne.</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="card" style="background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700)); text-align: center; padding: 3rem 2rem; margin-top: 3rem; border: none;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h2 style="color: white; font-size: 2rem; margin-bottom: 1rem;" data-i18n="info.cta.title">Une question ?</h2>
            <p style="color: rgba(255,255,255,0.9); margin-bottom: 2rem; font-size: 1.1rem; line-height: 1.7;" data-i18n="info.cta.text">N'hésitez pas à nous contacter pour plus d'informations.</p>
            <a href="mailto:health.tech.upec@gmail.com" class="btn" style="background: white; color: var(--color-primary-700); font-size: 1.1rem; padding: 1rem 2.5rem; font-weight: 600;" data-i18n="info.cta.button">
              📧 Nous contacter
            </a>
          </div>
        </div>
      </div>
    `;
  }
};

