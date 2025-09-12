export function Footer() {
  return (
    <footer className="bg-zinc-900 w-full">
      <div className="grid grid-cols-3 gap-5">
        <ul className="flex flex-col gap-4 mx-auto py-3 text-start">
          {/* CATEGORÍAS */}
          <b className="text-2xl">Categorías:</b>
          <li>
            <a href="/">Automoviles</a>
          </li>
          <li>
            <a href="/">Motocicletas</a>
          </li>
          <li>
            <a href="/">Camiones</a>
          </li>
          <li>
            <a href="/">Otros vehiculos</a>
          </li>
        </ul>

        {/* REDES SOCIALES */}
        <ul className="flex flex-col gap-4 mx-auto py-3 text-start">
          <b className="text-2xl">Redes sociales:</b>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">X</a>
          </li>
          <li>
            <a href="/">Tik Tok</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
        </ul>

        {/* CONTACTOS */}
        <ul className="flex flex-col gap-4 mx-auto py-3 text-start">
          <b className="text-2xl">Contactos:</b>
          <li>
            <b>Tlf.:</b> +58 (414) 123 45 67
          </li>
          <li>
            <b>E-mail:</b> info@vfm.test
          </li>
          <li>
            <b>Ubicación:</b> Sin ubicación física,
            <br />
            esta es una página de prueba
          </li>
        </ul>
      </div>
      <div className="w-full py-3 bg-black text-center font-medium">
        Copyright © <a href="https://github.com/AlbertoDPM30">Alberto Pérez</a>{" "}
        2025
      </div>
    </footer>
  );
}
