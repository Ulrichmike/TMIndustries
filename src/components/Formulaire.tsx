export default function Formulaire() {
  return (
    <>
      {/* Formulaire de renseignement */}
      <div
        className="form border min-w-[250px] max-w-4xl mx-4 sm:mx-8 md:mx-auto px-4 py-10 md:px-10 my-10 rounded-lg bg-gray-50"
        id="contact"
      >
        <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
          Formulaire de Renseignement
        </p>
        <form
          action=""
          className="gap-10"
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "Merci ! Votre demande a été envoyée. Nous vous répondrons rapidement."
            );
          }}
        >
          <div className="lg:grid grid-cols-2 lg:justify-start md:grid grid-cols-2 md:justify-start">
            <label className="flex justify-center lg:w:1/2 text-gray-800 text-base sm:text-lg">
              Vous etes ? :
            </label>
            <div className="type flex items-center justify-center gap-1 md:gap-10 md:ml-0 lg:ml-0">
              <label className="flex items-center gap-1 font-medium text-gray-800 text-sm sm:text-lg">
                <input type="radio" name="type" id="" />
                Professionnel
              </label>
              <label className="flex items-center gap-1 font-medium text-gray-800 text-sm sm:text-lg">
                <input type="radio" name="type" id="" />
                Particulier
              </label>
            </div>
          </div>

          <div className="personnal grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2 gap-1">
            <div className="flex flex-col flex-1">
              <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
                Prenom :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="LastName"
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
                Nom :
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="FirstName"
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
          </div>
          <div className="second_personnal grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2 lg:gap-10 gap-1">
            <div className="flex flex-col w-full">
              <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
                Email :{" "}
              </label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
                Téléphone :
              </label>
              <input
                type="tel"
                name=""
                id=""
                // className="border h-12 pl-10 rounded"
                className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
                required
              />
            </div>
          </div>
          <div className="intervention flex flex-col gap-1">
            <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
              Ville D'intervention :
            </label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Ville"
              className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            />
          </div>
          <div className="objet flex flex-col gap-1">
            <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
              Objet :{" "}
            </label>
            <select
              name=""
              id=""
              //   className="border h-12 px-10 rounded"
              className="border border-gray-900 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary text-sm sm:text-lg"
              required
            >
              <option value="Demande de devis">Demande de devis</option>
              <option value="Demande d'information">
                Demande d'information
              </option>
              <option value="others">Autres</option>
            </select>
          </div>
          <div className="message flex flex-col gap-1">
            <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
              Message
            </label>
            <textarea
              name=""
              id=""
              //   className="border h-20 rounded"
              className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            ></textarea>
          </div>
          <div className="check py-2 text-gray-800 text-sm sm:text-lg gap-1">
            <input type="checkbox" name="check" id="" className="mr-1" />
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
    </>
  );
}
