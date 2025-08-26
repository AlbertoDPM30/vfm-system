import { Navigate } from "react-router-dom";
import { useAuth } from "./context/authContext";

export const ProtectedRoute = ({ children }) => {
  const { token, user } = useAuth();

  // Si no hay un token (el usuario no está logueado), redirige a la página de login.
  if (!token || !user) {
    return <Navigate to="/login" replace />;
  }

  // Si el usuario está autenticado, renderiza la ruta.
  return children;
};
