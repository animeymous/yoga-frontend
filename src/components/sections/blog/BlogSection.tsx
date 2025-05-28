import TopSection from "@/components/common/top-section/TopSection";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Morning Yoga Routines for a Productive Day",
    summary: "Start your day with energy and intention through these morning flows designed to boost clarity and focus.",
    image: "/images/blog1.jpg",
    slug: "/blog/morning-yoga",
  },
  {
    id: 2,
    title: "The Science Behind Mindful Breathing",
    summary: "Explore how breathwork enhances mental clarity, reduces stress, and supports emotional balance.",
    image: "/images/blog2.jpg",
    slug: "/blog/mindful-breathing",
  },
  {
    id: 3,
    title: "How to Create a Home Meditation Space",
    summary: "Learn to design a calming meditation zone at home that promotes daily mindfulness and inner peace.",
    image: "/images/blog3.jpg",
    slug: "/blog/home-meditation",
  },
];

export default function BlogSection() {
  return (
    <>
      <TopSection
        url="/images/blog4.jpg"
        heading1="Our Yoga Blog"
        heading2="Explore expert tips, mindfulness guides, and wellness insights from our yoga community."
      />

      <section className="py-20 bg-gray-100" id="yoga-blog">
        <div className="text-center mb-12">
          <header>
            <h1 className="text-4xl font-bold text-gray-900">Ashu Yoga Blog</h1>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Stay connected with the latest practices in yoga, breathwork, mindfulness, and holistic living.
            </p>
          </header>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
              aria-labelledby={`blog-title-${post.id}`}
            >
              <div className="w-full h-150 overflow-hidden">
                <img
                  src={post.image}
                  alt={`Cover for blog post: ${post.title}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h2
                  id={`blog-title-${post.id}`}
                  className="text-xl font-semibold mb-2 text-gray-900"
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                <Link
                  href={post.slug}
                  className="text-primary font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}