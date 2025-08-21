import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Ma fille préparait son bac avec beaucoup d'anxiété. Grâce à son répétiteur d'Académique Brillance, elle a non seulement excellé dans ses examens, mais a aussi gagné en confiance. Un investissement qui a vraiment porté ses fruits.",
      name: "Jean Lefebvre",
      role: "Père d'une lycéenne",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Un accompagnement très professionnel et bienveillant. Mon fils a retrouvé goût aux études et a nettement amélioré ses notes.",
      name: "Sophie Martin",
      role: "Mère d'un collégien",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Académique Brillance nous a vraiment aidés. Mon enfant est plus motivé que jamais, et nous sommes très reconnaissants.",
      name: "Ali Hassan",
      role: "Père d'un élève de terminale",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
  ];

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="py-16 bg-gray-50 my-12">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span className="text-intermediaire font-semibold uppercase tracking-wider">
          Testimonials
        </span>
        <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-2 mb-6">
          What Our Client Say's About Us
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          loop={true}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            const navigation = swiper.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-2xl relative shadow">
                <div className="flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full border border-red-200"
                  />
                </div>
                <div className="grid items-center justify-center mb-1">
                  <p className="font-bold text-gray-900">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>

                <p className="mb-4 text-gray-800">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button ref={prevRef} className="prev-btn">
              ◀
            </button>
            <button ref={nextRef} className="next-btn">
              ▶
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
