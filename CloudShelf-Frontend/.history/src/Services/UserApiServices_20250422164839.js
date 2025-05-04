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

export const loginUser = async ({ email, password }) => {
    try {
        const response = await fetch("http://localhost:9090/cloudshelf/api/login", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        
        return response;
    }catch (error) {
        console.error("Service Error:", error);
        throw error;   
    }
}

export const deleteImage = async(imageURL)=>{
    try{
        const token = localStorage.getItem('token')
        const response = await fetch('http://localhost:9090/clouds')
    }catch(error){
        console.error("Error deleting image:", error);
        throw error;
    }
}
export const getFiles = async (email) =>{
    try{
        const token = localStorage.getItem('token')
        const response = await fetch(`http://localhost:9090/cloudshelf/api/userdata?email=${encodeURIComponent(email)}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}` 
            }
        })
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const file = await response.json();
        console.log(file);
        return file;
    }catch(error){
        console.error("Error fetching user files:", error);
        return [];
    }

}