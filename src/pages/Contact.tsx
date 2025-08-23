// import { APIProvider } from "@vis.gl/react-google-maps";
// import CustomMap from "../components/CustomMap";
import location from "./../assets/location2.png";
import mail from "./../assets/mail1.png";
import phone from "./../assets/telephone1.png";

import HeroImage from "./../assets/contact.jpeg";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import L, { type LatLngExpression } from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";
import Formulaire from "../components/Formulaire";

export default function Contact() {
  // TypeScript ne reconnaît pas _getIconUrl → on force le type en any
  const DefaultIcon = L.Icon.Default as any;

  delete DefaultIcon.prototype._getIconUrl;
  DefaultIcon.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
  const position: LatLngExpression = [4.0566, 9.7452]; // Coordonnées du bureau (ici Paris)784,032
  console.log("API Key:", import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY);

  return (
    <div className="mt-20 bg-gray-10 font-sans">
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute max-h-[460px] inset-0 bg-intermediaire opacity-20"></div>
      <div
        className="Hero h-[200px] py-48 flex items-center justify-center text-gray-900 bg-no-repeat bg-cover  bg-right sm:bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${HeroImage})`,
        }}
      >
        <div>
          <h1 className="text-3xl uppercase sm:text-4lg font-bold bg-gradient-to-tr from-intermediaire to-variation bg-clip-text text-transparent">
            Contactez - Nous
          </h1>
          <h2 className="text-lg text-white sm:text-xl mt-2 font-medium">
            VOUS AVEZ BESOIN D'UN RENSEIGNEMENT ?
          </h2>
          <h3 className="text-sm text-white sm:text-base mt-1">
            Laissez - Nous un message et nous vous repondrons dans les
            meilleures delais
          </h3>
        </div>
      </div>

      {/* Informations */}

      <div className="info px-12 sm:px-48">
        <div className="bg-white text-xs sm:text-sm items-center mx-auto py-24 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="adress flex items-center justify-center py-5 gap-1">
            <div className="icon w-10 h-10 self-start -translate-y-1 ">
              <img src={location} alt="" className="min-w-8" />
            </div>
            <div className="adress_info font-medium text-gray-800">
              <span className="flex justify-start pl-4 text-2xl font-bold max-w-64">
                {" "}
                Adress
              </span>
              <p>
                Ndogbong - Douala(Cameroun) <br />
                Face Entrée hotel Deauville <br />à 150m du Comissariat 10è
              </p>
            </div>
          </div>
          <div className="email_adress flex items-center justify-center py-5 gap-1">
            <div className="icon w-10 h-10 self-start -translate-y-1">
              <img src={mail} alt="" className="min-w-8" />
            </div>
            <div className="adress_info font-medium text-gray-800">
              <span className="flex justify-start pl-4 text-2xl font-bold">
                {" "}
                Email Adress
              </span>
              <p className="flex max-w-64">
                kolottodebonheur1986@gmail.com
                <br />
                tmindustries18@gmail.com
              </p>
            </div>
          </div>
          <div className="phone flex items-center justify-center py-5 gap-1">
            <div className="icon w-10 h-10 self-start -translate-y-1">
              <img src={phone} alt="" className="min-w-8" />
            </div>
            <div className="adress_info font-medium text-gray-800">
              <span className="flex justify-start pl-4 text-2xl font-bold">
                {" "}
                Phone
              </span>
              <p className="max-w-64">
                Orange CM (+237): 696616034 / 691822215 <br /> MTN CM(+237):
                679815150 / 674166834
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Notre bureau ici</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Formulaire de renseignement */}
      <Formulaire />
    </div>
  );
}
