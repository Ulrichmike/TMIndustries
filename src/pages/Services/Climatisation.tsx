import { Link } from "react-router-dom";
import Formulaire from "../../components/Formulaire";
import image1 from "./../../assets/picture1.jpg";

import location from "./../../assets/location2.png";
import mail from "./../../assets/mail1.png";
import phone from "./../../assets/telephone1.png";
import right from "./../../assets/arrows.png";
import tick from "./../../assets/check(1).png";

import { Phone, Wrench, Building, CheckCircle } from "lucide-react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useRef, useState } from "react";
// import rapid from "./../../assets/rapid.png";
// import quality from "./../../assets/quality.png";
// import professional from "./../../assets/professional.png";
// import rapid from "./../assets/innovation.png";

export default function Climatisation() {
  //states
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  //variables & constantes
  //   const featuresBackgrounds = [
  //     "bg-red-100",
  //     "bg-blue-100",
  //     "bg-green-100",
  //     "bg-yellow-100",
  //   ];

  // const steps = [
  //   {
  //     title: "1. Diagnostic",
  //     description:
  //       "Un technicien analyse vos besoins et inspecte vos installations pour proposer la meilleure solution adaptée.",
  //   },
  //   {
  //     title: "2. Devis & Planification",
  //     description:
  //       "Nous vous présentons un devis détaillé et définissons ensemble un calendrier d’intervention.",
  //   },
  //   {
  //     title: "3. Installation",
  //     description:
  //       "Nos experts installent votre système de climatisation avec soin, dans le respect des normes en vigueur.",
  //   },
  //   {
  //     title: "4. Tests & Mise en service",
  //     description:
  //       "Nous vérifions le bon fonctionnement du système et vous formons à son utilisation.",
  //   },
  //   {
  //     title: "5. Maintenance & Suivi",
  //     description:
  //       "Nous assurons un suivi régulier, avec possibilité de contrats de maintenance préventive et curative.",
  //   },
  // ];

  //functions
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      stepRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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
                  className="rounded bg-intermediaire text-white px-4 sm:px-6 py-4 font-medium shadow-lg hover:bg-final hover:text-white text-xs sm:text-base transition"
                >
                  Demander un devis
                </a>
                <a
                  href="#presentation"
                  className="rounded bg-white/10 px-4 sm:px-6 py-4 font-medium shadow-lg hover:bg-white hover:text-intermediaire text-xs sm:text-base transition border border-white/30"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="py-12 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-3 sm:px-10 md:px- lg:px-36 gap-5 sm:gap-5 md:gap-10 lg:gap-10">
          <div className="col-span-2 sm:order-2">
            <div className="w-full pb-5">
              <img src={image1} alt="" className="w-full" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold uppercase text-gray-900 text-start pb-8">
              Climatisation sur mesure pour vos espaces
            </h1>
            <p className="text-base sm:text-xl text-gray-600 text-start pb-4">
              Chez <strong>TM Industries</strong>, nous concevons, installons et
              entretenons des systèmes de climatisation adaptés aussi bien aux
              habitations qu’aux locaux professionnels. Nos solutions
              garantissent un confort optimal, une consommation d’énergie
              maîtrisée et une durabilité maximale.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 text-start pb-4">
              Que vous soyez un particulier, une entreprise ou une collectivité,
              notre équipe met à votre disposition une expertise complète :
              étude thermique, choix des équipements, installation certifiée et
              maintenance régulière.
            </p>

            <h2 className="text-xl sm:text-2xl font-medium uppercase text-gray-800 text-start">
              Étude & Dimensionnement précis
            </h2>
            <p className="text-start pb-4">
              Avant toute installation, nous réalisons un diagnostic énergétique
              et une simulation de charge thermique afin de vous proposer un
              système adapté à vos besoins réels. Cela permet d’assurer des
              performances optimales et d’éviter la surconsommation.
            </p>
            <ul className="pb-10">
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Analyse de vos besoins énergétiques
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Sélection d’équipements performants et éco-responsables
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Installation conforme aux normes en vigueur
              </li>
              <li className="flex items-center justify-start gap-4 my-3 text-sm sm:text-base">
                <img
                  src={tick}
                  alt="tick icon"
                  className="bg-intermediaire rounded-full w-4 h-4 sm:w-5 sm:h-5"
                />
                Maintenance préventive et curative
              </li>
            </ul>
            <div className="bg-gray-50 py-12">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                Notre Processus d’Intervention
              </h2>

              <VerticalTimeline lineColor="#0ea5e9">
                {/* Étape 1 */}
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: activeStep === 0 ? "#0ea5e9" : "#f3f4f6",
                    color: activeStep === 0 ? "#fff" : "#111",
                    borderRadius: "12px",
                    minHeight: "180px",
                    transition: "all 0.3s ease",
                  }}
                  contentArrowStyle={{
                    borderRight:
                      activeStep === 0
                        ? "7px solid #0ea5e9"
                        : "7px solid #f3f4f6",
                  }}
                  date="Étape 1"
                  dateClassName={`font-bold ${
                    activeStep === 0
                      ? "text-sky-600 text-center"
                      : "text-gray-400"
                  }`}
                  iconStyle={{
                    background: "#0ea5e9",
                    color: "#fff",
                    boxShadow:
                      activeStep === 0
                        ? "0 0 15px rgba(14,165,233,0.8)"
                        : "none",
                  }}
                  icon={<Phone size={22} />}
                >
                  {/* 👇 On met le ref ici */}
                  <div
                    ref={(el) => {
                      stepRefs.current[0] = el;
                    }}
                  >
                    <h3 className="text-base font-bold tracking-wide">
                      Prise de contact
                    </h3>
                    <h4 className="text-xs italic opacity-80">
                      Téléphone ou formulaire en ligne
                    </h4>
                    <p className="text-xs leading-snug opacity-90">
                      Vous nous contactez pour exprimer vos besoins en
                      climatisation ou froid industriel.
                    </p>
                  </div>
                </VerticalTimelineElement>

                {/* Étape 2 */}
                <VerticalTimelineElement
                  date="Étape 2"
                  dateClassName={`font-bold ${
                    activeStep === 1
                      ? "text-sky-600 text-center"
                      : "text-gray-400"
                  }`}
                  contentStyle={{
                    background: activeStep === 1 ? "#0ea5e9" : "#f3f4f6",
                    color: activeStep === 1 ? "#fff" : "#111",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  iconStyle={{
                    background: "#0ea5e9",
                    color: "#fff",
                    boxShadow:
                      activeStep === 1
                        ? "0 0 15px rgba(14,165,233,0.8)"
                        : "none",
                  }}
                  icon={<Building size={20} />}
                >
                  <div
                    ref={(el) => {
                      stepRefs.current[1] = el;
                    }}
                  >
                    <h3 className="text-base font-bold tracking-wide">
                      Visite sur site
                    </h3>
                    <h4 className="text-xs italic opacity-80">
                      Analyse technique
                    </h4>
                    <p className="text-xs leading-snug opacity-90">
                      Nos techniciens se déplacent pour étudier l’environnement
                      et définir la solution la plus adaptée.
                    </p>
                  </div>
                </VerticalTimelineElement>

                {/* Étape 3 */}
                <VerticalTimelineElement
                  date="Étape 3"
                  contentStyle={{
                    background: activeStep === 2 ? "#0ea5e9" : "#f3f4f6",
                    color: activeStep === 2 ? "#fff" : "#111",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  iconStyle={{
                    background: "#0ea5e9",
                    color: "#fff",
                    boxShadow:
                      activeStep === 2
                        ? "0 0 15px rgba(14,165,233,0.8)"
                        : "none",
                  }}
                  icon={<Wrench size={20} />}
                >
                  <div
                    ref={(el) => {
                      stepRefs.current[2] = el;
                    }}
                  >
                    <h3 className="text-base font-bold tracking-wide">
                      Installation
                    </h3>
                    <h4 className="text-xs italic opacity-80">
                      Mise en place & réglages
                    </h4>
                    <p className="text-xs leading-snug opacity-90">
                      Nous installons vos équipements dans le respect des normes
                      de sécurité et de performance.
                    </p>
                  </div>
                </VerticalTimelineElement>

                {/* Étape 4 */}
                <VerticalTimelineElement
                  date="Étape 4"
                  contentStyle={{
                    background: activeStep === 3 ? "#0ea5e9" : "#f3f4f6",
                    color: activeStep === 3 ? "#fff" : "#111",
                    borderRadius: "12px",
                    transition: "all 0.3s ease",
                  }}
                  iconStyle={{
                    background: "#0ea5e9",
                    color: "#fff",
                    boxShadow:
                      activeStep === 3
                        ? "0 0 15px rgba(14,165,233,0.8)"
                        : "none",
                  }}
                  icon={<CheckCircle size={20} />}
                >
                  <div
                    ref={(el) => {
                      stepRefs.current[3] = el;
                    }}
                  >
                    <h3 className="text-base font-bold tracking-wide">
                      Validation & Suivi
                    </h3>
                    <h4 className="text-xs italic opacity-80">
                      Contrôle qualité
                    </h4>
                    <p className="text-xs leading-snug opacity-90">
                      Nous validons le bon fonctionnement et proposons un suivi
                      de maintenance régulière.
                    </p>
                  </div>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>

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
                      q: "Faites-vous des interventions d’urgence ?",
                      a: "Oui, nos équipes sont disponibles 24/7 pour les pannes critiques.",
                    },
                    {
                      q: "Vos installations sont-elles garanties ?",
                      a: "Nous offrons une garantie pièces et main-d’œuvre pouvant aller jusqu’à 5 ans.",
                    },
                    {
                      q: "Proposez-vous des solutions écologiques ?",
                      a: "Oui, nous privilégions les systèmes à haute efficacité énergétique et fluides frigorigènes respectueux de l’environnement.",
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
        <div className="bg-paleta2 py-20 px-5">
          <h2 className="text-2xl sm:text-3xl capitalize font-bold mb-6">
            Un projet ? Parlons-en !
          </h2>
          <p className="mb-8 text-gray-900 font-semibold text-lg">
            Contactez-nous pour une étude gratuite et personnalisée de vos
            besoins en climatisation.
          </p>
          <div>
            <Formulaire />
          </div>
        </div>
      </div>
    </>
  );
}
