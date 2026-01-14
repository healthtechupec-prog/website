// Global Auth Service
window.AuthService = {
    // Login user or team
    async login(email, password) {
        const formData = new FormData();
        formData.append('username', email);
        formData.append('password', password);

        const response = await window.ApiService.postForm('/auth/login', formData);

        // Store token
        localStorage.setItem('access_token', response.access_token);

        // Decode and store user info from token
        const tokenData = this.decodeToken(response.access_token);

        // Build user object with account type info
        const user = {
            ...tokenData,
            account_type: response.account_type,
            id_role: response.role
        };

        // For teams, use team info from backend response
        if (response.account_type === 'team') {
            user.id_equipe = response.id_equipe || parseInt(tokenData.sub);
            user.nom = response.nom;
            user.email = response.email;
            user.is_team = true;
        } else {
            user.id_utilisateur = parseInt(tokenData.sub);
            user.is_team = false;
            // Fetch full user info for individual users
            await this.fetchCurrentUser();
            return response;
        }

        localStorage.setItem('user', JSON.stringify(user));
        return response;
    },

    // Logout user
    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user');
        window.location.hash = '#/';

        // Refresh navbar
        if (window.Navbar && window.Navbar.update) {
            window.Navbar.update();
        }
    },

    // Check if user is authenticated
    isAuthenticated() {
        const token = localStorage.getItem('access_token');
        if (!token) return false;

        // Check if token is expired
        try {
            const payload = this.decodeToken(token);
            const exp = payload.exp * 1000;
            return Date.now() < exp;
        } catch (e) {
            return false;
        }
    },

    // Get current user from localStorage
    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    // Get access token
    getToken() {
        return localStorage.getItem('access_token');
    },

    // Fetch current user from API (only for individual users, not teams)
    async fetchCurrentUser() {
        try {
            const user = await window.ApiService.get('/utilisateurs/me');
            user.is_team = false;
            user.account_type = 'user';
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } catch (error) {
            console.warn('Could not fetch user details:', error);
            return this.getCurrentUser();
        }
    },

    // Decode JWT token
    decodeToken(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split('')
                    .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                    .join('')
            );
            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error('Failed to decode token:', e);
            return null;
        }
    },

    // Get user role
    getUserRole() {
        const user = this.getCurrentUser();
        return user ? user.id_role : null;
    },

    // Check if user has specific role
    hasRole(roleId) {
        return this.getUserRole() === roleId;
    },

    // Check if current session is a team
    isTeam() {
        const user = this.getCurrentUser();
        return user ? user.is_team === true : false;
    },

    // Role constants
    ROLES: {
        ADMIN: 1,
        EQUIPE: 2,  // Changed from ETUDIANT to EQUIPE
        EXPERT: 3,
        EXAMINATEUR: 4
    },
};
