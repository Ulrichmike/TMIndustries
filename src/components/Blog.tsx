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
  // states
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // fetch mock data (could be replaced by API call)
  useEffect(() => {
    const mockPosts: Post[] = [
      {
        id: 1,
        title: "Boost Your React Skills with These Tips",
        excerpt: "Learn advanced techniques to improve your React development.",
        date: "Aug 10, 2025",
        image: "https://picsum.photos/seed/react-blog/600/400",
        author: "Jane Doe",
      },
      {
        id: 2,
        title: "Design Trends for 2025",
        excerpt: "Stay up to date with the latest UI/UX design patterns.",
        date: "Aug 5, 2025",
        image: "https://picsum.photos/seed/design-blog/600/400",
        author: "John Smith",
      },
      {
        id: 3,
        title: "SVG Magic: Creative Uses for Modern Web Apps",
        excerpt: "How to make the most out of SVGs in your projects.",
        date: "Jul 28, 2025",
        image: "https://picsum.photos/seed/svg-blog/600/400",
        author: "Emily Johnson",
      },
    ];

    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <span className="text-intermediaire font-semibold uppercase tracking-wider">
            OUR BLOG
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
            Read Our Latest News
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Explore insights, tips, and trends from our experts to help you stay
            ahead.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <p className="col-span-full text-center text-gray-500">
              Loading posts...
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
                      By {post.author}
                    </span>
                    <a
                      href="#"
                      className="inline-block mt-4 text-paleta4 font-medium hover:text-paleta2 hover:underline transition-colors"
                    >
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}
