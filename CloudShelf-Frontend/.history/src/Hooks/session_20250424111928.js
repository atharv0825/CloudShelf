function useAuth() {
    const token = localStorage.getItem('token');
    // return Boolean(token);
    if(!token) {
        return false;
    }

    try
}

export default useAuth;
