import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Header = ({ onToggleShowMenu }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <header className="relative shadow-2xl">
      <nav className="p-2 w-full static top-0 bg-sky-900 flex justify-between items-center">
        <button
          onClick={onToggleShowMenu}
          className="border-2 border-slate-600 hover:border-slate-300 bg-transparent text-gray-300"
        >
          Menú
        </button>
        <h3 className="text-4xl font-bold text-shadow-md">
          VehiForza Motors SYSTEM
        </h3>
        <button
          onClick={handleLogout}
          className="border-2 border-red-800 hover:border-red-800 bg-transparent text-gray-300"
        >
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};
