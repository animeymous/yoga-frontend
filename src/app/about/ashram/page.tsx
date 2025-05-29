'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function AshramPage() {
  return (
    <article className="bg-gradient-to-b from-stone-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/yoga7.jpg"
          alt="Ashu Yoga Ashram"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Welcome to Ashu Yoga Ashram
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              A sacred space for transformation, learning, and spiritual growth
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/yoga2.jpg"
                alt="Yoga practice at Ashu Yoga Ashram"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Sacred Space</h2>
              <p className="text-gray-600 mb-4">
                Ashu Yoga Ashram is more than just a yoga school – it's a sanctuary where ancient wisdom meets modern understanding. 
                Nestled in a serene environment, our ashram provides the perfect setting for deep spiritual practice and authentic yoga training.
              </p>
              <p className="text-gray-600">
                We maintain the traditional guru-shishya (teacher-student) relationship while incorporating contemporary teaching methodologies 
                to make the ancient science of yoga accessible to modern practitioners.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Authenticity",
                description: "Preserving and teaching authentic yogic traditions passed down through generations.",
                icon: "🕉️"
              },
              {
                title: "Transformation",
                description: "Facilitating personal growth and spiritual transformation through dedicated practice.",
                icon: "✨"
              },
              {
                title: "Community",
                description: "Creating a supportive environment for practitioners to learn and grow together.",
                icon: "🤝"
              },
              {
                title: "Knowledge",
                description: "Sharing deep insights into yoga philosophy, anatomy, and practical applications.",
                icon: "📚"
              },
              {
                title: "Guidance",
                description: "Providing personalized attention and guidance on your yogic journey.",
                icon: "🧘‍♀️"
              },
              {
                title: "Integration",
                description: "Helping students integrate yogic principles into modern daily life.",
                icon: "🌟"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4" role="img" aria-label={value.title}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-stone-100 to-stone-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-gray-600 mb-8">
                To preserve and share the authentic teachings of yoga while making them accessible and relevant 
                to modern practitioners. We strive to create an environment where students can experience deep 
                transformation and discover their true potential through the practice of yoga.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { number: "15+", label: "Years of Teaching" },
                  { number: "1000+", label: "Certified Teachers" },
                  { number: "50+", label: "Countries Reached" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                    className="text-center"
                  >
                    <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Teachers Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Teachers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Yogi Ashutosh",
                role: "Founder & Lead Teacher",
                image: "/images/yoga3.jpg",
                expertise: "Hatha Yoga, Philosophy"
              },
              {
                name: "Dr. Priya Sharma",
                role: "Anatomy & Physiology",
                image: "/images/yoga4.jpg",
                expertise: "Yoga Therapy, Anatomy"
              },
              {
                name: "Guru Ramesh",
                role: "Meditation Guide",
                image: "/images/yoga5.jpg",
                expertise: "Meditation, Pranayama"
              }
            ].map((teacher, index) => (
              <motion.div
                key={teacher.name}
                variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-gray-900">{teacher.name}</h3>
                  <p className="text-primary font-medium mb-2">{teacher.role}</p>
                  <p className="text-gray-600">{teacher.expertise}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </article>
  );
} 