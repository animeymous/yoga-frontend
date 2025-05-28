import React from "react";

interface BlogPostDetailProps {
  title: string;
  content: React.ReactNode;
  image: string;
  publishedDate: string;
  author: string;
}

export default function BlogPostDetail({
  title,
  content,
  image,
  publishedDate,
  author,
}: BlogPostDetailProps) {
  const formattedDate = new Date(publishedDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="bg-gray-100 pb-20 pt-20">
      <article
        className="pb-20 max-w-4xl mx-auto px-6 py-16 bg-white rounded-xl shadow-md"
        itemScope
        itemType="https://schema.org/BlogPosting"
        aria-labelledby="blog-post-title"
      >
        {/* Blog Header */}
        <header className="mb-8 text-center">
          <h1
            id="blog-post-title"
            className="text-4xl font-extrabold text-gray-900 mb-4"
            itemProp="headline"
          >
            {title}
          </h1>
          <p className="text-gray-600 text-sm mb-1">
            By <span className="font-semibold" itemProp="author">{author}</span>
          </p>
          <time
            dateTime={publishedDate}
            className="text-gray-500 text-xs uppercase tracking-wide"
            itemProp="datePublished"
          >
            {formattedDate}
          </time>
        </header>

        {/* Blog Image */}
        <figure className="mb-10" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
          <img
            src={image}
            alt={`Cover image for blog post titled ${title}`}
            className="w-full rounded-lg object-cover h-[80vh]"
            loading="lazy"
            decoding="async"
            itemProp="url"
          />
          {/* Optional: caption 
          <figcaption className="text-sm text-gray-500 mt-2">Image caption here</figcaption> 
          */}
        </figure>

        {/* Blog Content */}
        <section
          id="blog-post-content"
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          itemProp="articleBody"
        >
          {content}
        </section>
      </article>
    </main>
  );
}
