// Global App class and initialization
class App {
    constructor() {
        this.router = new window.Router({
            '/': window.HomePage,
            '/program': window.ProgramPage,
            '/speakers': window.SpeakersPage,
            '/information': window.InformationPage,
            '/partners': window.PartnersPage,
            '/organizers': window.OrganizersPage,
            '/login': window.LoginPage,
            '/dashboard': window.DashboardPage
        });
    }

    async init() {
        // Render Layout
        document.getElementById('header').innerHTML = window.Navbar.render();
        window.Navbar.setup();
        document.getElementById('footer').innerHTML = window.Footer.render();
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new App();
        window.app.init();
    });
} else {
    window.app = new App();
    window.app.init().then(() => {
        window.Router.handleRoute();
    });
}
