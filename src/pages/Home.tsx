import { Link } from "react-router-dom";
import { useState } from "react";

import factory from "./../assets/factory.png";
import home from "./../assets/home.png";
import hospital from "./../assets/hospital.png";
import hotel from "./../assets/hotel.png";
import microscope from "./../assets/microscope.png";
import marketplace from "./../assets/small-business.png";

import "yet-another-react-lightbox/styles.css";

import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import Galleries from "../components/Galleries";
import Testimonials from "../components/SaysAboutUs";
import Blog from "../components/Blog";

import backgroundImage2 from "./../assets/images/picture2.jpg";
import backgroundImage1 from "./../assets/images/picture1.jpg";
import excellence from "./../assets/excellence.png";
import innovation from "./../assets/innovation.png";
import engagement from "./../assets/handshake.png";

export default function Home() {
  // states
  const [activeTab, setActiveTab] = useState<"services" | "values">("services");

  const valueBackgrounds = [
    "bg-red-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-yellow-100",
  ];

  const services = [
    {
      title: "Climatisation & Chauffage",
      description:
        "Installation, maintenance et réparation de systèmes de climatisation et de chauffage pour assurer votre confort en toute saison.",
    },
    {
      title: "Solutions de Froid",
      description:
        "Conception, installation et entretien de chambres froides, vitrines et équipements frigorifiques pour vos besoins résidentiels et commerciaux.",
    },
    {
      title: "Plomberie",
      description:
        "Services complets de plomberie : installation, dépannage et entretien pour garantir la fiabilité de vos réseaux d’eau.",
    },
    {
      title: "Maintenance & Réparations",
      description:
        "Plans de maintenance préventive et interventions d’urgence 24/7 pour prolonger la durée de vie de vos installations et réduire les pannes.",
    },
  ];

  const handleTabClick = (tab: "services" | "values") => (): void => {
    setActiveTab(tab);
  };

  return (
    <>
      <Hero />

      <div className=" bg-gray-50 mx-auto sm:px-8 lg:px-36">
        <h1 className="py-16 text-3xl text-black font-bold uppercase">
          Une équipe{" "}
          <span className="bg-gradient-to-bl from-primary to-final bg-clip-text text-transparent">
            compétente
          </span>{" "}
          et qualifiée ouverte à tous les secteurs
        </h1>
        <div className="axe px-8 sm:px-12 lg:px-24 pb-12 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          <div className="py-10 bg-intermediaire flex flex-col items-center rounded gap-1 hover:translate-y-2 duration-300">
            <img src={factory} alt="" />
            <span className="text-white">Industries</span>
          </div>

          <div className="py-10 bg-intermediaire flex flex-col items-center rounded gap-1 hover:translate-y-2 duration-300">
            <img src={home} alt="" />
            <span className="text-white">Maisons</span>
          </div>

          <div className="py-10 bg-intermediaire flex flex-col items-center rounded gap-1 hover:translate-y-2 duration-300">
            <img src={hospital} alt="" />
            <span className="text-white">Sanitaire</span>
          </div>

          <div className="py-10 bg-intermediaire flex flex-col items-center rounded gap-1 hover:translate-y-2 duration-300">
            <img src={microscope} alt="" />
            <span className="text-white">Laboratoires</span>
          </div>

          <div className="py-10 bg-intermediaire flex flex-col items-center rounded gap-1 hover:translate-y-2 duration-300">
            <img src={marketplace} alt="" />
            <span className="text-white">Marketplace</span>
          </div>

          <div className="py-10 bg-intermediaire flex flex-col items-center rounded gap-1 hover:translate-y-2 duration-300">
            <img src={hotel} alt="" />
            <span className="text-white">Hotellerie</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 md:py-20 md:px-24">
        <div className="container mx-autosm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-4 items-center">
            <div className="lg:w-1/2 relative">
              <img
                src={backgroundImage2}
                alt="Technician working on air conditioning"
                className="w-full mx-4 md:h-[500px] rounded-sm shadow-xl"
              />

              <div className="absolute ml-4 -top-4 -left-4 bg-gradient-to-bl from-primary to-final backdrop-blur-sm px-1 sm:px-2 py-1 rounded-lg shadow-md">
                <div className="text-xl sm:text-3xl font-bold text-white">
                  25+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  Années d'experiences
                </div>
              </div>
            </div>

            <div className="px-12 lg:w-1/2">
              <span className="bg-gradient-to-bl from-primary to-final bg-clip-text text-transparent font-semibold uppercase tracking-wider">
                À propos de nous
              </span>
              <h2 className="text-32xl uppercase text-gray-900 md:text-3xl font-bold mt-2 mb-6">
                Nous Offrons les Meilleurs Services en Climatisation, Froid &
                Plomberie
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Depuis plus de 25 ans, TMIndustries accompagne particuliers et
                professionnels dans le confort de leurs locaux. Nous allions
                expertise technique et innovation pour offrir des solutions
                durables et efficaces en climatisation, froid industriel &
                Plomberie.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Équipe certifiée et expérimentée",
                  "Solutions sur mesure pour chaque client",
                  "Engagement pour la qualité et la sécurité",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-white mt-1 mr-2 flex-shrink-0 bg-paleta2 rounded-full"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-900">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/about"
                className="inline-block bg-intermediaire hover:bg-gradient-to-bl from-primary to-final hover:text-white text-white font-semibold py-3 px-8 rounded-sm transition duration-300"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Values Section */}
      <section className="py-6 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center">
              <div className="bg-paleta1 rounded-lg p-1 inline-flex">
                <button
                  onClick={handleTabClick("services")}
                  className={`px-4 py-2 m-1 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors ${
                    activeTab === "services"
                      ? "text-white bg-intermediaire"
                      : "text-paleta2 hover:bg-intermediaire"
                  }`}
                >
                  Nos Services
                </button>
                <button
                  onClick={handleTabClick("values")}
                  className={`px-4 py-2 m-1 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors ${
                    activeTab === "values"
                      ? "text-white bg-intermediaire"
                      : "text-paleta2 hover:bg-intermediaire"
                  }`}
                >
                  Nos Valeurs
                </button>
              </div>
            </div>

            <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-6 mb-4">
              Des Solutions Premium en Climatisation, Froid & Plomberie
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Nous proposons des services complets pour assurer votre confort et
              la performance de vos installations, quelle que soit la saison.
            </p>
          </div>

          <div
            className={`mx-4 grid grid-cols-1 gap-4 ${
              activeTab === "services"
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3 lg:grid-cols-3"
            }`}
          >
            {activeTab === "services"
              ? services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white p-2 sm:pb-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <img
                      src={backgroundImage1}
                      alt={service.title}
                      className="w-full h-40 sm:h-50 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-xl text-gray-900 font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-block mt-4 text-paleta4 font-medium hover:text-paleta2 transition-colors"
                    >
                      En savoir plus →
                    </Link>
                  </div>
                ))
              : [
                  {
                    icon: innovation,
                    title: "Innovation",
                    desc: "Anticiper les besoins du marché et proposer des solutions modernes.",
                  },
                  {
                    icon: excellence,
                    title: "Excellence",
                    desc: "Garantir des standards élevés à chaque étape du processus.",
                  },
                  {
                    icon: engagement,
                    title: "Engagement",
                    desc: "Respecter nos clients, nos collaborateurs et l’environnement.",
                  },
                ].map((val, i) => (
                  <div
                    key={i}
                    className={`p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center flex flex-col items-center ${
                      valueBackgrounds[i % valueBackgrounds.length]
                    }`}
                  >
                    <img
                      src={val.icon}
                      alt={val.title}
                      className="h-12 w-12 mb-4"
                    />
                    <span className="font-bold text-lg mb-2 text-black">
                      {val.title}
                    </span>
                    <p className="text-gray-600 text-sm">{val.desc}</p>
                  </div>
                ))}
          </div>
          <div className="mt-12 flex flex-col gap-2 items-center">
            <p className="font-medium text-md text-gray-900">
              Vous ne trouvez pas ce que vous cherchez?
            </p>
            <button className="w-fit bg-intermediaire p-2 text-white">
              Contactez-nous pour plus d'informations{" "}
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <ChooseUs />

      {/* Gallery Section */}
      <Galleries />

      {/* Testimonials */}
      <Testimonials />

      {/* Blog */}
      <Blog />
    </>
  );
}
