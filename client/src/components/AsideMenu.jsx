import { Link } from "react-router-dom";

export function AsideMenu({ display = "hidden" }) {
  return (
    <div
      className={`absolute top-15 z-50 left-0 w-1/5 bg-sky-900  px-3 py-5 ${display}`}
    >
      <h2 className="font-semibold text-xl pb-2 border-b-2 text-center">
        Menú de busqueda
      </h2>
      <ul className="my-5">
        <li className="my-1">
          <Link to="/">Inicio</Link>
        </li>
        <li className="my-1">
          <Link to="/usuarios">Usuarios</Link>
        </li>
        <li className="my-1">
          <Link to="/clientes">Clientes</Link>
        </li>
      </ul>
    </div>
  );
}
