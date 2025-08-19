import { Link } from "react-router-dom";

import "yet-another-react-lightbox/styles.css";
// import backgroundImage from "./../assets/placeholder.png";
import { useState } from "react";
import Hero from "../components/Hero";
import ChooseUs from "../components/ChooseUs";
import Galleries from "../components/Galleries";
// import SaysAbout from "../components/SaysAboutUs";
import Testimonials from "../components/SaysAboutUs";
import Blog from "../components/Blog";
import backgroundImage2 from "./../assets/picture2.jpg";
import backgroundImage1 from "./../assets/picture1.jpg";

export default function Home() {
  //state

  const [activeTab, setActiveTab] = useState<"services" | "values">("services");
  const myArray: Array<any> = [
    {
      title: "AC Installation",
      description:
        "Professional installation of all AC system types with energy-efficient solutions.",
      alt: "",
    },
    {
      title: "Maintenance Plans",
      description:
        "Regular check-ups to keep your system running at peak performance.",
      alt: "",
    },
    {
      title: "Emergency Repairs",
      description:
        "24/7 service to get your cooling system back up and running fast.",
      alt: "",
    },
    {
      title: "System Upgrades",
      description:
        "Modernize your existing system for better efficiency and lower costs.",
      alt: "",
    },
  ];

  const handleTabClick = (tab: "services" | "values") => (): void => {
    setActiveTab(tab);
    // Autres opérations liées au changement d'onglet
  };
  //functions

  return (
    <>
      <Hero />
      {/* About Section */}
      <section className="py-16 md:py-24 md:px-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative">
              {/* Conteneur d'image avec position relative */}
              <img
                src={backgroundImage2}
                alt="Technician working on air conditioning"
                className="w-full sm:h-[450px] rounded-lg shadow-xl"
              />

              {/* Overlay d'expérience */}
              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-md">
                <div className="text-4xl font-bold text-intermediaire">25+</div>
                <div className="text-lg font-semibold text-gray-800">
                  Years of Experience
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <span className="text-intermediaire font-semibold uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-2 mb-6">
                We Provide The Best HVAC Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With years of experience in the industry, we specialize in
                delivering top-notch heating, ventilation, and air conditioning
                solutions for both residential and commercial properties.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-900">
                    24/7 emergency service available
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-900">
                    Certified and experienced technicians
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-1 mr-2 flex-shrink-0"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-900">
                    Energy-efficient solutions to save you money
                  </span>
                </li>
              </ul>

              <Link
                to="/about"
                className="inline-block bg-intermediaire hover:bg-final hover:text-white text-white-900 font-semibold py-3 px-8 rounded-lg transition duration-300 text-center-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center">
              <div className="bg-paleta1 rounded-lg p-1 inline-flex">
                <button
                  onClick={handleTabClick("services")}
                  className={`px-2 py-1 m-1 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors ${
                    activeTab === "services"
                      ? "text-white bg-intermediaire hover:border-none"
                      : "text-paleta2 hover:bg-intermediaire hover:border-none"
                  }`}
                >
                  Our Services
                </button>
                <button
                  onClick={handleTabClick("values")}
                  className={`px-4 py-2 m-1 text-sm font-semibold uppercase tracking-wider rounded-md transition-colors ${
                    activeTab === "values"
                      ? "text-white bg-intermediaire hover:border-none"
                      : "text-paleta2 hover:bg-intermediaire hover:border-none"
                  }`}
                >
                  Our Values
                </button>
              </div>
            </div>

            <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-2 mb-4">
              Premium HVAC Solutions Tailored For You
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We deliver comprehensive air conditioning services to ensure your
              complete comfort in every season.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activeTab === "services" ? (
              myArray.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-4xl mb-4 w-full bg-cover">
                    <img
                      src={backgroundImage1}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl text-gray-900 font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-block mt-4 text-paleta4 font-medium hover:text-paleta2 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              ))
            ) : (
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4 w-full bg-cover">
                  <img
                    src={backgroundImage1}
                    alt="Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">Titre du service</h3>
                <p className="text-gray-600">Description du service</p>
                <Link
                  to="/services"
                  className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Why Choose Us */}
      <ChooseUs />
      {/* Gallery Section */}
      <Galleries />
      {/* What our Client Say's About Us */}
      <Testimonials />
      {/* Blog */}
      <Blog />
    </>
  );
}
