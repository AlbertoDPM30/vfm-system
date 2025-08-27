export const Header = () => {
  return (
    <header className="relative">
      <nav className="p-2 w-full static top-0 bg-sky-900 flex justify-between items-center">
        <button className="border-2 border-slate-600 hover:border-slate-300 bg-transparent text-gray-300">
          Menú
        </button>
        <h3 className="text-4xl font-bold">VehiForza Motors SYSTEM</h3>
        <button className="border-2 border-slate-600 hover:border-slate-300 bg-transparent text-gray-300">
          Salir
        </button>
      </nav>
    </header>
  );
};
