// Global Router class
window.Router = class {
    constructor(routes) {
        this.routes = routes;
        this.currentPath = '';

        // Protected routes that require authentication
        this.protectedRoutes = ['/dashboard'];

        // Routes that should redirect to dashboard if already logged in
        this.guestOnlyRoutes = ['/login'];

        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    async handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        this.currentPath = hash;

        // Check if route requires authentication
        if (this.protectedRoutes.includes(hash)) {
            if (!window.AuthService || !window.AuthService.isAuthenticated()) {
                window.location.hash = '#/login';
                return;
            }
        }

        // Check if route is guest-only (redirect logged in users)
        if (this.guestOnlyRoutes.includes(hash)) {
            if (window.AuthService && window.AuthService.isAuthenticated()) {
                window.location.hash = '#/dashboard';
                return;
            }
        }

        const route = this.routes[hash] || this.routes['/404'] || this.routes['/'];
        const main = document.getElementById('main-content');

        // Update active state in navbar
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${hash}`);
        });

        if (main && route) {
            main.innerHTML = await route.render();

            // Scroll to top of page on navigation
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Call setup function if it exists
            if (route.setup) {
                route.setup();
            }

            // Update navbar state
            if (window.Navbar && window.Navbar.update) {
                window.Navbar.update();
            }
        }
    }

    navigate(path) {
        window.location.hash = path;
    }
};
