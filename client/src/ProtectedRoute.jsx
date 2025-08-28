import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { Loading } from "./components";

export const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();

  // Si aún está cargando, no renderizamos nada
  if (loading) {
    return <Loading />;
  }

  // Si ya no está cargando y no hay un token, redirigimos al login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, mostramos el componente hijo
  return children;
};
