import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState()
    const [isAutenticated, setIsAutenticated] = useState(false)
    
    const loginUser = async ({ correo,  contraseña, }) => {
        const res = await axios.post('http://localhost:3000/api/usuario/login', {
            correo,
            contraseña,
        });

        setUserData(res.data.data)
        localStorage.setItem('token', JSON.stringify(res.data.token));
        setIsAutenticated(true)
    };

    const registerUser = async ({ nombre_usuario,  nombre_completo,  correo,  contraseña,  dni }) => {
        const res = await axios.post('http://localhost:3000/api/usuario/register', {
            nombre_usuario,
            nombre_completo,
            correo,
            contraseña,
            dni
        });

        setUserData(res.data.data)
        setIsAutenticated(true)
    };

    const getUserData = async () => {
        try {
            
        const res = await axios.get('http://localhost:3000/api/usuario/profile');
        
        setUserData(res.data.data)
    } catch (error) {
        localStorage.removeItem('token');
        setIsAutenticated(false)
    }
    };

    const editUserData = async (data) => {
        try {
        const res = await axios.patch('http://localhost:3000/api/usuario/update', data);
        
        setUserData(res.data.data)
        return res.data
    } catch (error) {
        setIsAutenticated(false)
    }
    };


    
  useEffect(() => {
    const checkLogin = async () => {
      const cookies = Cookies.get();
      if (!cookies.token) {
        setIsAutenticated(false);
        return;
      }

      try {
        const res = await getUserData();
        if (!res.data) return setIsAutenticated(false);
        setIsAutenticated(true);
      } catch (error) {
        setIsAutenticated(false);
      }
    };
    checkLogin();
  }, []);

    useEffect(()=>{
        if (userData) {
        setIsAutenticated(true)
        }
    },[userData])

    return (
        <UserContext.Provider
            value={{
                loginUser,
                registerUser,
                getUserData,
                editUserData,
                setIsAutenticated,
                userData,
                isAutenticated
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
