'use client';

import { motion } from 'framer-motion';
import TopSection from '@/components/common/top-section/TopSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const teachers = [
  {
    name: 'Asha Mehta',
    bio: '20+ years of experience in Hatha and Ayurveda-based healing.',
    image: '/images/teacher1.jpg',
  },
  {
    name: 'Daniel Stone',
    bio: 'Power yoga expert focused on movement therapy.',
    image: '/images/teacher2.jpg',
  },
  {
    name: 'Lila Sharma',
    bio: 'Specialist in Yin Yoga and guided meditation.',
    image: '/images/teacher3.jpg',
  },
  {
    name: 'Lila Sharma',
    bio: 'Specialist in Yin Yoga and guided meditation.',
    image: '/images/teacher3.jpg',
  },
  {
    name: 'Lila Sharma',
    bio: 'Specialist in Yin Yoga and guided meditation.',
    image: '/images/teacher3.jpg',
  },
  {
    name: 'Lila Sharma',
    bio: 'Specialist in Yin Yoga and guided meditation.',
    image: '/images/teacher3.jpg',
  },
  {
    name: 'Lila Sharma',
    bio: 'Specialist in Yin Yoga and guided meditation.',
    image: '/images/teacher3.jpg',
  },
];

// Framer Motion variants for card hover effect
const cardVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// For teacher name color change on hover
const nameVariants = {
  rest: { color: "#1f2937" },        // Tailwind gray-900 hex
  hover: { color: "#3b82f6" },       // Tailwind blue-500 hex
  transition: { duration: 0.3, ease: "easeInOut" },
};

export default function TeachersSection() {
  return (
    <>
      <TopSection
        url="/images/pricing2.jpg"
        heading1="Meet Our Teachers"
        heading2="Certified, experienced, and passionate guides."
      />

      <div className="bg-gray-100">
        <main>
          <section
            className="py-20 px-4 md:px-8 max-w-6xl mx-auto"
            aria-label="Yoga teachers carousel"
          >
            <Carousel opts={{ align: 'start' }} className="w-full">
              {/* Top Button - mobile only */}
              <div className="flex justify-center mb-4 md:hidden">
                <CarouselPrevious className="static" />
              </div>

              <CarouselContent>
                {teachers.map((t, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      className="p-4"
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      variants={cardVariants}
                      tabIndex={0} // Make card focusable for keyboard users
                    >
                      <Card className="overflow-hidden shadow-md bg-stone-100 cursor-pointer">
                        <img
                          src={t.image}
                          alt={`Yoga Instructor ${t.name}`}
                          className="w-full h-100 object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                        <CardContent className="text-center p-6">
                          <motion.h4
                            className="text-xl font-semibold"
                            variants={nameVariants}
                          >
                            {t.name}
                          </motion.h4>
                          <p className="text-gray-600 text-sm mt-2">{t.bio}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Desktop Buttons */}
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />

              {/* Bottom Button - mobile only */}
              <div className="flex justify-center mt-4 md:hidden">
                <CarouselNext className="static" />
              </div>
            </Carousel>
          </section>
        </main>
      </div>
    </>
  );
}