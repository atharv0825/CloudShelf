import jwt_decode from "jwt-decode";
function useAuth() {
    const token = localStorage.getItem('token');
    // return Boolean(token);
    if(!token) {
        return false;
    }

    try{
        const decode = jwt_decode(token.replace("Bearer ", ""));
        const currentTime = Date.now()/1000;
        if(decode.exp && decode.exp < currentTime) {
            localStorage.removeItem('token');
            return false;
        }
        return true;
    }
    catch(err) {
        console.error("Error decoding token:", err);
        return false;
    }
}

export default useAuth;
