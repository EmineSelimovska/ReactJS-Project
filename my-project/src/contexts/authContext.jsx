import { createContext } from "react";
import * as authService from "../servises/authService"

import { useNavigate } from "react-router-dom"
import usePersistedState from "../hooks/usePersistedState";
const AuthContext = createContext();

export const AuthProvider = ({
    children,

}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = usePersistedState('user',{});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);
        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/')
    };

    const registerSubmitHandler = async (userDate) => {
        const result = await authService.register(userDate);
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/')

    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

     const data = {
       loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,

   // const [auth, setAuth] = usePersistedState('user');
    
     }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );

}

AuthContext.displayName = 'AuthContext';

export default AuthContext
