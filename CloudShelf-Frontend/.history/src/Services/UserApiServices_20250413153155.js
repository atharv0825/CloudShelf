export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:9090/cloudshelf/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });

        return response;   // Make sure you return response here
    } catch (error) {
        console.error("Service Error:", error);
        throw error;   // Let handleSubmit catch it
    }
};

export const loginUser = async () =>{
    const response = await fetch("http://localhost:9090/cloudshelf/api/login" , {
        method = ''
    })
}
