import NotFound404 from "../../public/icons/404.svg";

export function NotFound() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center gap-3">
      <img src={NotFound404} alt="404" className="max-w-[16rem]" />
      <span className="text-xl">Página no encontrada</span>
      <h1>Error 404</h1>
      <a href="/" className="text-blue-500 underline">
        Volver al inicio
      </a>
    </div>
  );
}
