import { Link } from "react-router-dom";
// import backgroundImage from "./../assets/placeholder.png";
import backgroundImage2 from "./../assets/picture2.jpg";

export default function Hero() {
  return (
    <div
      className="hero relative flex items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage2})`,
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Contenu centré avec padding responsive */}
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            PROFESSIONAL{" "}
            <span className="bg-gradient-to-bl from-primary to-final bg-clip-text text-transparent">
              AIR CONDITIONING
            </span>{" "}
            SERVICES
          </h1>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Experience top-quality cooling solutions tailored to your needs. Our
            expert technicians provide reliable installation, maintenance, and
            repair services to keep your space comfortable year-round.
          </p>

          <div className="flex flex-col pl-4 sm:flex-row sm- gap-4">
            <Link
              to="/services"
              className="bg-intermediaire hover:bg-final hover:text-white text-white-900 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="bg-transparent hover:bg-white hover:text-final text-white font-semibold py-3 px-8 border-2 border-white rounded-lg transition duration-300 text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
