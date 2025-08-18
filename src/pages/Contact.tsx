// import { APIProvider } from "@vis.gl/react-google-maps";
// import CustomMap from "../components/CustomMap";
import { MapContainer } from "react-leaflet/MapContainer";
import "leaflet/dist/leaflet.css";
import L, { type LatLngExpression } from "leaflet";
import { Marker, Popup, TileLayer } from "react-leaflet";

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
    <div className="font-sans">
      <div className="Hero h-[200px] flex items-center justify-center text-gray-900 bg-gradient-to-bl from-primary to-final">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Contactez - Nous</h1>
          <h2 className="text-lg sm:text-xl mt-2">
            VOUS AVEZ BESOIN D'UN RENSEIGNEMENT ?
          </h2>
          <h3 className="text-sm sm:text-base mt-1">
            Laissez - Nous un message et nous vous repondrons dans les
            meilleures delais
          </h3>
        </div>
      </div>

      {/* Informations */}

      <div className="info text-xs sm:text-sm items-center mx-auto py-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 bg-white">
        <div className="adress flex items-center justify-center py-5 ">
          <div className="icon w-10 h-10 self-start -translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#eed3c1"
                d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z"
              />
            </svg>
          </div>
          <div className="adress_info font-medium text-gray-800">
            <span className="flex justify-start pl-4 text-2xl font-bold">
              {" "}
              Adress
            </span>
            <p>
              Ndogbong - Douala(Cameroun) <br />
              Face Entrée hotel Deauville <br />à 150m du Comissariat 10è
            </p>
          </div>
        </div>
        <div className="email_adress flex items-center justify-center py-5 ">
          <div className="icon w-10 h-10 self-start -translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#eed3c1"
                d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
              />
            </svg>
          </div>
          <div className="adress_info font-medium text-gray-800">
            <span className="flex justify-start pl-4 text-2xl font-bold">
              {" "}
              Email Adress
            </span>
            <p className="flex">
              kolottodebonheur1986@gmail.com
              <br />
              tmindustries18@gmail.com
            </p>
          </div>
        </div>
        <div className="phone flex items-center justify-center py-5 ">
          <div className="icon w-10 h-10 self-start -translate-y-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                fill="#eed3c1"
                d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"
              />
            </svg>
          </div>
          <div className="adress_info font-medium text-gray-800">
            <span className="flex justify-start pl-4 text-2xl font-bold">
              {" "}
              Phone
            </span>
            <p className="max-w-48">
              Orange CM (+237): 696616034 / 691822215 <br /> MTN CM(+237):
              679815150 / 674166834
            </p>
          </div>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ height: "400px", width: "100%", marginTop: "1rem" }}>
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
      <div className="form border min-w-[250px] max-w-4xl mx-4 sm:mx-8 md:mx-auto px-4 py-10 md:px-10 my-10 rounded-lg bg-gray-50">
        <p className="text-xl font-semibold mb-4 text-gray-800">
          Formulaire De Renseignement
        </p>
        <form action="" className="gap-10">
          <div className="lg:grid grid-cols-2 lg:justify-start md:grid grid-cols-2 md:justify-start">
            <label className="flex justify-center lg:w:1/2 text-gray-800">
              Vous etes ? :
            </label>
            <div className="type flex items-center justify-center gap-1 md:gap-10 md:ml-0 lg:ml-0">
              <label className="flex items-center gap-1 font-medium text-gray-800">
                <input type="radio" name="type" id="" />
                Professionnel
              </label>
              <label className="flex items-center gap-1 font-medium text-gray-800">
                <input type="radio" name="type" id="" />
                Particulier
              </label>
            </div>
          </div>

          <div className="personnal grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col flex-1">
              <label className="flex font-medium text-gray-800">Prenom :</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="LastName"
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="flex font-medium text-gray-800">Nom :</label>
              <input
                type="text"
                name=""
                id=""
                placeholder="FirstName"
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
          </div>
          <div className="second_personnal grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col w-full">
              <label className="flex font-medium text-gray-800">Email : </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="flex font-medium text-gray-800">
                Téléphone :
              </label>
              <input
                type="tel"
                name=""
                id=""
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
          </div>
          <div className="intervention flex flex-col">
            <label className="flex font-medium text-gray-800">
              Ville D'intervention :
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ville"
              className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            />
          </div>
          <div className="objet flex flex-col">
            <label className="flex font-medium text-gray-800">Objet : </label>
            <select
              name=""
              id=""
              //   className="border h-12 px-10 rounded"
              className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            >
              <option value="Demande de devis">Demande de devis</option>
              <option value="Demande d'information">
                Demande d'information
              </option>
              <option value="others">Autres</option>
            </select>
          </div>
          <div className="message flex flex-col">
            <label className="flex font-medium text-gray-800">Message</label>
            <textarea
              name=""
              id=""
              //   className="border h-20 rounded"
              className="border border-gray-300 shadow-sm h-12 pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            ></textarea>
          </div>
          <div className="check py-2 text-gray-800">
            <input type="checkbox" name="check" id="" />
            J’ai lu et j’accepte les mentions légales liées à l’usage de mes
            données personnelles. En soumettant ce formulaire, j’accepte d’être
            recontacté(e) dans le cadre d’une demande d’information autour des
            solutions et services proposés par TMIndustries.
          </div>
          <button
            type="submit"
            className="border w-full h-12 rounded bg-gradient-to-bl from-secondary to-final text-white"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
