'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function YogaMessageSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const yogaContent = {
    short: `Yoga is more than just physical exercise; it's a profound journey of self-discovery and inner transformation. 
    This ancient practice, originating from India thousands of years ago, combines physical postures (asanas), 
    breathing techniques (pranayama), and meditation to create harmony between body, mind, and spirit.`,
    
    full: `The word "Yoga" comes from the Sanskrit root "Yuj," meaning to join or unite, symbolizing the union of individual 
    consciousness with universal consciousness. Through regular practice, yoga helps develop not just physical flexibility 
    and strength, but also mental clarity, emotional balance, and spiritual awareness.

    The eight limbs of yoga, as outlined in Patanjali's Yoga Sutras, provide a comprehensive framework for holistic living:
    Yama (ethical standards), Niyama (self-discipline), Asana (postures), Pranayama (breath control), Pratyahara (sensory 
    withdrawal), Dharana (concentration), Dhyana (meditation), and Samadhi (state of ecstasy).

    Modern research continues to validate what ancient yogis knew: regular yoga practice can reduce stress, improve 
    flexibility, boost immune function, enhance mental clarity, and promote overall well-being. In our fast-paced world, 
    yoga offers a sanctuary of peace and a path to greater self-awareness.

    Whether you're seeking physical fitness, mental peace, or spiritual growth, yoga meets you where you are and guides 
    you toward your highest potential. It teaches us that true strength comes not just from physical prowess, but from 
    the balance of body, mind, and spirit.`
  };

  return (
    <section className="py-16 bg-stone-50" id="yoga-philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          {/* Image Section */}
          <motion.div 
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/blog1.jpg"
              alt="Peaceful yoga meditation scene with a person meditating in lotus pose during sunrise"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800"
            >
              The Ancient Wisdom of Yoga
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="prose prose-lg prose-stone max-w-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? 'full' : 'short'}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {isExpanded ? yogaContent.full : yogaContent.short}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-4 inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <svg 
                  className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 