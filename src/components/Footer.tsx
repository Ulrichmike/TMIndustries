import { Link } from "react-router-dom";
import TMILogo from "../assets/TMILogo.jpg";

export default function Footer() {
  //states

  //funtions

  //render
  return (
    <>
      <footer className="bg-gray-900 text-white px-10 py-10 font-sans">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1 */}
          <div className="">
            <Link
              to="/"
              className="flex items-center justify-center gap-3 pb-1"
            >
              <img
                src={TMILogo}
                alt="Logo su site"
                width="100"
                height="100"
                className="rounded-full border border-paleta3"
              />
            </Link>
            <p className="text-sm pb-5">
              <strong>TMIndustries SARL</strong> est spécialisée dans les
              solutions industrielles et techniques innovantes, au service des
              professionnels et des particuliers. Notre mission : offrir des
              prestations fiables, rapides et adaptées à vos besoins.
            </p>
            <div className="social">
              <span>Réseaux Sociaux</span>
              <div className="flex items-center justify-center gap-5">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 640 640"
                    className="hover:fill-primary"
                  >
                    <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 640 640"
                    className="hover:fill-primary"
                  >
                    <path d="M196.3 512L103.4 512L103.4 212.9L196.3 212.9L196.3 512zM149.8 172.1C120.1 172.1 96 147.5 96 117.8C96 103.5 101.7 89.9 111.8 79.8C121.9 69.7 135.6 64 149.8 64C164 64 177.7 69.7 187.8 79.8C197.9 89.9 203.6 103.6 203.6 117.8C203.6 147.5 179.5 172.1 149.8 172.1zM543.9 512L451.2 512L451.2 366.4C451.2 331.7 450.5 287.2 402.9 287.2C354.6 287.2 347.2 324.9 347.2 363.9L347.2 512L254.4 512L254.4 212.9L343.5 212.9L343.5 253.7L344.8 253.7C357.2 230.2 387.5 205.4 432.7 205.4C526.7 205.4 544 267.3 544 347.7L544 512L543.9 512z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 640 640"
                    className="hover:fill-primary"
                  >
                    <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne 2 */}
          <div>
            <h3 className="text-lg capitalize font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contactez-Nous
                </Link>
              </li>
              <li>
                <Link to="/Legal" className="hover:text-primary">
                  Mentions Légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/Cuisines" className="hover:text-primary">
                  Cuisines & Froid
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary">
                  Climatisation & Chauffage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Nos Solutions
                </Link>
              </li>
              <li>
                <Link to="/Legal" className="hover:text-primary">
                  Services après Vente
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support & Vente</h3>
            <div className="">
              <p>(+237) 696-61-60-34 / 679-81-51-50</p>
              <p>tmindustries18@gmail.com</p>
              <p>
                Ndogbong - Douala(Cameroun) <br /> Face Entrée hotel Deauville à
                150m du Comissariat 10è
              </p>
              <ul>
                <li>
                  <span className="border px-2">Lun - Ven</span>{" "}
                  <span className="hours"> 8h - 17h</span>
                </li>
                <li>
                  <span className="border px-2">Sam - Dim</span>{" "}
                  <span className="hours"> Fermé</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} TMI Industries. Tous droits réservés.
        </div>
      </footer>
    </>
  );
}
