'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, School, Building2, Users } from 'lucide-react';
import type { JSX } from 'react';

// Using existing images to avoid build crashes
const galleryImages = [
  {
    src: '/images/yoga1.jpg',
    alt: 'Yoga Practice Session',
    category: 'Classes',
    description: 'Morning yoga practice session in our main hall'
  },
  {
    src: '/images/yoga2.jpg',
    alt: 'Meditation Hall',
    category: 'Facilities',
    description: 'Our peaceful meditation hall for deep practice'
  },
  {
    src: '/images/yoga3.jpg',
    alt: 'Outdoor Yoga',
    category: 'Classes',
    description: 'Outdoor yoga sessions in nature'
  },
  {
    src: '/images/yoga4.jpg',
    alt: 'Accommodation',
    category: 'Facilities',
    description: 'Comfortable accommodation for our students'
  },
  {
    src: '/images/yoga5.jpg',
    alt: 'Dining Area',
    category: 'Facilities',
    description: 'Spacious dining area for community meals'
  },
  {
    src: '/images/yoga6.jpg',
    alt: 'Group Meditation',
    category: 'Activities',
    description: 'Group meditation and mindfulness sessions'
  },
  {
    src: '/images/yoga7.jpg',
    alt: 'Ashram Garden',
    category: 'Facilities',
    description: 'Our beautiful and peaceful ashram garden'
  }
];

const categories = [
  { id: 'all', label: 'All', icon: Camera },
  { id: 'classes', label: 'Classes', icon: School },
  { id: 'facilities', label: 'Facilities', icon: Building2 },
  { id: 'activities', label: 'Activities', icon: Users }
];

export default function GalleryPage(): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === selectedCategory);

  return (
    <article className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section - Custom for performance */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/yoga1.jpg"
            alt="Ashu Yoga Gallery"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              A visual journey through our spiritual sanctuary
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filter - Using shadcn Tabs */}
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12"
        >
          <Tabs 
            defaultValue="all" 
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full"
          >
            <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-transparent mb-8 justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-900 px-6"
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Gallery Grid - Custom for performance with shadcn Card */}
            {categories.map((category) => (
              <TabsContent
                key={category.id}
                value={category.id}
                className="mt-0"
              >
                <motion.div
                  variants={staggerContainer(0.1, 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.src}
                      variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                    >
                      <Card className="overflow-hidden cursor-pointer group py-0">
                        <CardContent className="p-0">
                          <div 
                            className="relative aspect-square"
                            onClick={() => setSelectedImage(image)}
                          >
                            <Image
                              src={image.src}
                              alt={image.alt}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                              <div className="text-center">
                                <p className="text-white font-medium mb-2">{image.alt}</p>
                                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                                  {image.category}
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>

      {/* Lightbox - Using shadcn Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[90vw] h-[90vh] p-0">
          <div className="relative w-full h-full">
            {selectedImage && (
              <>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
                  <h3 className="text-lg font-semibold mb-1">{selectedImage.alt}</h3>
                  <p className="text-sm text-gray-300">{selectedImage.description}</p>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
} 