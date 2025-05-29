"use client";

import TopSection from "@/components/common/top-section/TopSection";
import Link from "next/link";
import blogPosts from "@/constants/blogPosts";
import MotionWrapper, { MotionDiv, MotionH1, MotionP } from "@/components/ui/motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, User, Calendar, Tag } from 'lucide-react';

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

// Categories for filtering
const categories = [
  "All",
  "Yoga Practice",
  "Meditation",
  "Wellness",
  "Spirituality",
  "Lifestyle"
];

export default function BlogSection() {
  return (
    <MotionWrapper>
      <TopSection
        url="/images/blog4.jpg"
        heading1="Our Yoga Blog"
        heading2="Explore expert tips, mindfulness guides, and wellness insights from our yoga community."
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="yoga-blog">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <header>
              <MotionH1 
                className="text-4xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Ashu Yoga Blog
              </MotionH1>
              <MotionP 
                className="mt-4 text-gray-600 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Stay connected with the latest practices in yoga, breathwork, mindfulness, and holistic living.
              </MotionP>
            </header>
          </div>

          <Tabs defaultValue="All" className="w-full mb-12">
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent justify-center">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-amber-100 data-[state=active]:text-amber-900 px-6"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <ScrollArea className="w-full">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts
                      .filter(post => category === "All" || post.category === category)
                      .map((post) => (
                        <MotionDiv
                          key={post.id}
                          initial="offscreen"
                          whileInView="onscreen"
                          viewport={{ once: true, amount: 0.3 }}
                          variants={cardVariants}
                        >
                          <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-full overflow-hidden">
                              <img
                                src={post.image}
                                alt={`Cover for blog post: ${post.title}`}
                                className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                              />
                              <Badge 
                                className="absolute top-4 right-4 bg-amber-100 text-amber-900 hover:bg-amber-200"
                                variant="secondary"
                              >
                                {post.category || "Yoga Practice"}
                              </Badge>
                            </div>
                            <CardHeader>
                              <CardTitle className="text-xl font-semibold line-clamp-2">
                                {post.title}
                              </CardTitle>
                              <CardDescription className="flex items-center gap-2 text-sm text-gray-500">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.publishedDate).toLocaleDateString()}
                              </CardDescription>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 text-sm line-clamp-3">
                                {post.summary}
                              </p>
                            </CardContent>
                            <CardFooter className="mt-auto pt-4">
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <User className="h-4 w-4" />
                                  <span>{post.author}</span>
                                </div>
                                <Button 
                                  variant="ghost" 
                                  className="text-amber-600 hover:text-amber-700 hover:bg-amber-50"
                                  asChild
                                >
                                  <Link href={`/blog/${post.slug}`}>
                                    Read more →
                                  </Link>
                                </Button>
                              </div>
                            </CardFooter>
                          </Card>
                        </MotionDiv>
                      ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </MotionWrapper>
  );
}