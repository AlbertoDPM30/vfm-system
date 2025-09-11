import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export function Navbar() {
  const { token } = useAuth();

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    return token ? setIsAuth(true) : setIsAuth(false);
  }, []);

  return (
    <nav className="w-full flex justify-between items-center px-3 py-4 bg-linear-to-b from-sky-900/20 to-zinc-950/5  shadow-2xl fixed top-0">
      <a href="/">
        <h2 className="text-4xl text-shadow-md font-bold">VehiForza Motors</h2>
      </a>
      <ul className="flex gap-5">
        <li>
          <a href="/services">Servicios</a>
        </li>
        <li>
          <a href="/about-us">Sobre nosotros</a>
        </li>
        <li>
          <a href="/contact-us">Contactanos</a>
        </li>
        <li>
          <a href="/faq">FAQ</a>
        </li>
        <li className={isAuth ? "hidden" : "block"}>
          <a
            className="border-2 rounded-xl border-slate-500 p-2 hover:border-slate-200 ease-in-out duration-300"
            href="/login"
          >
            Iniciar sesión
          </a>
        </li>
        <li className={!isAuth ? "hidden" : "block"}>
          <a
            className="border-2 rounded-xl border-slate-500 p-2 hover:border-slate-200 ease-in-out duration-300"
            href="/dashboard"
          >
            Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
}
