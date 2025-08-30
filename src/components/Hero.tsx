import { Link } from "react-router-dom";
// import backgroundImage from "./../assets/placeholder.png";
import backgroundImage2 from "./../assets/images/picture2.jpg";

export default function Hero() {
  return (
    <div
      className="hero relative mt-20 flex items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage2})`,
      }}
    >
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Contenu centré avec padding responsive */}
      <div className="container mx-auto px-3 md:px-24 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            SERVICES PROFESSIONNELS EN{" "}
            <span className="bg-gradient-to-bl from-primary to-final bg-clip-text text-transparent">
              CLIMATISATION, FROID{" "}
              <span className="bg-white bg-clip-text">&</span> PLOMBERIE
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            Bénéficiez de solutions fiables et performantes pour vos besoins en
            climatisation, froid industriel, plomberie et maintenance. Notre
            équipe d’experts assure l’installation, l’entretien et la réparation
            de vos équipements pour garantir confort et efficacité toute
            l’année.
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
