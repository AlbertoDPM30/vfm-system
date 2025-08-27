import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
export const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/login"); // Redirige al dashboard después del login
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <header className="relative">
      <nav className="p-2 w-full static top-0 bg-sky-900 flex justify-between items-center">
        <button className="border-2 border-slate-600 hover:border-slate-300 bg-transparent text-gray-300">
          Menú
        </button>
        <h3 className="text-4xl font-bold">VehiForza Motors SYSTEM</h3>
        <button
          onClick={handleLogout}
          className="border-2 border-slate-600 hover:border-slate-300 bg-transparent text-gray-300"
        >
          Salir
        </button>
      </nav>
    </header>
  );
};
