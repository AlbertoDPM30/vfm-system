import { Link } from "react-router-dom";

export function CardItem({ route, icon = "", name }) {
  return (
    <div className="w-full">
      <Link to={route}>
        <div className="flex flex-col justify-center items-center border-4 border-slate-700 hover:border-slate-400 hover:bg-gray-700 transition-colors ease-in-out duration-300 hover:-translate-y-1 p-5 rounded-3xl shadow-xl">
          <img src={icon} alt={name} width={100} />

          <h4 className="font-bold text-slate-200 text-2xl">{name}</h4>
        </div>
      </Link>
    </div>
  );
}
