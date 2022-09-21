import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { senaiApi, validarUser } from "../services";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const coverUser = localStorage.getItem("user");

    if (coverUser) {
      setUser(JSON.parse(coverUser));
    }

    setLoading(false);
  }, []);

  const login = async (email, password) => {
    const response = await validarUser(email, password);
    console.log("login", response.data);

    const authUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(authUser));
    localStorage.setItem("token", token);

    senaiApi.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(authUser);
    navigate("/");
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    senaiApi.defaults.headers.Authorization = null;
    setUser(null);
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
