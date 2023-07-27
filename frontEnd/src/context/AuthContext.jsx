import { createContext, useEffect, useState } from "react";
import { getMyDataService } from "../service";

export const AuthContext = createContext(null);

export const AuthContextProviderComponent = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});
  const [idUser, setIdUser] = useState(localStorage.getItem("iduser"));

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const data = await getMyDataService(token);
        setUser(data);
      } catch (error) {
        setToken("");
        setUser({});
      }
    };

    if (token) getUserData();
  }, [token, setToken]);

  const logout = () => {
    setToken("");
    setUser(null);
  };

  const login = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        idUser,
        setIdUser,
        setToken,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
