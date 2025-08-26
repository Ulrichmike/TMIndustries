import { useState } from "react";
import { Lightbox } from "yet-another-react-lightbox";
import backgroundImage from "./../assets/picture1.jpg";

export default function Galleries() {
  //state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  //variables
  const galleryItems = [
    { id: 1, src: "/img/project1.jpg", title: "Projet Industriel" },
    { id: 2, src: "/img/project2.jpg", title: "Chantier Naval" },
    { id: 3, src: "/img/project3.jpg", title: "Installation Résidentielle" },
    { id: 4, src: "/img/project4.jpg", title: "Système Commercial" },
    { id: 5, src: "/img/project5.jpg", title: "Maintenance Préventive" },
    { id: 6, src: "/img/project6.jpg", title: "Réparation Urgente" },
    { id: 7, src: "/img/project4.jpg", title: "Système Commercial" },
    { id: 8, src: "/img/project5.jpg", title: "Maintenance Préventive" },
    { id: 9, src: "/img/project6.jpg", title: "Réparation Urgente" },
  ];
  return (
    <>
      <section className="px-4 md:px-24 bg-white">
        <div className="container mx-auto">
          <span className="text-intermediaire font-semibold uppercase tracking-wider">
            Our Work Gallery
          </span>
          <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-2 mb-6 capitalize">
            Explore our recent projects and installations
          </h2>

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
