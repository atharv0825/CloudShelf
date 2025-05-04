function useAuth() {
    const token = localStorage.getItem('token');
    // return Boolean(token);
    if(!token) {
        return false;
    }

    tr
}

export default useAuth;
