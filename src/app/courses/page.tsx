'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { courseData } from '@/data/courseData';

export default function CoursesPage() {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Yoga Teacher Training Courses
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your practice and become a certified yoga teacher with our comprehensive training programs.
            All courses are Yoga Alliance certified and taught by experienced instructors.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courseData.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={course.heroImage}
                  alt={course.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-bold text-white drop-shadow-lg">
                    {course.title}
                  </h2>
                  <p className="text-white/90 text-sm mt-1">
                    Level: {course.level}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div>
                    <p className="text-gray-600">Duration</p>
                    <p className="font-semibold">{course.duration}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Next Batch</p>
                    <p className="font-semibold">{course.nextBatch}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Starting From</p>
                    <p className="font-semibold text-primary">USD {course.pricing.shared}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Location</p>
                    <p className="font-semibold">{course.location}</p>
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 