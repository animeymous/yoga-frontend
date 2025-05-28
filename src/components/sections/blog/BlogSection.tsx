"use client";

import TopSection from "@/components/common/top-section/TopSection";
import Link from "next/link";
import blogPosts from "@/constants/blogPosts";
import { motion } from "framer-motion";
import PromoPopup from "@/components/common/promo-popup/PromoPopup";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

export default function BlogSection() {
  return (
    <>
      <PromoPopup />
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
            <motion.article
              key={post.id}
              className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
              aria-labelledby={`blog-title-${post.id}`}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0 12px 20px rgba(59, 130, 246, 0.3)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="w-full h-[450px] overflow-hidden">
                <img
                  src={post.image}
                  alt={`Cover for blog post: ${post.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
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
                  href={`/blog/${post.slug}`}
                  className="text-primary font-medium hover:underline"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read more →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}