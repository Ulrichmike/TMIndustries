import { Link } from "react-router-dom";
import Formulaire from "../../components/Formulaire";
import image1 from "./../../assets/picture1.jpg";

import location from "./../../assets/location2.png";
import mail from "./../../assets/mail1.png";
import phone from "./../../assets/telephone1.png";
import right from "./../../assets/arrows.png";
import tick from "./../../assets/check(1).png";
// import rapid from "./../../assets/rapid.png";
// import quality from "./../../assets/quality.png";
// import professional from "./../../assets/professional.png";
// import rapid from "./../assets/innovation.png";

export default function Climatisation() {
  //states

  //variables & constantes
  //   const featuresBackgrounds = [
  //     "bg-red-100",
  //     "bg-blue-100",
  //     "bg-green-100",
  //     "bg-yellow-100",
  //   ];

  //functions

  return (
    <>
      <div className="mt-20">
        {/* Hero Section – Image + Titre + CTA */}
        <section className="relative">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517232115160-ff93364542dd?q=80&w=1600&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative mx-auto max-w-7xl px-8 sm:px-24 py-24 md:py-32">
            <div className="max-w-2xl text-white">
              <h1 className="text-2xl md:text-5xl font-bold leading-tight">
                Installation & Entretien de Climatisation Professionnelle
              </h1>
              <p className="mt-4 text-sm sm:text-lg md:text-xl text-white/90">
                Des solutions durables pour votre confort thermique — étude,
                pose, maintenance et dépannage 24/7.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#contact"
                  className="rounded bg-blue-600 px-4 sm:px-6 py-4 font-medium shadow-lg hover:bg-blue-700 text-xs sm:text-base transition"
                >
                  Demander un devis
                </a>
                <a
                  href="#presentation"
                  className="rounded bg-white/10 px-4 sm:px-6 py-4 font-medium shadow-lg hover:bg-blue-700 text-xs sm:text-base transition border border-white/30"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-3 sm:px-10 md:px-16 lg:px-24 gap-5 sm:gap-5 md:gap-10 lg:gap-10">
          <div className="col-span-2 sm:order-2">
            <h1 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-start pb-8">
              Installation & Project Management
            </h1>
            <p className="text-base sm:text-xl text-gray-600 text-start pb-4">
              How do consumers see your brand relative to your competitors? How
              should a new product be positioned when it’s launched? Which
              customer segments are most interested in our current offerings?
            </p>
            <p className="text-xs sm:text-sm text-gray-500 text-start pb-4">
              How do consumers see your brand relative to your competitors? How
              should a new product be positioned when it’s launched? Which
              customer segments are most interested in our current offerings?
              For these questions and many others, surveys remain the tried and
              true method for gaining marketing insights
            </p>

            <h2 className="text-xl sm:text-2xl font-medium uppercase text-gray-800 text-start">
              Load Calculation
            </h2>
            <p className="text-start pb-4">
              How do consumers see your brand relative to your competitors? How
              should a new product be positioned when it’s launched? Which
              customer segments are most interested in our current offerings?
            </p>
            <ul className="pb-10">
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Where Ever Home is –Is where we will be able to provide Service
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Where Ever Home is –Is where we will be able to provide Service
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Where Ever Home is –Is where we will be able to provide Service
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Where Ever Home is –Is where we will be able to provide Service
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Where Ever Home is –Is where we will be able to provide Service
              </li>
            </ul>
            <div className="w-full pb-5">
              <img src={image1} alt="" className="w-full" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <img src={image1} alt="" />
              <img src={image1} alt="" />
            </div>

            <div className="faqs w-full">
              <div className=" max-w-7xl py-16 w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold capitalize">
                  FAQ — vos questions fréquentes
                </h2>
                <div className="mt-6 space-y-4 w-full">
                  {[
                    {
                      q: "Quelle est la durée de vie d'un système de climatisation ?",
                      a: "Entre 10 et 15 ans selon l'usage, l'environnement et la qualité de la maintenance.",
                    },
                    {
                      q: "Proposez-vous des contrats de maintenance ?",
                      a: "Oui, préventifs et curatifs, avec disponibilité 24/7 selon le niveau de service.",
                    },
                    {
                      q: "Quels sont vos délais d'intervention ?",
                      a: "Sous 24 à 72h en moyenne, et urgence possible selon localisation.",
                    },
                  ].map((item, idx) => (
                    <details
                      key={idx}
                      className="group rounded border border-gray-200 bg-white w-full"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between p-5 font-medium bg-gray-50 w-full">
                        <span className="text-sm sm:text-base">{item.q}</span>
                        <span className="text-gray-500 group-open:rotate-45 transition">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-xs sm:text-sm text-gray-700 pb-5 px-2">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <aside className="side flex flex-col gap-10 sm:order-1">
            <div className="bg-gray-200 px-5 h-fit">
              <h2 className="py-5 uppercase font-bold text-base md:text-lg border-b-2 border-gray-300 border-solid">
                Our Service
              </h2>

              <ul>
                <li className="py-3 md:py-5 flex items-center justify-center gap-2 border-b-2 border-dashed border-gray-300 border-solid text-sm md:text-base">
                  <Link to="/Services/Climatisation">Climatisation</Link>
                  <img
                    src={right}
                    alt="right direction"
                    className="w-6 h-6 sm:w-8 h-8"
                  />
                </li>
                <li className="py-3 md:py-5 flex items-center justify-center gap-2 border-b-2 border-dashed border-gray-300 border-solid text-sm md:text-base">
                  <Link to="/Services/Froid">Froid</Link>
                  <img
                    src={right}
                    alt="right direction"
                    className="w-6 h-6 sm:w-8 h-8"
                  />
                </li>
                <li className="py-3 md:py-5 flex items-center justify-center gap-2 border-b-2 border-dashed border-gray-300 border-solid text-sm md:text-base">
                  <Link to="/Services/Cuisines">Cuisines</Link>
                  <img
                    src={right}
                    alt="right direction"
                    className="w-6 h-6 sm:w-8 h-8"
                  />
                </li>
                <li className="py-3 md:py-5 flex items-center justify-center gap-2 border-b-2 border-dashed border-gray-300 border-solid text-sm md:text-base">
                  <Link to="/Services/Maintenance">Maintenance</Link>
                  <img
                    src={right}
                    alt="right direction"
                    className="w-6 h-6 sm:w-8 h-8"
                  />
                </li>
                <li className="py-3 md:py-5 flex items-center justify-center gap-2 text-sm md:text-base">
                  <Link to="/Services/Plomberie">Plomberie</Link>
                  <img
                    src={right}
                    alt="right direction"
                    className="w-6 h-6 sm:w-8 h-8"
                  />
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 px-3 lg:px-10 h-fit">
              <h2 className="py-5 uppercase font-bold text-base lg:text-lg border-b-2 border-gray-300 border-solid">
                Our Office Adress
              </h2>
              <div className="flex gap-2 py-3 sm:py-5">
                <img src={location} alt="location" className="w-6 h-6" />
                <p className="text-sm lg:text-base">
                  2239 Turnpike Drive, Birmingham, Alabama, 35222. United States
                </p>
              </div>
              <div className="flex gap-5 py-3 sm:py-5">
                <img src={phone} alt="phone number" className="w-6 h-6" />
                <p className="text-sm lg:text-base">780-918-5736</p>
              </div>
              <div className="flex gap-5 py-3 sm:py-5">
                <img src={mail} alt="email adress" className="w-6 h-6" />
                <p className="text-sm lg:text-base">info@info9000.ca</p>
              </div>
            </div>
          </aside>
        </div>

        {/* Formulaire + CTA final */}
        <div className="bg-paleta1 pt-20">
          <h2>Get In Touch</h2>
          <div>
            <Formulaire />
          </div>
        </div>
      </div>
    </>
  );
}
