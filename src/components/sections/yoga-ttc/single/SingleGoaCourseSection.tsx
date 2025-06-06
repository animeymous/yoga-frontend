'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CourseDetail } from '@/types/course';
import { CalendarDays, Clock, Award, Globe2, MapPin, Users, Sun, Waves, Wind } from 'lucide-react';

interface Props {
  course: CourseDetail;
}

export default function SingleGoaCourseSection({ course }: Props) {
  return (
    <article className="bg-gradient-to-b from-blue-50 via-white to-amber-50" itemScope itemType="https://schema.org/Course">
      {/* Hero Section with Wave Effect */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={course.heroImage}
            alt={course.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/30 to-transparent" />
          {/* Decorative Wave Pattern */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg className="w-full h-24 text-blue-50 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
            </svg>
          </div>
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full text-white mb-6">
              {course.location}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6" itemProp="name">
              {course.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8" itemProp="description">
              {course.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#details"
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
              >
                Course Details
              </Link>
              <Link
                href="/book-now"
                className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info with Beach Theme */}
      <section className="relative z-10 -mt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Sun className="w-8 h-8" />, label: "Duration", value: course.duration },
              { icon: <CalendarDays className="w-8 h-8" />, label: "Next Batch", value: course.nextBatch },
              { icon: <Waves className="w-8 h-8" />, label: "Beach Distance", value: "2 minutes" }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/95 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-blue-100"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-500">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-medium text-gray-800">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview with Beach Vibes */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('/images/shell-pattern.png')] opacity-5" />
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed">{course.overview}</p>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {course.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Us - Goa Style */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Our Goa Program</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Beachfront Location",
                    description: "Practice yoga by the Arabian Sea, where the sound of waves creates the perfect meditation backdrop.",
                    icon: "🏖️"
                  },
                  {
                    title: "Bohemian Spirit",
                    description: "Experience Goa's unique blend of Indian spirituality and laid-back beach culture.",
                    icon: "🌅"
                  },
                  {
                    title: "Diverse Community",
                    description: "Join a vibrant international community of yogis in India's most cosmopolitan beach destination.",
                    icon: "🌏"
                  },
                  {
                    title: "Sunset Sessions",
                    description: "Special yoga and meditation sessions during Goa's famous sunsets on the beach.",
                    icon: "🌊"
                  },
                  {
                    title: "Wellness Integration",
                    description: "Access to beach sports, water activities, and holistic healing practices.",
                    icon: "🧘‍♀️"
                  },
                  {
                    title: "Local Experiences",
                    description: "Immerse in Goan culture through local markets, cuisine, and music scenes.",
                    icon: "🎵"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100/50"
                  >
                    <div className="text-4xl" role="img" aria-label={item.title}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Curriculum with Beach Elements */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Course Curriculum</h2>
              <div className="space-y-6">
                {course.curriculum.map((section, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-50 to-amber-50/50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {section.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Daily Schedule with Beach Theme */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-[url('/images/wave-pattern.png')] opacity-5" />
              <div className="relative p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Daily Schedule</h2>
                <div className="space-y-4">
                  {course.schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 bg-gradient-to-r from-blue-50 to-amber-50/50 p-4 rounded-lg"
                    >
                      <span className="font-semibold text-blue-600 min-w-[140px]">{item.time}</span>
                      <span className="text-gray-700">{item.activity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">Beach Retreat Investment</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-gray-600">Private Room</p>
                    <p className="text-3xl font-bold text-blue-500">USD {course.pricing.private}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="text-sm text-gray-600">Shared Room</p>
                    <p className="text-3xl font-bold text-blue-500">USD {course.pricing.shared}</p>
                  </div>
                  <Link
                    href="/book-now"
                    className="block w-full bg-blue-500 text-white text-center py-3 rounded-xl mt-6 hover:bg-blue-600 transition-colors"
                  >
                    Begin Your Journey
                  </Link>
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">What's Included</h3>
                <div className="grid gap-3">
                  {course.included.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{course.accommodation.title}</h2>
                <p className="text-gray-600 mb-6">{course.accommodation.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.accommodation.amenities.map((amenity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{amenity}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 p-2">
                {course.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image
                      src={image}
                      alt={`${course.accommodation.title} image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Prerequisites */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Prerequisites</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.prerequisites.map((prerequisite, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl border border-blue-100"
                >
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{prerequisite}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </article>
  );
} 