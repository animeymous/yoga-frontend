'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CourseDetail } from '@/types/course';
import { CalendarDays, Clock, Award, Globe2, MapPin, Users } from 'lucide-react';

interface Props {
  course: CourseDetail;
}

export default function SingleBaliCourseSection({ course }: Props) {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white" itemScope itemType="https://schema.org/Course">
      {/* Hero Section with Parallax Effect */}
      <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={course.heroImage}
            alt={course.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-full flex flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto"
        >
          <span className="text-white/90 mb-4 inline-block px-4 py-1 bg-primary/20 backdrop-blur-sm rounded-full">
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
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Course Details
            </Link>
            <Link
              href="/book-now"
              className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Info Cards */}
      <section className="relative z-10 px-4 -mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Clock className="w-6 h-6" />, label: "Duration", value: course.duration },
              { icon: <CalendarDays className="w-6 h-6" />, label: "Next Batch", value: course.nextBatch },
              { icon: <Award className="w-6 h-6" />, label: "Certification", value: course.certification },
              { icon: <Users className="w-6 h-6" />, label: "Level", value: course.level },
              { icon: <Globe2 className="w-6 h-6" />, label: "Language", value: course.language },
              { icon: <MapPin className="w-6 h-6" />, label: "Location", value: course.location }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <p className="text-sm text-gray-600">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
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
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Course Overview</h2>
              <p className="text-gray-600 leading-relaxed">{course.overview}</p>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {course.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3 bg-stone-50 p-4 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Why Choose Us */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose Our Bali Program</h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Paradise Location",
                    description: "Practice yoga in a tropical paradise surrounded by lush rice terraces, pristine beaches, and Balinese spiritual energy.",
                    icon: "🌴"
                  },
                  {
                    title: "Cultural Immersion",
                    description: "Experience authentic Balinese culture, traditional ceremonies, and local wisdom while deepening your yoga practice.",
                    icon: "🏺"
                  },
                  {
                    title: "Expert International Faculty",
                    description: "Learn from highly experienced international yoga teachers who blend modern teaching methods with traditional wisdom.",
                    icon: "👨‍🏫"
                  },
                  {
                    title: "Holistic Approach",
                    description: "Our program integrates physical practice, meditation, philosophy, and healing arts in a balanced curriculum.",
                    icon: "🧘‍♀️"
                  },
                  {
                    title: "Modern Facilities",
                    description: "Train in our state-of-the-art yoga shalas with ocean views, equipped with all necessary props and amenities.",
                    icon: "🏢"
                  },
                  {
                    title: "Small Group Size",
                    description: "We maintain intimate class sizes to ensure personalized attention and optimal learning environment.",
                    icon: "👥"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 bg-stone-50 p-6 rounded-xl"
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

            {/* Curriculum */}
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
                    className="bg-stone-50 rounded-xl p-6"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{section.title}</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {section.topics.map((topic, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-700">
                          <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Daily Schedule with Tropical Theme */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden bg-white rounded-2xl shadow-lg"
            >
              <div className="absolute inset-0 bg-[url('/images/yoga7.jpg')] opacity-10" />
              <div className="relative p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Daily Schedule</h2>
                <div className="space-y-4">
                  {course.schedule.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg"
                    >
                      <span className="font-semibold text-primary min-w-[140px]">{item.time}</span>
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
                className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-lg p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">Investment</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600">Private Room</p>
                    <p className="text-3xl font-bold text-primary">USD {course.pricing.private}</p>
                  </div>
                  <div className="bg-white rounded-xl p-4">
                    <p className="text-sm text-gray-600">Shared Room</p>
                    <p className="text-3xl font-bold text-primary">USD {course.pricing.shared}</p>
                  </div>
                  <Link
                    href="/book-now"
                    className="block w-full bg-primary text-white text-center py-3 rounded-xl mt-6 hover:bg-primary/90 transition-colors"
                  >
                    Reserve Your Spot
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
                      className="flex items-start gap-3 bg-stone-50 p-3 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Prerequisites</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.prerequisites.map((prerequisite, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl"
                >
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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