
export const registerUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:9090/cloudshelf/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
    } catch (error) {
        console.error("Error during registration:", error);

        toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 3000,
        });
    }            
}