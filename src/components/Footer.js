// Global Footer component
window.Footer = {
  render: () => {
    return `
      <div class="container footer-content">
        <div class="footer-col">
          <h3>Hackathon Health-Tech</h3>
          <p data-i18n="home.hero.date">5-6 Février 2026</p>
          <p data-i18n="home.hero.location">Campus de Vitry-sur-Seine</p>
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
          <h3>📧 Contact</h3>
          <p><a href="mailto:health.tech.upec@gmail.com" style="color: var(--color-primary-400);">health.tech.upec@gmail.com</a></p>
        </div>
      </div>
      <div class="copyright">
        © 2026 Hackathon Health-Tech UPEC. Tous droits réservés.
      </div>
    `;
  }
};

