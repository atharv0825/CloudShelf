import { jwtDecode } from "jwt-decode";
function useAuth() {
    const token = localStorage.getItem('token');
    if (!token) {
        return false;
    }

    try {
        const decoded = jwtDecode(token.replace("Bearer ", ""));
        const currentTime = Date.now() / 1000;
        if (decoded.exp && decoded.exp < currentTime) {
            localStorage.removeItem('token');
            return false;
        }
        return true;
    } catch (err) {
        console.error("Error decoding token:", err);
        localStorage.removeItem('token');
        return false;
    }
}

export default useAuth;
