'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogPortal } from "@/components/ui/dialog";
import { useEffect, useState } from 'react';
import YogaMessageSection from '../yoga-message/YogaMessageSection';
import YogaCertificateSection from '../yoga-certificate/YogaCertificateSection';
import TestimonialSection from '../testimonials/TestimonialSection';
import YogaTeacherTrainingSection from '../yoga-ttc/YogaTeacherTrainingSection';

export default function HomeSection() {
  const [showDiscount, setShowDiscount] = useState(false);

  useEffect(() => {
    // Initial delay of 1 second before showing
    const showTimer = setTimeout(() => {
      setShowDiscount(true);
    }, 1000);

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setShowDiscount(false);
    }, 6000); // 1s initial delay + 5s show time

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <section className="bg-stone-100 text-gray-800" role="main">
      {/* Special Discount Dialog */}
      <AnimatePresence>
        {showDiscount && (
          <motion.div
            role="alert"
            aria-label="Special discount offer for Indian students"
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-20 right-4 w-[90%] sm:w-80 bg-gradient-to-r from-white to-stone-50 p-5 rounded-lg shadow-lg border border-primary/10 z-50 backdrop-blur-sm"
          >
            <motion.button 
              onClick={() => setShowDiscount(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close discount notification"
            >
              ×
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" role="img" aria-label="celebration emoji">🎉</span>
                <div>
                  <h3 className="text-primary font-semibold text-lg mb-1">
                    Exclusive Student Offer!
                  </h3>
                  <p className="text-sm text-gray-600">
                    <strong className="text-primary/90">30% OFF</strong> for Indian students with valid ID
                  </p>
                  <motion.div 
                    className="mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href="/contact"
                      className="inline-block text-sm bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1.5 rounded-full transition-colors"
                      onClick={() => setShowDiscount(false)}
                    >
                      Claim Now →
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="absolute bottom-0 left-0 h-1 bg-primary/20 rounded-full"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 5, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <header className="relative w-full h-[90vh] bg-gradient-to-br from-stone-100 via-white to-stone-200 flex items-center justify-center text-center overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Animated Background Blobs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-[-4rem] left-[-4rem] w-48 h-48 sm:w-64 sm:h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          className="absolute top-[-4rem] right-[-4rem] w-48 h-48 sm:w-64 sm:h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30"
        ></motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative z-10 px-4 sm:px-6 max-w-xl sm:max-w-3xl"
        >
          <motion.h1 
            variants={textVariant(0.4)}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow"
          >
            Welcome to <span className="text-primary">Ashu Yoga Studio</span>
          </motion.h1>
          <motion.p 
            variants={textVariant(0.6)}
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-md sm:max-w-xl mx-auto"
          >
            Experience authentic <strong>yoga classes</strong> designed for your mental peace, body strength, and spiritual balance. Whether you're a beginner or advanced yogi, Ashu Yoga helps you find your inner center.
          </motion.p>
          <motion.div 
            variants={textVariant(0.8)}
            className="mt-6 sm:mt-8"
          >
            <Link
              href="/classes"
              className="inline-block bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:via-red-600 hover:to-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg hover:shadow-xl"
            >
              Explore Yoga Classes
            </Link>
          </motion.div>
        </motion.div>
      </header>
      
      {/* About Snippet */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center max-w-3xl mx-auto px-6"
      >
        <h2 className="text-3xl font-bold">Why Choose Ashu Yoga?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          At <strong>Ashu Yoga Studio</strong>, we blend ancient yogic wisdom with modern wellness practices to offer a nurturing
          sanctuary for your body, mind, and soul. Discover a lifestyle of mindfulness, strength, and serenity.
        </p>
      </motion.section>

      {/* Yoga Message Section */}
      <YogaMessageSection />

      {/* Yoga Certificate Section */}
      <YogaCertificateSection />

      {/* Yoga Teacher Training Section */}
      <YogaTeacherTrainingSection />

      {/* Benefits Section */}
      <section className="py-16 bg-white px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-semibold">Benefits of Practicing Yoga</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Unlock holistic wellness and vitality through yoga. These core benefits support mental health, body flexibility,
            and emotional resilience.
          </p>
        </motion.div>
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-left"
        >
          {[
            {
              title: 'Improve Flexibility',
              desc: 'Regular yoga practice improves range of motion, supports joint health, and reduces stiffness in daily life.',
              icon: '🧘‍♀️',
            },
            {
              title: 'Reduce Stress & Anxiety',
              desc: 'Breathing exercises and meditation techniques in yoga lower cortisol and enhance mental clarity and calm.',
              icon: '🧠',
            },
            {
              title: 'Boost Strength & Posture',
              desc: 'Yoga helps build core strength, tone muscles, and correct postural imbalances for long-term wellness.',
              icon: '💪',
            },
          ].map((b, i) => (
            <motion.article 
              variants={fadeIn('up', 'spring', i * 0.2, 0.8)}
              key={i} 
              className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-4xl mb-4" aria-hidden>{b.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{b.title}</h4>
              <p className="text-gray-600">{b.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Yoga Philosophy */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white px-6 text-center" 
        id="philosophy"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Our Yoga Philosophy</h3>
          <p className="text-gray-600 text-lg">
            At <strong>Ashu Yoga</strong>, we believe that yoga is not just exercise — it's a sacred path of transformation.
            Our philosophy is rooted in the traditional teachings of Patanjali's Yoga Sutras, and we infuse every class
            with intention, breath awareness, and compassion.
            <br /><br />
            Yoga is a way of life — a means to balance your mind, body, and spirit through regular practice, mindfulness, and self-discovery.
          </p>
        </div>
      </motion.section>

      {/* Upcoming Events */}
      <section className="py-16 bg-stone-200 px-6 text-center" id="events">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Upcoming Yoga Events & Wellness Retreats
        </motion.h3>
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto"
        >
          {[
            {
              title: 'Sunrise Beach Yoga',
              date: 'June 15, 2025',
              desc: 'Rejuvenate your spirit with a gentle yoga flow at dawn, beside the calming sound of ocean waves.',
            },
            {
              title: 'Weekend Wellness Retreat',
              date: 'July 20–22, 2025',
              desc: 'Unplug and reset in the serene mountains. Daily yoga, organic meals, and deep rest.',
            },
            {
              title: 'Full Moon Meditation',
              date: 'August 1, 2025',
              desc: 'Align with lunar energy through guided meditation, sound healing, and breathwork.',
            },
          ].map((event, i) => (
            <motion.article 
              variants={fadeIn('up', 'spring', i * 0.2, 0.8)}
              key={i} 
              className="bg-white p-6 rounded-lg shadow-md text-left hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-xl font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-600">{event.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Newsletter Signup */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white px-6 text-center" 
        id="newsletter"
      >
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Join Our Yoga Community</h3>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter to receive <strong>free yoga tips</strong>, upcoming events, and member-only wellness offers.
          </p>
          <motion.form 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full sm:w-auto"
              aria-label="Email address"
              whileFocus={{ scale: 1.05, boxShadow: '0 0 0 2px rgba(239, 68, 68, 0.5)' }}
            />
            <motion.button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </motion.section>

      {/* Instagram Gallery Preview */}
      <section className="py-16 bg-stone-100 px-6 text-center" id="gallery">
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-6"
        >
          Follow Us on Instagram
        </motion.h3>
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              variants={fadeIn('up', 'spring', i * 0.1, 0.8)}
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`/images/instagram${i}.jpg`}
                alt={`Ashu Yoga Instagram photo ${i}`}
                className="rounded-lg w-full h-40 object-cover shadow-sm hover:shadow-lg transition-all duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Partners */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white px-6 text-center" 
        id="partners"
      >
        <h3 className="text-3xl font-semibold mb-6">Our Trusted Wellness Partners</h3>
        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {['lululemon', 'manduka', 'calm', 'headspace'].map((brand, i) => (
            <motion.img
              variants={fadeIn('up', 'spring', i * 0.2, 0.8)}
              key={i}
              src={`/images/partner${i + 1}.jpg`}
              alt={`${brand} yoga partnership`}
              className="h-40 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110"
              loading="lazy"
            />
          ))}
        </motion.div>
      </motion.section>

      {/* FAQ Snippet */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-stone-100 text-center px-6" 
        id="faqs"
      >
        <h3 className="text-3xl font-semibold mb-6">Frequently Asked Questions (FAQs)</h3>
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-left space-y-6"
        >
          {[
            {
              question: 'Do I need yoga experience to join?',
              answer: 'Not at all! Our yoga studio welcomes all levels — from complete beginners to experienced practitioners.',
            },
            {
              question: 'What should I bring to a yoga class?',
              answer: 'Bring a yoga mat, water bottle, and wear comfortable clothing. We also provide mats and props in-studio.',
            },
            {
              question: 'Are online yoga classes available?',
              answer: 'Yes! Many of our yoga classes are offered in both studio and live-streamed formats for your convenience.',
            },
          ].map((faq, i) => (
            <motion.div 
              variants={fadeIn('up', 'spring', i * 0.2, 0.8)}
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-all duration-300"
            >
              <h4 className="text-lg font-medium text-primary">{faq.question}</h4>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-900 text-white text-center px-6" 
        id="cta"
      >
        <motion.h3 
          className="text-3xl font-bold"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ready to begin your yoga journey?
        </motion.h3>
        <motion.p 
          className="mt-4 text-lg max-w-xl mx-auto"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Sign up now for a <strong>free trial yoga class</strong> and experience the Ashu Yoga difference.
        </motion.p>
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book a Free Class
          </Link>
        </motion.div>
      </motion.section>
    </section>
  );
}