import CarSearch from "../../public/icons/searching-car.svg";
import CarCredit from "../../public/icons/car-credit.svg";
import CarInsurance from "../../public/icons/auto-insurance.svg";
import Ad from "../../public/icons/ad.svg";

import { Footer, Navbar } from "../components";

export function Services() {
  return (
    <div className="w-full min-h-screen bg-zinc-950">
      {/* NAVEGACIÓN */}
      <Navbar />

      {/* TITUTLO */}
      <h1 className="pt-20 pb-3 text-center font-bold bg-black">
        Conoce nuestros servicios
      </h1>

      {/* SERVICIOS */}
      <div className="w-full flex flex-wrap justify-start items-center gap-10 p-6 md:px-20 bg-linear-to-br from-zinc-900 to-zinc-800/25">
        <img
          src={CarSearch}
          alt="..."
          className="max-w-[10rem] hover:translate-y-2 ease-in-out duration-300"
        />
        <div className="flex-1 text-zinc-100">
          <p className="font-medium text-zinc-100 text-2xl text-wrap">
            Inspección y evaluación del vehículo
          </p>
          <p className="text-lg text-wrap">
            Revisión exhaustiva del estado mecánico y estético del vehículo
          </p>
          <button
            className="text-sky-200 hover:text-sky-100 bg-zinc-700 mt-3"
            type="button"
          >
            Saber más
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-end items-center gap-10 p-6 md:px-20 bg-linear-to-tl from-zinc-900 to-zinc-800/25">
        <div className="flex-1 text-zinc-100">
          <p className="font-medium text-zinc-100 text-2xl text-wrap">
            Papeles en regla y seguro vigente
          </p>
          <p className="text-lg text-wrap line-clamp-2">
            Nos encargamos de que todos los documentos estén actualizados y el
            vehículo cuente con la cobertura necesaria
          </p>
          <div className="flex justify-end me-5">
            <button
              className="text-sky-200 hover:text-sky-100bg-zinc-700 mt-3"
              type="button"
            >
              Saber más
            </button>
          </div>
        </div>
        <img
          src={CarInsurance}
          alt="..."
          className="max-w-[10rem]  hover:translate-y-2 ease-in-out duration-300"
        />
      </div>

      <div className="w-full flex flex-wrap justify-start items-center gap-10 p-6 md:px-20 bg-linear-to-br from-zinc-900 to-zinc-800/25">
        <img
          src={CarCredit}
          alt="..."
          className="max-w-[10rem]  hover:translate-y-2 ease-in-out duration-300"
        />
        <div className="flex-1 text-zinc-100">
          <p className="font-medium text-zinc-100 text-2xl text-wrap">
            Garantía asegurada y financiamiento
          </p>
          <p className="text-lg text-wrap">
            Ofrecemos opciones de financiamiento y una garantía para tu
            tranquilidad
          </p>
          <button
            className="text-sky-200 hover:text-sky-100 bg-zinc-700 mt-3"
            type="button"
          >
            Saber más
          </button>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-end items-center gap-10 p-6 md:px-20 bg-linear-to-tl from-zinc-900 to-zinc-800/25">
        <div className="flex-1 text-zinc-100">
          <p className="font-medium text-zinc-100 text-2xl text-wrap">
            Publicidad y promoción del vehículo
          </p>
          <p className="text-lg text-wrap">
            Nos encargamos de crear anuncios atractivos y difundirlos en
            plataformas relevantes para llegar a más compradores potenciales
          </p>
          <div className="flex justify-end me-5">
            <button
              className="text-sky-200 hover:text-sky-100 bg-zinc-700 mt-3"
              type="button"
            >
              Saber más
            </button>
          </div>
        </div>
        <img
          src={Ad}
          alt="..."
          className="max-w-[10rem]  hover:translate-y-2 ease-in-out duration-300"
        />
      </div>

      {/* CONTACTO */}
      <div className="w-full flex flex-col justify-center items-center gap-6 px-6 py-20 md:px-20 bg-zinc-950">
        <p className="font-medium text-zinc-100 text-xl text-wrap text-center">
          ¿Tienes alguna pregunta o necesitas más información?
        </p>
        <a
          href="https://wa.me/584121234567"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="font-bold text-3xl">Contáctanos</h2>
        </a>
      </div>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
