import { Navbar, Footer } from "../components";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="text-center mb-12 bg-black">
        <h1 className="text-4xl font-extrabold text-zing-100 pt-18 sm:text-5xl lg:text-6xl tracking-tight">
          Sobre Nosotros
        </h1>
        <p className="mt-4 pb-3 text-xl max-w-2xl mx-auto">
          Impulsando el futuro de la automoción con confianza y calidad.
        </p>
      </div>

      <div className="bg-black mx-10 mb-5 rounded-xl shadow-lg overflow-hidden md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-96 w-full object-cover md:w-96"
            src="../../public/img/banner-about_us.jpg"
            alt="Concesionario de vehículos"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
            Nuestra Misión
          </div>
          <h2 className="mt-2 text-3xl font-bold text-zinc-100">
            Tu destino para la compra y venta de vehículos
          </h2>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Somos un concesionario dedicado a la{" "}
            <b>compra y venta de todo tipo de vehículos</b>, desde autos
            compactos hasta SUVs de lujo. Nuestra misión es ofrecer a nuestros
            clientes una experiencia transparente y confiable, garantizando la
            máxima calidad en cada transacción.
          </p>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            En nuestro concesionario, nos enorgullecemos de tener un amplio
            inventario que se ajusta a cada necesidad y presupuesto. Ya sea que
            busques el coche de tus sueños o quieras vender tu vehículo actual a
            un precio justo, nuestro equipo de expertos está aquí para ayudarte.
          </p>
          <div className="mt-10 text-end">
            <a href="/contact-us">Contactanos para saber más</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
