function useAuth() {
    const token = localStorage.getItem('token');
    // return Boolean(token);
    if(!token) {
        return false;
    }

    try{
        const decode = jwt_decode(token);
    }
}

export default useAuth;
