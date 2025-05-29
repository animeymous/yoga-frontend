import React from "react";
import MotionWrapper, { MotionDiv } from "@/components/ui/motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from "next/link";

interface BlogPostDetailProps {
  title: string;
  content: React.ReactNode;
  image: string;
  publishedDate: string;
  author: string;
  category?: string;
}

export default function BlogPostDetail({
  title,
  content,
  image,
  publishedDate,
  author,
  category = "Yoga Practice",
}: BlogPostDetailProps) {
  const formattedDate = new Date(publishedDate).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <MotionWrapper>
      <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen pb-20">
        {/* Hero Section */}
        <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
          <img
            src={image}
            alt={`Cover image for blog post titled ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Badge 
                  className="mb-6 bg-amber-100 text-amber-900 hover:bg-amber-200"
                  variant="secondary"
                >
                  {category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {title}
                </h1>
                <div className="flex items-center justify-center gap-6 text-white/90">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={publishedDate}>{formattedDate}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{author}</span>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article
          className="max-w-4xl mx-auto px-4 -mt-20 relative z-10"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <Card>
            <CardContent className="p-8 md:p-12">
              {/* Navigation */}
              <div className="flex items-center justify-between mb-8">
                <Button variant="ghost" className="text-gray-600" asChild>
                  <Link href="/blog">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Blog
                  </Link>
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>

              <Separator className="mb-8" />

              {/* Content */}
              <section
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                itemProp="articleBody"
              >
                {content}
              </section>

              <Separator className="my-8" />

              {/* Author Bio */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <User className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{author}</h3>
                  <p className="text-sm text-gray-600">Yoga Teacher & Wellness Expert</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts Placeholder */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="mb-2">
                      {category}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Related Yoga Article {i}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Short preview of the related article...
                    </p>
                    <Button variant="ghost" className="text-amber-600 p-0 hover:text-amber-700">
                      Read more →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </article>
      </main>
    </MotionWrapper>
  );
}
