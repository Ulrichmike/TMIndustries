import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import client from "./../assets/client.png";
import project from "./../assets/project-management.png";
import agent from "./../assets/support.png";
import backgroundImage2 from "./../assets/images/picture2.jpg";
import CountUp from "react-countup";

export default function ChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      {/* Pourquoi nous choisir */}
      <section className="pt-12 px-6 md:pt-24 md:px-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="bg-gradient-to-bl from-primary to-final bg-clip-text text-transparent font-semibold uppercase tracking-wider">
                Pourquoi choisir TMIndustries ?
              </span>
              <h2 className="text-3xl uppercase text-gray-900 md:text-4xl font-bold mt-2 mb-6">
                Nos services professionnels
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Avec plusieurs années d’expérience, nous sommes spécialisés dans
                la climatisation, le froid, la plomberie et la maintenance pour
                les particuliers et les professionnels.
              </p>

              <ul className="space-y-2 mb-6 px-2">
                {[
                  "Équipe de techniciens certifiés et spécialisés dans toutes vos installations",
                  "Disponibilité 24/7 pour vos urgences et interventions rapides",
                  "Solutions performantes et économes en énergie pour réduire vos coûts",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
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
                className="inline-block bg-intermediaire hover:bg-final hover:text-white text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                En savoir plus
              </Link>
            </div>

            <div className="lg:w-1/2">
              <img
                src={backgroundImage2}
                alt="Technicien en action"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <div
        ref={ref}
        className="mt-16 py-20 sm:px-36 bg-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage2})`,
        }}
      >
        <div className="element p-6 rounded-lg text-center transition-all">
          <img
            src={project}
            alt=""
            className="size-16 mx-auto mb-3 text-white"
          />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={1200} duration={2.5} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Projets réalisés</p>
        </div>

        <div className="element p-6 rounded-lg text-center transition-all">
          <img
            src={client}
            alt=""
            className="size-16 mx-auto mb-3 text-white"
          />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={850} duration={2} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Clients satisfaits</p>
        </div>

        <div className="element p-6 rounded-lg text-center transition-all">
          <img src={agent} alt="" className="size-16 mx-auto mb-3 text-white" />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={25} duration={1.5} suffix="+" /> : "0+"}
          </p>
          <p className="text-white text-xl font-semibold">
            Années d'expérience
          </p>
        </div>

        <div className="element p-6 rounded-lg text-center transition-all">
          <img src={agent} alt="" className="size-16 mx-auto mb-3 text-white" />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={50} duration={2} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">
            Membres de l'équipe
          </p>
        </div>
      </div>
    </>
  );
}
