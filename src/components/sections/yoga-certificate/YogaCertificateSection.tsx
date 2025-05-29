'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const certificates = [
  {
    id: 1,
    title: "Yoga Alliance Certified School",
    description: "Experience Excellence and transformation at our Yoga alliance accredited school in Rishikesh, India",
    image: "/images/IYA-Certificate.jpg",
  },
  {
    id: 2,
    title: "International Yoga Certification",
    description: "Trusted Yoga Alliance Registered School with global recognition",
    image: "/images/IYA-Certificate.jpg",
  },
  {
    id: 3,
    title: "Professional Yoga Training",
    description: "Join our comprehensive yoga teacher training program in the yoga capital of the world",
    image: "/images/IYA-Certificate.jpg",
  }
];

export default function YogaCertificateSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-stone-50 to-white" id="yoga-certification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Internationally Recognized Certification
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your passion for yoga into a rewarding career with our internationally recognized certification program.
          </p>
        </motion.div>

        {/* Career Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div className="space-y-6 order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Elevate Your Career in Yoga
            </h3>
            <div className="prose prose-lg prose-stone">
              <p>
                Our Yoga Alliance certified program opens doors to global opportunities in the growing wellness industry. 
                As a certified yoga instructor, you'll gain:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>International recognition and ability to teach worldwide</li>
                <li>Deep understanding of traditional yoga philosophy and modern teaching methodologies</li>
                <li>Business skills to establish and grow your yoga practice</li>
                <li>Access to our global network of yoga professionals</li>
                <li>Opportunity to make a positive impact on others' lives</li>
              </ul>
              <p className="text-gray-600">
                With the wellness industry projected to grow significantly, certified yoga instructors are in high demand 
                across studios, corporate settings, healthcare facilities, and private practice.
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block"
            >
              <Link
                href="/courses"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                Explore Our Courses
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl order-1 lg:order-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/yogaCertificate1.jpg"
              alt="Yoga instructor teaching a class in a professional setting"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Certificates Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={cert.image}
                  alt={`${cert.title} - Yoga certification`}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h4>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Start your journey towards becoming a certified yoga instructor today
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors font-medium"
          >
            Get Started Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 