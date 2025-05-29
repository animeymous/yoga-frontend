'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const yogaCourses = [
  {
    id: 1,
    title: '100 Hour Yoga Teacher Training',
    image: '/images/yoga5.jpg',
    duration: '12 Days',
    module: 'Residential with Meals',
    pricing: {
      private: 699,
      shared: 499
    },
    certification: 'Yoga Alliance',
    dates: '1st-12th of every month',
    level: 'Beginner',
    description: 'Perfect introduction to yoga teaching methodology and foundational practices.'
  },
  {
    id: 2,
    title: '200 Hour Yoga Teacher Training',
    image: '/images/yoga6.jpg',
    duration: '24 Days',
    module: 'Residential with Meals',
    pricing: {
      private: 1249,
      shared: 1049
    },
    certification: 'Yoga Alliance',
    dates: '1st-24th of every month',
    level: 'Beginner to Intermediate',
    description: 'Comprehensive training in asanas, pranayama, meditation, and teaching methodology.'
  },
  {
    id: 3,
    title: '300 Hour Yoga Teacher Training',
    image: '/images/yoga7.jpg',
    duration: '28 Days',
    module: 'Residential with Meals',
    pricing: {
      private: 1399,
      shared: 1199
    },
    certification: 'Yoga Alliance',
    dates: '1st-28th of every month',
    level: 'Intermediate',
    description: 'Advanced training for experienced practitioners to deepen their practice and teaching skills.'
  },
  {
    id: 4,
    title: '500 Hour Yoga Teacher Training',
    image: '/images/yoga8.jpg',
    duration: '8 Weeks',
    module: 'Residential with Meals',
    pricing: {
      private: 2399,
      shared: 1749
    },
    certification: 'Yoga Alliance',
    dates: '1st of every month',
    level: 'Advanced',
    description: 'Comprehensive advanced program combining 200 and 300-hour certifications.'
  }
];

export default function YogaTeacherTrainingSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-stone-50 to-white" id="yoga-teacher-training">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Yoga Teacher Training Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your practice and become a certified yoga teacher with our comprehensive training programs.
            All courses are Yoga Alliance certified and taught by experienced instructors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {yogaCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={course.image}
                  alt={`${course.title} at Ashu Yoga Studio`}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                    {course.title}
                  </h3>
                  <p className="text-white/90 mt-1">
                    Level: {course.level}
                  </p>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Duration:</span><br />
                      {course.duration}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Module:</span><br />
                      {course.module}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Certification:</span><br />
                      {course.certification}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gray-800">Dates:</span><br />
                      {course.dates}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Private Room</p>
                      <p className="text-lg font-bold text-primary">USD {course.pricing.private}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Shared Room</p>
                      <p className="text-lg font-bold text-primary">USD {course.pricing.shared}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link
                      href={`/courses/${course.id}`}
                      className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      Course Details
                    </Link>
                    <Link
                      href="/book-now"
                      className="flex-1 bg-primary text-white hover:bg-primary/90 py-2 px-4 rounded-lg text-center transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Offer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Special Discount for Indian Students
          </h3>
          <p className="text-gray-600 mb-4">
            Contact us to learn about exclusive pricing for Indian nationals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get in Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 