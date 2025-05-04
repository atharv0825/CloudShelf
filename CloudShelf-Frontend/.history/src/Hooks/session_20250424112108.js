import jwt_decode from "jwt-decode";
function useAuth() {
    const token = localStorage.getItem('token');
    // return Boolean(token);
    if(!token) {
        return false;
    }

    try{
        const decode = jwt_decode(token.replace("Bearer ", ""));
    }
}

export default useAuth;
