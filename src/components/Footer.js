// Global Footer component
window.Footer = {
  render: () => {
    return `
      <div class="container footer-content">
        <div class="footer-col">
          <h3>Hackathon Health-Tech</h3>
          <p data-i18n="home.hero.date">5-6 Février 2026</p>
          <p data-i18n="home.hero.location">Paris, France</p>
        </div>
        <div class="footer-col">
          <h3 data-i18n="footer.links">Liens Utiles</h3>
          <ul>
            <li><a href="#/program" data-i18n="nav.program">Programme</a></li>
            <li><a href="#/speakers" data-i18n="nav.speakers">Intervenants</a></li>
            <li><a href="#/partners" data-i18n="nav.partners">Partenaires</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3 data-i18n="footer.contact">Contact</h3>
          <p style="color: var(--color-gray-600);">Contactez-nous via les réseaux sociaux</p>
        </div>
      </div>
      <div class="copyright" data-i18n="footer.copyright">
        © 2025 Hackathon Santé. Tous droits réservés.
      </div>
    `;
  }
};
