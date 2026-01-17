// Global API Service
window.ApiService = {
    // Dynamic URL: 
    // - file:// protocol → direct to localhost:8000 (opening HTML file directly)
    // - localhost on common dev ports (3000, 5173, 5500) → localhost:8000 (Vite, Live Server, etc)
    // - localhost on port 80/8080 or production → /api (nginx proxy)
    baseUrl: (() => {
        const isLocalFile = window.location.protocol === 'file:';
        const port = window.location.port;
        const devPorts = ['3000', '3001', '5173', '5174', '5500', '5501', '4200', '8888'];
        const isLocalDevServer = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
            && devPorts.includes(port);

        if (isLocalFile || isLocalDevServer) {
            return 'http://localhost:8000';
        }
        // Docker/Production: use /api prefix (nginx reverse proxy)
        return '/api';
    })(),

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
