'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CourseDetail } from '@/types/course';

interface Props {
  course: CourseDetail;
}

export default function SingleYogaTeacherTrainingSection({ course }: Props) {
  return (
    <article className="bg-white" itemScope itemType="https://schema.org/Course">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={course.heroImage}
          alt={course.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              itemProp="name"
            >
              {course.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
              itemProp="description"
            >
              {course.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-6 sm:py-8 bg-stone-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {[
              { label: "Duration", value: course.duration },
              { label: "Next Batch", value: course.nextBatch },
              { label: "Level", value: course.level },
              { label: "Style", value: course.style },
              { label: "Certification", value: course.certification },
              { label: "Language", value: course.language },
              { label: "Location", value: course.location },
              { label: "Starting From", value: `USD ${course.pricing.shared}` }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-2 sm:p-3"
              >
                <p className="text-xs sm:text-sm text-gray-600">{item.label}</p>
                <p className="text-sm sm:text-base font-semibold text-gray-900">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-8 sm:py-12">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8 sm:space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="prose max-w-none"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Course Overview</h2>
              <p className="text-sm sm:text-base text-gray-600">{course.overview}</p>
              
              <h3 className="text-lg sm:text-xl font-semibold mt-6 mb-4">Course Highlights</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base">
                {course.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Curriculum */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="space-y-6">
                {course.curriculum.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-md p-6"
                  >
                    <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Daily Schedule */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Daily Schedule</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto -mx-3 sm:mx-0">
                  <table className="min-w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                        <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {course.schedule.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 sm:px-6 py-3 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">{item.time}</td>
                          <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-600">{item.activity}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4">Course Fee</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Private Room</p>
                    <p className="text-xl sm:text-2xl font-bold text-primary">USD {course.pricing.private}</p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Shared Room</p>
                    <p className="text-xl sm:text-2xl font-bold text-primary">USD {course.pricing.shared}</p>
                  </div>
                  <Link
                    href="/book-now"
                    className="block w-full bg-primary text-white text-center py-2 sm:py-3 rounded-lg mt-6 hover:bg-primary/90 transition-colors text-sm sm:text-base"
                  >
                    Book Now
                  </Link>
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-4 sm:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-4">What's Included</h3>
                <ul className="space-y-3 text-sm sm:text-base">
                  {course.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Prerequisites */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                <ul className="space-y-3">
                  {course.prerequisites.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-8 sm:mt-12"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6">{course.accommodation.title}</h2>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">{course.accommodation.description}</p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 text-sm sm:text-base">
                {course.accommodation.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {course.gallery.slice(0, 4).map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Accommodation and facilities image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
} 