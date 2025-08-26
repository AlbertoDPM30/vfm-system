import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const URL = "http://127.0.0.1:8000/api";

  useEffect(() => {
    // Si hay un token en el almacenamiento local, verifica su validez
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get(`${URL}/usuarios`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error("El token expiró o es inválido", error);
          // Si el token es inválido, lo eliminamos y limpiamos el estado.
          setToken(null);
          setUser(null);
          localStorage.removeItem("token");
        });
    }
  }, [token]);

  const login = async (credentials) => {
    try {
      // Envía las credenciales a tu endpoint de login en Laravel
      const response = await axios.post(`${URL}/login`, credentials);
      const { token } = response.data;

      // Almacena el token en el estado y en el almacenamiento local
      setToken(token);
      localStorage.setItem("token", token);

      // Configura el token para todas las futuras peticiones
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      // Opcional: Obtener los datos del usuario y guardarlos
      const userResponse = await axios.get(`${URL}/usuarios`);
      setUser(userResponse.data);
    } catch (error) {
      console.error("Error al iniciar sesión", error.response.data.message);
      throw error;
    }
  };

  const logout = () => {
    // Elimina el token del estado y del almacenamiento local
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
  };

  const authData = {
    token,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
