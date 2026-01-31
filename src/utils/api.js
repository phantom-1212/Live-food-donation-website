const API_BASE_URL = 'http://localhost:5001/api';

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Registration failed');
        }
        return data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        return data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

export const saveDonation = async (donation) => {
    try {
        const response = await fetch(`${API_BASE_URL}/donations`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(donation),
        });
        if (!response.ok) {
            throw new Error('Failed to save donation');
        }
        return await response.json();
    } catch (error) {
        console.error('Error saving donation:', error);
        throw error;
    }
};

export const getDonations = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/donations`);
        if (!response.ok) {
            throw new Error('Failed to fetch donations');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching donations:', error);
        return [];
    }
};
