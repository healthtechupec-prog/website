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
            <div style="position: absolute; top: -12px; left: 20px; background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700)); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-weight: 600; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);" data-i18n="program.day1.badge">
              Jeudi 5 Février 2026
            </div>
            <h2 style="color: var(--color-primary-700); margin-bottom: 1.5rem; margin-top: 1.5rem; font-size: 1.75rem;" data-i18n="program.day1.title">Jour 1 - Lancement</h2>
            <ul style="display: grid; gap: 1rem;">
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">08:00</span>
                <div>
                  <strong data-i18n="program.day1.item1.title">Installation et accueil</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item1.desc">Accueil des participants - Hall Chimie</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">09:00</span>
                <div>
                  <strong data-i18n="program.day1.item2.title">🚀 Lancement de l'événement</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item2.desc">Intervention des partenaires, présentation des règles - Amphi Chimie</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">10:20</span>
                <div>
                  <strong data-i18n="program.day1.item3.title">Installation des équipes</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item3.desc">Ice breaker, choix du manager, démarrage des travaux</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">11:00</span>
                <div>
                  <strong data-i18n="program.day1.item4.title">Atelier managers</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item4.desc">Encadrement par les coachs, méthodologie et répartition des rôles</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">12:30</span>
                <div>
                  <strong data-i18n="program.day1.item5.title">🍽️ Pause déjeuner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item5.desc">Distribution des paniers repas dans les salles</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">13:30</span>
                <div>
                  <strong data-i18n="program.day1.item6.title">Suite des travaux</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item6.desc">Possibilité de solliciter des RDV avec des experts</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">20:00</span>
                <div>
                  <strong data-i18n="program.day1.item7.title">📋 Rendu Livrable 1</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item7.desc">Poursuite des travaux pour les participants qui le souhaitent</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">21:00</span>
                <div>
                  <strong data-i18n="program.day1.item8.title">🍕 Dîner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item8.desc">Buffet pour les participants qui restent</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">22:00</span>
                <div>
                  <strong data-i18n="program.day1.item9.title">Retours sur les livrables</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day1.item9.desc">Envoi à chaque équipe d'un retour sur les livrables</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Day 2 - Vendredi 6 Février 2026 -->
          <div class="card" style="border-left: 4px solid var(--color-primary-700); position: relative; overflow: visible; margin-top: 1rem; padding-top: 2rem;">
            <div style="position: absolute; top: -12px; left: 20px; background: linear-gradient(135deg, var(--color-primary-600), var(--color-primary-700)); color: white; padding: 0.5rem 1rem; border-radius: var(--radius-md); font-weight: 600; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.3);" data-i18n="program.day2.badge">
              Vendredi 6 Février 2026
            </div>
            <h2 style="color: var(--color-primary-700); margin-bottom: 1.5rem; margin-top: 1.5rem; font-size: 1.75rem;" data-i18n="program.day2.title">Jour 2 - Finale</h2>
            <ul style="display: grid; gap: 1rem;">
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">08:00</span>
                <div>
                  <strong data-i18n="program.day2.item1.title">Accueil & Petit-déjeuner</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item1.desc">Suite des travaux</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">09:30</span>
                <div>
                  <strong data-i18n="program.day2.item2.title">🎤 Atelier préparation du pitch</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item2.desc">Conseils pour présenter votre projet</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">11:00</span>
                <div>
                  <strong data-i18n="program.day2.item3.title">Vérification des livrables</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item3.desc">Dernière vérification avant remise finale</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">12:00</span>
                <div>
                  <strong data-i18n="program.day2.item4.title">⏰ Fin des travaux</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item4.desc">Remise des livrables, pause déjeuner, visite du Village des Partenaires</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">14:00</span>
                <div>
                  <strong data-i18n="program.day2.item5.title">Préparation des pitchs</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item5.desc">Répétitions finales</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">15:00</span>
                <div>
                  <strong data-i18n="program.day2.item6.title">📢 Annonce des finalistes</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item6.desc">Révélation des équipes retenues pour la finale</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">15:30</span>
                <div>
                  <strong data-i18n="program.day2.item7.title">🎯 Passage devant le Grand Jury</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item7.desc">Pitchs au format TedX (10 min) - Amphi Chimie</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">18:00</span>
                <div>
                  <strong data-i18n="program.day2.item8.title">Délibérations du Grand Jury</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item8.desc">Le jury délibère pour choisir les gagnants</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm); background: rgba(16, 185, 129, 0.03);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">18:30</span>
                <div>
                  <strong data-i18n="program.day2.item9.title">🏆 Remise des prix</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item9.desc">Cérémonie de remise des prix et mot de clôture</p>
                </div>
              </li>
              <li style="display: flex; gap: 1.5rem; align-items: start; padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                <span style="font-weight: 700; color: var(--color-primary-600); min-width: 70px; background: var(--color-primary-50); padding: 0.4rem; border-radius: var(--radius-sm); text-align: center; font-size: 0.9rem;">19:00</span>
                <div>
                  <strong data-i18n="program.day2.item10.title">🥂 Cocktail de clôture</strong>
                  <p style="color: var(--color-gray-600); margin-top: 0.25rem; font-size: 0.9rem;" data-i18n="program.day2.item10.desc">Célébration et networking - Hall Chimie</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
};
