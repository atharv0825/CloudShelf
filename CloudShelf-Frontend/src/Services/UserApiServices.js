const BASE_URL = 'http://localhost:9090/cloudshelf/api';

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        return response;
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

export const loginUser = async ({ email, password }) => {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        return response;
    } catch (error) {
        console.error("Service Error:", error);
        throw error;
    }
};

export const deleteImage = async (imageURL) => {
    try {
        const token = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        console.log(email);
        const response = await fetch(`${BASE_URL}/delete-image?email=${email}&imageUrl=${encodeURIComponent(imageURL)}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Image deleted successfully:", imageURL);
        return response;

    } catch (error) {
        console.error("Error deleting image:", error);
        throw error;
    }
};

export const getFiles = async (email) => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/userdata?email=${encodeURIComponent(email)}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const file = await response.json();
        return file;
    } catch (error) {
        console.error("Error fetching user files:", error);
        return [];
    }
};

export const getUsername = async () => {
    try {
        const email = localStorage.getItem('email');
        const token = localStorage.getItem('token');

        if (!email) {
            throw new Error("Email not found in localStorage");
        }

        const response = await fetch(`${BASE_URL}/getUsername?email=${encodeURIComponent(email)}`, {
            method: 'GET',
            headers: {
                'Authorization': `${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch username. Status: ${response.status}`);
        }

        const username = await response.text();  
        return username;

    } catch (error) {
        console.error("Error fetching username:", error);
        return null;
    }
};
