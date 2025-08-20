import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
      <section className="pt-16 md:pt-24 md:px-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <span className="text-intermediaire font-semibold uppercase tracking-wider">
                Why Choose Us
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
                <li className="flex items-center gap-4">
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
                  <div className="">
                    <h4 className="text-3xs text-gray-900 font-semibold">
                      Expert Technician
                    </h4>
                    <span className="text-gray-800">
                      24/7 emergency service available
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
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
                  <div>
                    <h4 className="text-3xs text-gray-900 font-semibold">
                      Expert Technician
                    </h4>
                    <span className="text-gray-800">
                      Certified and experienced technicians
                    </span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
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
                  <div>
                    <h4 className="text-3xs text-gray-900 font-semibold">
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
        className="mt-16 py-20 bg-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 mb-16 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${backgroundImage2})`,
        }}
      >
        {/* Élément 1 - Projets */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-16 mx-auto mb-3 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.867 19.125h.008v.008h-.008v-.008z"
            />
          </svg>
          <p className="text-4xl text-white font-bold mb-1">
            {inView ? <CountUp end={1200} duration={2.5} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Projects</p>
        </div>

        {/* Élément 2 - Clients */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-16 mx-auto mb-3 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <p className="text-4xl text-white font-bold mb-1">
            {inView ? <CountUp end={850} duration={2} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Clients</p>
        </div>

        {/* Élément 3 - Années d'expérience */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-16 mx-auto mb-3 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-4xl text-white font-bold mb-1">
            {inView ? <CountUp end={15} duration={1.5} suffix="+" /> : "0+"}
          </p>
          <p className="text-white text-xl font-semibold">Years Experience</p>
        </div>

        {/* Élément 4 - Employés */}
        <div className="element p-6 rounded-lg text-center transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-16 mx-auto mb-3 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <p className="text-4xl text-white font-bold mb-1">
            {inView ? <CountUp end={50} duration={2} prefix="+" /> : "+0"}
          </p>
          <p className="text-white text-xl font-semibold">Team Members</p>
        </div>
      </div>
    </>
  );
}
