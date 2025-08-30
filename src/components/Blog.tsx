import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: 1,
        title: "Optimisez votre climatisation avant l’été",
        excerpt:
          "Préparez vos installations de climatisation pour les fortes chaleurs et réduisez vos factures d’énergie grâce à nos conseils d’entretien préventif.",
        date: "10 Juin 2025",
        image: "https://picsum.photos/seed/ac/600/400",
        author: "Marc Dupont",
      },
      {
        id: 2,
        title: "Maintenance préventive : la clé pour éviter les pannes",
        excerpt:
          "Découvrez pourquoi planifier un entretien régulier de vos systèmes HVAC et plomberie peut vous faire économiser du temps et de l’argent.",
        date: "25 Mai 2025",
        image: "https://picsum.photos/seed/maintenance/600/400",
        author: "Sophie Bernard",
      },
      {
        id: 3,
        title: "Installer un système de froid industriel efficace",
        excerpt:
          "Nos solutions de froid industriel permettent aux entreprises de garantir la conservation optimale de leurs produits tout en économisant de l’énergie.",
        date: "15 Avril 2025",
        image: "https://picsum.photos/seed/froid/600/400",
        author: "Julien Lefevre",
      },
      {
        id: 4,
        title: "Astuces pour économiser sur la plomberie et l’eau",
        excerpt:
          "Nos experts partagent des conseils pratiques pour réduire la consommation d’eau et éviter les problèmes de plomberie dans votre maison ou votre entreprise.",
        date: "2 Mars 2025",
        image: "https://picsum.photos/seed/plomberie/600/400",
        author: "Camille Martin",
      },
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <span className="text-intermediaire font-semibold uppercase tracking-wider">
          BLOG / ACTUALITÉS
        </span>
        <h2 className="text-3xl text-gray-900 md:text-4xl font-bold mt-2 mb-6 uppercase">
          Nos Dernières Actualités
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Suivez nos conseils, astuces et actualités sur la climatisation, le
          froid, la plomberie et la maintenance pour particuliers et
          professionnels.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Chargement des articles...
          </p>
        ) : (
          posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 hover:text-blue-600 cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Par {post.author}
                  </span>
                  <a
                    href="#"
                    className="inline-block mt-4 text-paleta4 font-medium hover:text-paleta2 hover:underline transition-colors"
                  >
                    Lire la suite →
                  </a>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
