import axios from "@/lib/axios";
import { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import {
    createContext,
    ReactNode,
    useContext,
    useLayoutEffect,
    useState
} from "react";

interface IAuthContent {
    token: null | string;
    loginUser: () => void;
    registerUser: () => void;
    logout: () => void;
    resetPassword: () => void;
    updatePassword: () => void
}

interface IAuthProvider {
    children: ReactNode
}

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
    _retry?: boolean;
  }

const AuthContext = createContext<IAuthContent>({
    token: null,
    loginUser: () => {},
    registerUser: () => {},
    logout: () => {},
    resetPassword: () => {},
    updatePassword: () => {}
});

const AuthProvider = ({
    children
}: Readonly<IAuthProvider>) => {
    const [token, setToken] = useState(null);

    useLayoutEffect(() => {
        const authInterceptor = axios.interceptors.request.use((config: CustomAxiosRequestConfig) => {
            if (!config.headers) {
                config.headers = new AxiosHeaders();
            }

            if (!config._retry && token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        });

        return () => {
            axios.interceptors.request.eject(authInterceptor);
        }
    }, [token]);

    useLayoutEffect(() => {
        const refreshInterceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if (
                    error.response.status === 403 &&
                    error.response.data.message === "Unauthorized"
                ) {
                    try {
                        const response = await axios.get("/api/refreshToken");

                        setToken(response.data.accessToken);

                        originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`;
                        originalRequest._retry = true;

                        return axios(originalRequest);
                    } catch {
                        setToken(null);
                    }
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.response.eject(refreshInterceptor);
        }
    }, [token]);

    /**
     * @dev Register new user
     * @param email
     * @param password
     */
    const registerUser = async () => {
        // Register user
    }   

    /**
     * @dev Login user
     * @param email
     * @param password
     */
    const loginUser = async () => {
        // Login user
    } 
    
    /**
     * @dev Logout authenticated user
     */
    const logout = async () => {
        // Logout user
    } 

    /**
     * @dev Send update token/link to user email 
     * @param email
     */
    const resetPassword = async () => {
        // Reset user password
    } 

    /**
     * @dev Send update token/link to user email 
     * @param email
     * @param newPassword
     * @param confirmPassword
     */
    const updatePassword = async () => {
        // Reset user password
    } 

    return (
        <AuthContext.Provider value={{
            token,
            registerUser,
            loginUser,
            logout,
            resetPassword,
            updatePassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => {
    const authContext = useContext(AuthContext);

    if (!authContext) {
        throw new Error("You're outside of AuthContext Scope");
    }

    return authContext;
}


export {
    AuthProvider,
    useAuth
}