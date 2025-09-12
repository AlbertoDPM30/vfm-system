import { Footer, Navbar } from "../components";

import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-zinc-800 min-h-screen pb-16 text-white">
        <div className="text-center mb-12 pt-18 pb-3 bg-black">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl tracking-tight">
            Contáctanos
          </h1>
          <p className="mt-4 text-xl text-zinc-300 max-w-2xl mx-auto">
            Estamos listos para ayudarte a encontrar el vehículo perfecto o a
            vender el tuyo. ¡Contáctanos!
          </p>
        </div>

        <div className="bg-black rounded-xl shadow-lg p-8 max-w-xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-blue-400 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <a
                  href="mailto:info@concesionario.com"
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  info@vfmotors.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaWhatsapp className="text-blue-400 text-2xl" />
              <div>
                <h3 className="text-lg font-semibold text-white">Teléfono</h3>
                <a
                  href="https://wa.me/584141234567"
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition-colors duration-300"
                >
                  +58 414 123 4567
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-700">
            <h3 className="text-lg font-semibold text-white text-center mb-4">
              Síguenos
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="/contact-us"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-3xl" />
              </a>
              <a
                href="/contact-us"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-3xl" />
              </a>
              <a
                href="/contact-us"
                className="text-zinc-400 hover:text-white transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
