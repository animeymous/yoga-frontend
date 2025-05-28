// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import BlogPostDetail from "@/components/common/blog-post-detail/BlogPostDetail";
import blogPosts from "@/constants/blogPosts";

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) return notFound();

  return (
    <BlogPostDetail
      title={post.title}
      content={post.content}
      image={post.image}
      publishedDate={post.publishedDate}
      author={post.author}
    />
  );
}