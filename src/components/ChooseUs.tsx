import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

import client from "./../assets/client.png";
import project from "./../assets/project-management.png";
import agent from "./../assets/support.png";

import backgroundImage2 from "./../assets/picture2.jpg";
// import image from "./../assets/heart-partner-handshake.svg";
import CountUp from "react-countup";

export default function ChooseUs() {
  //state
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      {/* Why choose Us Section */}
      <section className="pt-12 px-6 md:pt-24 md:px-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-intermediaire font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl uppercase text-gray-900 md:text-4xl font-bold mt-2 mb-6">
                We Provide The Best HVAC Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With years of experience in the industry, we specialize in
                delivering top-notch heating, ventilation, and air conditioning
                solutions for both residential and commercial properties.
              </p>

              <ul className="space-y-2 mb-6 px-2">
                <li className="flex items-center gap-4">
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
                  <div className="">
                    <h4 className="text-3xs text-gray-900 font-semibold flex justify-start">
                      Expert Technician
                    </h4>
                    <span className="text-gray-800">
                      24/7 emergency service available
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
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
                  <div>
                    <h4 className="text-3xs text-gray-900 font-semibold flex justify-start">
                      Expert Technician
                    </h4>
                    <span className="text-gray-800">
                      Certified and experienced technicians
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
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
                  <div>
                    <h4 className="text-3xs text-gray-900 font-semibold flex justify-start">
                      Expert Technician
                    </h4>
                    <span className="text-gray-800">
                      Energy-efficient solutions to save you money
                    </span>
                  </div>
                </li>
              </ul>

              <Link
                to="/about"
                className="inline-block bg-intermediaire hover:bg-final hover:text-white text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img
                src={backgroundImage2}
                alt="Technician working on air conditioning"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <div
        ref={ref}
        className="mt-16 py-20 sm:px-36 bg-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage2})`,
        }}
      >
        {/* Élément 1 - Projets */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <img
            src={project}
            alt=""
            className="size-16 mx-auto mb-3 text-white"
          />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={1200} duration={2.5} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Projects</p>
        </div>

        {/* Élément 2 - Clients */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <img
            src={client}
            alt=""
            className="size-16 mx-auto mb-3 text-white"
          />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={850} duration={2} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Clients Satisfaits</p>
        </div>

        {/* Élément 3 - Années d'expérience */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <img src={agent} alt="" className="size-16 mx-auto mb-3 text-white" />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={15} duration={1.5} suffix="+" /> : "0+"}
          </p>
          <p className="text-white text-xl font-semibold">Years Experience</p>
        </div>

        {/* Élément 4 - Employés */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <img src={agent} alt="" className="size-16 mx-auto mb-3 text-white" />
          <p className="text-5xl text-white font-bold mb-1">
            {inView ? <CountUp end={50} duration={2} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Team Members</p>
        </div>
      </div>
    </>
  );
}
