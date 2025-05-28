import { notFound } from "next/navigation";
import BlogPostDetail from "@/components/common/blog-post-detail/BlogPostDetail";
import blogPosts from "@/constants/blogPosts";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;  // <-- await params here

  const post = blogPosts.find((p) => p.slug === slug);

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