import TopSection from "@/components/common/top-section/TopSection";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "5 Morning Yoga Routines for a Productive Day",
    summary: "Start your day with energy and intention through these morning flows.",
    image: "/images/blog1.jpg",
    slug: "/blog/morning-yoga",
  },
  {
    id: 2,
    title: "The Science Behind Mindful Breathing",
    summary: "Understand how breathwork impacts your body and mind.",
    image: "/images/blog2.jpg",
    slug: "/blog/mindful-breathing",
  },
  {
    id: 3,
    title: "How to Create a Home Meditation Space",
    summary: "Transform any corner into a serene sanctuary for daily mindfulness.",
    image: "/images/blog3.jpg",
    slug: "/blog/home-meditation",
  },
  {
    id: 4,
    title: "5 Morning Yoga Routines for a Productive Day",
    summary: "Start your day with energy and intention through these morning flows.",
    image: "/images/blog1.jpg",
    slug: "/blog/morning-yoga",
  },
  {
    id: 5,
    title: "The Science Behind Mindful Breathing",
    summary: "Understand how breathwork impacts your body and mind.",
    image: "/images/blog2.jpg",
    slug: "/blog/mindful-breathing",
  },
  {
    id: 6,
    title: "How to Create a Home Meditation Space",
    summary: "Transform any corner into a serene sanctuary for daily mindfulness.",
    image: "/images/blog3.jpg",
    slug: "/blog/home-meditation",
  }
];

export default function BlogSection() {
  return (
    <>
      <TopSection
        url="/images/blog4.jpg"
        heading1="Our Yoga Blogs"
        heading2="Find the right practice for your body and soul."
      />
      <section className="py-20 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Blog</h2>
          <p className="mt-4 text-muted-foreground">
            Insights on yoga, wellness, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-150 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
                <Link href={post.slug} className="text-primary font-medium hover:underline">
                  Read more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
