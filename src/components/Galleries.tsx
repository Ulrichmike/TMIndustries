import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import backgroundImage from "./../assets/images/picture1.jpg";

export default function Galleries() {
  //state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  //variables
  const galleryItems = [
    { id: 1, src: backgroundImage, title: "Projet Industriel" },
    { id: 2, src: backgroundImage, title: "Chantier Naval" },
    { id: 3, src: backgroundImage, title: "Installation Résidentielle" },
    { id: 4, src: backgroundImage, title: "Système Commercial" },
    { id: 5, src: backgroundImage, title: "Maintenance Préventive" },
    { id: 6, src: backgroundImage, title: "Réparation Urgente" },
    { id: 7, src: backgroundImage, title: "Système Commercial" },
    { id: 8, src: backgroundImage, title: "Maintenance Préventive" },
    { id: 9, src: backgroundImage, title: "Réparation Urgente" },
  ];
  return (
    <>
      <section className="px-4 md:px-24 bg-white">
        <div className="container mx-auto">
          <span className="bg-gradient-to-bl from-primary to-final bg-clip-text text-transparent font-semibold uppercase tracking-wider">
            Notre Galerie
          </span>
          <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-2 mb-6 uppercase">
            Découvrez nos projets récents et installations
          </h2>
          <p className="text-gray-600 mb-8 mx-4 md:mx-12 lg:mx-24">
            TMIndustries met en œuvre son expertise dans la climatisation, le
            froid, la plomberie et la maintenance pour offrir des solutions sur
            mesure à nos clients, professionnels et particuliers.
          </p>

          <div className="grid grid-cols-2 grid-rows-4 auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`cursor-pointer group relative overflow-hidden rounded-lg shadow-md ${
                  index % 3 === 0 ? "row-span-2" : "row-span-1"
                }`}
                onClick={() => {
                  setPhotoIndex(index);
                  setLightboxOpen(true);
                }}
              >
                <img
                  src={backgroundImage}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium">View Project</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={galleryItems}
          index={photoIndex}
          carousel={{
            finite: false,
          }}
          controller={{
            closeOnBackdropClick: true,
          }}
          animation={{
            fade: 300,
            swipe: 500,
          }}
        />
      </section>
    </>
  );
}
