import { useState } from "react";

export default function Formulaire() {
  const [formData, setFormData] = useState({
    type: "professionnel", // <-- ajouté pour tes radios
    name: "",
    prename: "",
    email: "",
    phone: "",
    city: "",
    subject: "Demande de devis",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target; // IMPORTANT: `name` doit exister dans formData
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.status === "success") {
        alert(
          "Merci ! Votre demande a été envoyée. Nous vous répondrons rapidement."
        );
        setFormData({
          type: "professionnel",
          name: "",
          prename: "",
          email: "",
          phone: "",
          city: "",
          subject: "Demande de devis",
          message: "",
        });
      } else {
        alert("Erreur lors de l'envoi du formulaire.");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      alert("Erreur réseau ou serveur.");
    }
  };

  return (
    <div
      className="form border min-w-[250px] max-w-4xl mx-4 sm:mx-8 md:mx-auto px-4 py-10 md:px-10 my-10 rounded-lg bg-gray-50"
      id="contact"
    >
      <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        Formulaire de Renseignement
      </p>

      <form className="gap-10" onSubmit={handleSubmit}>
        <div className="lg:grid grid-cols-2 lg:justify-start md:grid grid-cols-2 md:justify-start">
          <label className="flex justify-center lg:w:1/2 text-gray-800 text-base sm:text-lg">
            Vous êtes ? :
          </label>
          <div className="type flex items-center justify-center gap-1 md:gap-10 md:ml-0 lg:ml-0">
            <label className="flex items-center gap-1 font-medium text-gray-800 text-sm sm:text-lg">
              <input
                type="radio"
                name="type"
                value="professionnel"
                checked={formData.type === "professionnel"}
                onChange={handleChange}
              />
              Professionnel
            </label>
            <label className="flex items-center gap-1 font-medium text-gray-800 text-sm sm:text-lg">
              <input
                type="radio"
                name="type"
                value="particulier"
                checked={formData.type === "particulier"}
                onChange={handleChange}
              />
              Particulier
            </label>
          </div>
        </div>

        <div className="personnal grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2 gap-1">
          <div className="flex flex-col flex-1">
            <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
              Prénom :
            </label>
            <input
              type="text"
              name="prename" // DOIT correspondre à formData.prename
              value={formData.prename}
              onChange={handleChange}
              placeholder="Prénom"
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
              name="name" // DOIT correspondre à formData.name
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom"
              className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            />
          </div>
        </div>

        <div className="second_personnal grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:grid-cols-2 lg:gap-10 gap-1">
          <div className="flex flex-col w-full">
            <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
              Email :
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
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
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone"
              className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
              required
            />
          </div>
        </div>

        <div className="intervention flex flex-col gap-1">
          <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
            Ville d'intervention :
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Ville"
            className="border border-gray-300 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
            required
          />
        </div>

        <div className="objet flex flex-col gap-1">
          <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
            Objet :
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border border-gray-900 shadow-sm h-10 sm:h-12 pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary text-sm sm:text-lg"
            required
          >
            <option value="Demande de devis">Demande de devis</option>
            <option value="Demande d'information">Demande d'information</option>
            <option value="others">Autres</option>
          </select>
        </div>

        <div className="message flex flex-col gap-1">
          <label className="flex font-medium text-gray-800 text-sm sm:text-lg">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="border border-gray-300 shadow-sm pl-8 sm:pl-10 rounded-md bg-gray-100 text-gray-900 placeholder-gray-500 focus:border-secondary"
            required
          />
        </div>

        <div className="check py-2 text-gray-800 text-sm sm:text-lg gap-1">
          <input type="checkbox" name="check" className="mr-1" />
          J’ai lu et j’accepte les mentions légales liées à l’usage de mes
          données personnelles...
        </div>

        <button
          type="submit"
          className="border w-full h-12 rounded bg-gradient-to-bl from-secondary to-final text-white"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
