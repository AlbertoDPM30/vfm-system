import { Link } from "react-router-dom";
import { Navbar, Footer } from "../components";
import CarKey from "../../public/icons/car-key.svg";
import CarBuyer from "../../public/icons/car-buyer.svg";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* NAVEGACIÓN */}
      <Navbar />

      <main>
        {/* BANNER PRINCIPAL */}
        <section className="w-full h-[60vh] bg-[url(../../public/img/banner-01.jpg)] bg-center bg-cover">
          <div className="w-full h-full hover:br-radial hove:from-indigo-950/0 hover:to-zinc-50/0 bg-radial from-indigo-950/30 to-black hover:transition hover:ease-in hover:duration-400"></div>
        </section>

        {/* SLOGAN */}
        <section className="w-full bg-black py-6">
          <h2 className="text-6xl px-3 mb-3 text-center leading-relaxed">
            Compra fácil, compra seguro.
            <br />
            Adquiere tu Vehículo hoy
          </h2>
          <div className="w-full flex justify-center">
            <span className="py-1 px-2 text-xl font-medium bg-slate-50 rounded-2xl text-slate-900 flex flex-nowrap items-center gap-1 w-fit">
              Contactanos{" "}
              <a href="contact-us">
                <svg
                  className="bg-black hover:bg-zinc-800 rounded-2xl p-1 m-0"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
            </span>
          </div>
        </section>

        {/* TIPOS DE CLIENTES */}
        <section className="w-full flex flex-wrap">
          <Link
            to="contact-us"
            className="flex flex-col md:w-[50%] w-full justify-center items-center gap-4 bg-zinc-900 hover:bg-radial hover:from-zinc-900 hover:to-zinc-800/25 to-75% text-center p-20"
          >
            <img src={CarKey} alt="Propietario" className="max-w-[10rem]" />
            <span>
              ¿Eres <b>propietario</b> de un Vehículo <br />y quieres{" "}
              <b>Venderlo</b>?
            </span>
          </Link>
          <Link
            to="contact-us"
            className="flex flex-col md:w-[50%] w-full justify-center items-center gap-4 bg-zinc-900 hover:bg-radial hover:from-zinc-900 hover:to-zinc-800/25 to-75% text-center p-20"
          >
            <img src={CarBuyer} alt="Propietario" className="max-w-[10rem]" />
            <span>
              ¿Estás <b>interesado</b> en adquirir <br />
              tu <b>nuevo</b> vehículo?
            </span>
          </Link>
        </section>

        <section className="w-full bg-black py-10 flex flex-col justify-center items-center gap-6">
          <h2 className="font-bold text-4xl">
            Somos más que compra-venta de vehículos
          </h2>
          <a href="services" className="text-2xl">
            Conoce todos los servicios que te ofrecemos
          </a>
        </section>
      </main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}
