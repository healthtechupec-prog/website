// Global Program Page
window.ProgramPage = {
  render: async () => {
    return `
      <div class="container section">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h1 style="margin-bottom: 1rem; font-size: 3rem;" data-i18n="program.title">Programme</h1>
          <p style="color: var(--color-gray-600); font-size: 1.125rem;" data-i18n="program.subtitle">36 heures d'innovation intensive sur 2 jours</p>
        </div>
        
        <div style="display: grid; gap: 2.5rem; max-width: 900px; margin: 0 auto;">
          <!-- Day 1 - Jeudi 5 Février 2026 -->
          <div class="card" style="border-left: 4px solid var(--color-primary-500); position: relative; overflow: visible; margin-top: 1rem; padding-top: 2rem;">
            <div style="position: absolute; top: -12px; left: 20px; background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700)); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-weight: 600; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);">
              Jeudi 5 Février 2026
            </div>
            <h2 style="color: var(--color-primary-700); margin-bottom: 1.5rem; margin-top: 1.5rem; font-size: 1.75rem;">Jour 1 - Lancement</h2>
            <ul style="display: grid; gap: 1rem; list-style: none; padding: 0; margin: 0;">
              
              <!-- 08:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">08:00</span>
                <div>
                  <strong>Installation et accueil des participants</strong>
                </div>
              </li>
              
              <!-- 08:30 - Lancement -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">08:30</span>
                <div>
                  <strong>🚀 Lancement de l'événement</strong>
                  <ul style="color: var(--color-gray-600); margin-top: 0.5rem; font-size: 0.9rem; padding-left: 1rem;">
                    <li>Intervention de S. Retailleau – Ex-Ministre de l'Enseignement Supérieur et de la Recherche, Présidente d'Universcience</li>
                    <li>Intervention de K. Bergès – Présidente de l'UPEC</li>
                    <li>Intervention de P. Wolkenstein – Doyen de la Faculté de Santé</li>
                    <li>Intervention de la Mairie de Vitry</li>
                    <li>Présentation des partenaires</li>
                    <li>Présentation des règles et temps forts du hackathon</li>
                  </ul>
                </div>
              </li>
              
              <!-- 11:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">11:00</span>
                <div>
                  <strong>Installation des équipes</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Ice breaker, choix du Team Leader, démarrage des travaux</p>
                </div>
              </li>
              
              <!-- 11:30 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">11:30</span>
                <div>
                  <strong>Atelier Team Leaders</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Encadrement par les coachs, méthodologie, répartition des rôles, choix du projet</p>
                </div>
              </li>
              
              <!-- 13:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">13:00</span>
                <div>
                  <strong>🍽️ Pause déjeuner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Distribution du repas aux équipes dans les salles</p>
                </div>
              </li>
              
              <!-- 14:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">14:00</span>
                <div>
                  <strong>Suite des travaux</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Encadrement par les coachs, possibilité de solliciter des RDV avec des experts</p>
                </div>
              </li>
              
              <!-- 19:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">19:00</span>
                <div>
                  <strong>📋 Rendu du livrable intermédiaire</strong>
                </div>
              </li>
              
              <!-- 19:30 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">19:30</span>
                <div>
                  <strong>🍕 Dîner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Pour les participants restant le soir</p>
                </div>
              </li>
              
              <!-- 22:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">22:00</span>
                <div>
                  <strong>Retours sur les livrables</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Envoi à chaque équipe d'un retour sur son livrable intermédiaire</p>
                </div>
              </li>
              
              <!-- 23:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">23:00</span>
                <div>
                  <strong>🌙 Fermeture des locaux</strong>
                </div>
              </li>
            </ul>
          </div>

          <!-- Day 2 - Vendredi 6 Février 2026 -->
          <div class="card" style="border-left: 4px solid var(--color-primary-700); position: relative; overflow: visible; margin-top: 1rem; padding-top: 2rem;">
            <div style="position: absolute; top: -12px; left: 20px; background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700)); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-weight: 600; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);">
              Vendredi 6 Février 2026
            </div>
            <h2 style="color: var(--color-primary-700); margin-bottom: 1.5rem; margin-top: 1.5rem; font-size: 1.75rem;">Jour 2 - Finale</h2>
            <ul style="display: grid; gap: 1rem; list-style: none; padding: 0; margin: 0;">
              
              <!-- 08:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">08:00</span>
                <div>
                  <strong>Accueil & Petit-déjeuner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Poursuite des travaux, possibilité de solliciter des RDV avec des experts</p>
                </div>
              </li>
              
              <!-- 09:30 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">09:30</span>
                <div>
                  <strong>🎤 Atelier préparation au pitch</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Un membre par équipe</p>
                </div>
              </li>
              
              <!-- 11:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">11:00</span>
                <div>
                  <strong>Vérification des livrables</strong>
                </div>
              </li>
              
              <!-- 11:30 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">11:30</span>
                <div>
                  <strong>🏘️ Village des métiers</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Visite et échanges avec les entreprises présentes</p>
                </div>
              </li>
              
              <!-- 12:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">12:00</span>
                <div>
                  <strong>⏰ Fin des travaux</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Envoi des livrables, analyse par les jurys intermédiaires</p>
                </div>
              </li>
              
              <!-- 13:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">13:00</span>
                <div>
                  <strong>🍽️ Déjeuner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Distribution des repas aux équipes</p>
                </div>
              </li>
              
              <!-- 14:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">14:00</span>
                <div>
                  <strong>Préparation des pitchs</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Finalisation</p>
                </div>
              </li>
              
              <!-- 14:45 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">14:45</span>
                <div>
                  <strong>📢 Annonce des équipes finalistes</strong>
                </div>
              </li>
              
              <!-- 15:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">15:00</span>
                <div>
                  <strong>🎯 Passage devant le Grand Jury</strong>
                  <ul style="color: var(--color-gray-600); margin-top: 0.5rem; font-size: 0.9rem; padding-left: 1rem;">
                    <li>Présentation des membres du Grand Jury</li>
                    <li>Pitch des équipes finalistes</li>
                    <li>Délibérations du Grand Jury</li>
                    <li>Bilan des grands témoins</li>
                  </ul>
                </div>
              </li>
              
              <!-- 17:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">17:00</span>
                <div>
                  <strong>🏆 Remise des prix</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;">Annonce des lauréats et mots de clôture</p>
                </div>
              </li>
              
              <!-- 18:00 -->
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">18:00</span>
                <div>
                  <strong>🥂 Cocktail de clôture</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
};

