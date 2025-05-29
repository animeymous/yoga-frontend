'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Anjali R.',
    role: 'Yoga Practitioner',
    location: 'Mumbai, India',
    image: '/images/yoga1.jpg',
    quote: "Ashu Yoga has completely transformed how I deal with stress. The instructors here don't just teach poses; they impart wisdom that has helped me find mental strength and emotional balance. The authentic approach to yoga has made all the difference.",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael D.',
    role: 'Corporate Professional',
    location: 'Delhi, India',
    image: '/images/yoga2.jpg',
    quote: "My flexibility and posture have improved tremendously since joining Ashu Yoga. The personalized attention and expert guidance have helped me overcome my chronic back pain. The instructors are highly knowledgeable and genuinely care about each student's progress.",
    rating: 5
  },
  {
    id: 3,
    name: 'Sophie K.',
    role: 'Wellness Coach',
    location: 'Bangalore, India',
    image: '/images/yoga3.jpg',
    quote: "Every session here feels like a sacred journey of self-discovery. The blend of traditional yoga philosophy with modern teaching methods is perfect. I always leave with peace in my heart and clarity in my mind. It's more than just yoga; it's a life-changing experience.",
    rating: 5
  },
  {
    id: 4,
    name: 'Rahul M.',
    role: 'IT Professional',
    location: 'Pune, India',
    image: '/images/yoga4.jpg',
    quote: "As a beginner, I was initially intimidated by yoga, but the supportive environment at Ashu Yoga made me feel completely at ease. The step-by-step guidance and positive encouragement have helped me build a strong foundation in yoga practice.",
    rating: 5
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const AUTO_PLAY_INTERVAL = 3000; // Increased to 8 seconds

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [autoplay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-stone-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Transformational Journeys
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Ashu Yoga has impacted the lives of our students, helping them find balance, strength, and inner peace.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div 
                  className="relative h-64 md:h-96 rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={`${testimonials[currentIndex].name}'s transformation with Ashu Yoga`}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </motion.svg>
                    ))}
                  </div>

                  <motion.blockquote 
                    className="text-gray-700 text-lg md:text-xl italic leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    "{testimonials[currentIndex].quote}"
                  </motion.blockquote>

                  <motion.div 
                    className="border-l-4 border-primary pl-4 relative overflow-hidden"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-primary animate-pulse" />
                    <h3 className="font-semibold text-gray-800 text-lg">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Progress bar */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary/20"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_PLAY_INTERVAL / 1000, ease: "linear" }}
                key={`progress-${currentIndex}`}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4 pointer-events-none">
            <motion.button
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/80 shadow-lg transition-all duration-300 pointer-events-auto hover:shadow-xl"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.95)" }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white/80 shadow-lg transition-all duration-300 pointer-events-auto hover:shadow-xl"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary scale-110 shadow-md' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 