
export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:9090/cloudshelf/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
        
    }            
}