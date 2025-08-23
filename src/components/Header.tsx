import { Link } from "react-router-dom";
import TMILogo from "../assets/TMILogo.jpg";
// import phone from "../assets/phone-flip.svg";
import { useEffect, useState } from "react";

export default function Header() {
  //states
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // On descend -> cacher le header
        setShow(false);
      } else {
        // On monte -> afficher le header
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  //functions

  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "tel:+237658352355";
    } else {
      alert("L'appel direct est disponible uniquement sur mobile 📱");
    }
  };

  return (
    <header
      className={`bg-gray-50 flex shadow-md px-6 py-3 font-sans fixed top-0 left-0 w-full transition-transform duration-300 z-50
    ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Bouton menu mobile */}
        <button
          className="lg:hidden block"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-800 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={TMILogo}
            alt="Logo su site"
            width="60"
            height="60"
            className="rounded-full border border-red-200 sm:ml-10"
          />
        </Link>

        {/* Navigation */}
        {/* <nav className="flex justify-between gap-10 text-base"> */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-20 left-0 w-full bg-gray-50 p-5 lg:static lg:flex lg:w-auto lg:p-0 lg:gap-10 text-base`}
        >
          <ul className="sm:flex sm:justify-between sm:gap-10 text-gray-500">
            <li>
              <Link
                to="/"
                className="relative text-gray-800 font-medium tracking-wide transition-colors duration-300 hover:text-paleta4
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-paleta4 
             after:transition-all after:duration-300 hover:after:w-full"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                to="/Services"
                className="relative group text-gray-800 font-medium tracking-wide transition-colors duration-300 hover:text-paleta4
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-paleta4 
             after:transition-all after:duration-300 hover:after:w-full"
                onMouseEnter={() => setOpen(true)}
                // onMouseLeave={() => setOpen(false)}
              >
                Nos Services ▾
              </Link>
              {/* Sous-menu */}
              {open && (
                <ul className="absolute lg:static left-0 mt-2 w-56 bg-white lg:bg-transparent lg:shadow-none text-gray-800 rounded-xl shadow-lg p-2 lg:p-0">
                  <li>
                    <a
                      href="/Services/Climatisation"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                      Climatisation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Services/Froid"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                      Froid industriel
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Services/Plomberie"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                      Plomberie
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Services/Cuisines"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                      Cuisines professionnelles
                    </a>
                  </li>
                  <li>
                    <a
                      href="/Services/Maintenance"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100"
                    >
                      Maintenance
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/Gallery"
                className="relative text-gray-800 font-medium tracking-wide transition-colors duration-300 hover:text-paleta4
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-paleta4 
             after:transition-all after:duration-300 hover:after:w-full"
              >
                Realisations
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="relative text-gray-800 font-medium tracking-wide transition-colors duration-300 hover:text-paleta4
             after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-paleta4 
             after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={handleClick}
          className="contactUs flex px-2 sm:gap-2 border-blue-300 py-2 sm:px-4 rounded-md bg-gray-900 hover:cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-10 sm:h-10"
            viewBox="0 0 640 640"
          >
            <path
              fill="#eed3c1"
              d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"
            />
          </svg>
          <div className="text-white">
            <p className="text-xs sm:text-sm leading-none">Contactez-Nous</p>
            <p className="text-xs sm:text-sm font-semibold">
              +237 658 35 23 55
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
