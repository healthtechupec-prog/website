// Global API Service
window.ApiService = {
    // Dynamic URL: empty string for same-origin in production, localhost for development
    baseUrl: window.location.hostname === 'localhost' ? 'http://localhost:8000' : '',

    // Get stored token
    getToken() {
        return localStorage.getItem('access_token');
    },

    // Build headers with optional auth
    getHeaders(includeAuth = true) {
        const headers = {
            'Content-Type': 'application/json',
        };

        if (includeAuth) {
            const token = this.getToken();
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return headers;
    },

    // Generic request handler
    async request(endpoint, options = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const config = {
            ...options,
            headers: {
                ...this.getHeaders(options.includeAuth !== false),
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);

            // Handle 401 - Token expired
            if (response.status === 401) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('user');
                window.location.hash = '#/login';
                throw new Error('Session expirée. Veuillez vous reconnecter.');
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Une erreur est survenue');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    // GET request
    async get(endpoint) {
        return this.request(endpoint, { method: 'GET' });
    },

    // POST request
    async post(endpoint, data, includeAuth = true) {
        return this.request(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
            includeAuth,
        });
    },

    // POST form data (for login)
    async postForm(endpoint, formData) {
        const url = `${this.baseUrl}${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.detail || 'Une erreur est survenue');
            }

            return data;
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    },

    // PUT request
    async put(endpoint, data) {
        return this.request(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });
    },

    // DELETE request
    async delete(endpoint) {
        return this.request(endpoint, { method: 'DELETE' });
    },
};
