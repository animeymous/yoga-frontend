'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/utils/motion';

export default function FacilitiesPage() {
  return (
    <article className="bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/yoga6.jpg"
          alt="Accommodation at Ashu Yoga Ashram"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Food & Accommodation
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90"
            >
              Experience peaceful living with nourishing sattvic meals
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Accommodation Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Comfortable Stay</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Room Types</h3>
                <div className="space-y-4">
                  {[
                    {
                      type: "Private Rooms",
                      features: ["En-suite bathroom", "Study desk", "Wardrobe", "Daily housekeeping"]
                    },
                    {
                      type: "Shared Rooms",
                      features: ["2-3 persons per room", "Shared bathroom", "Personal lockers", "Common study area"]
                    },
                    {
                      type: "Dormitory",
                      features: ["Budget-friendly option", "Shared facilities", "Community living", "Secure storage"]
                    }
                  ].map((room) => (
                    <div key={room.type} className="bg-stone-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2 text-gray-900">{room.type}</h4>
                      <ul className="space-y-2">
                        {room.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-gray-600">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/yoga1.jpg"
                    alt="Private Room"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/yoga2.jpg"
                    alt="Shared Room"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/yoga3.jpg"
                    alt="Dormitory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/images/yoga4.jpg"
                    alt="Common Area"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Food Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-amber-50 to-stone-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Sattvic Food</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
                <p className="text-gray-600 mb-6">
                  Our kitchen serves fresh, nutritious, and balanced vegetarian meals prepared according to yogic principles. 
                  All meals are cooked with love and mindfulness to support your practice and well-being.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      meal: "Breakfast (8:00 AM)",
                      items: ["Fresh fruits", "Porridge", "Herbal tea", "Nuts and seeds"]
                    },
                    {
                      meal: "Lunch (12:30 PM)",
                      items: ["Rice", "Dal", "Seasonal vegetables", "Salad", "Yogurt"]
                    },
                    {
                      meal: "Dinner (7:00 PM)",
                      items: ["Soup", "Whole grain bread", "Steamed vegetables", "Herbal tea"]
                    }
                  ].map((meal) => (
                    <div key={meal.meal} className="bg-white rounded-lg p-4 shadow-sm">
                      <h4 className="font-medium mb-2 text-gray-900">{meal.meal}</h4>
                      <div className="flex flex-wrap gap-2">
                        {meal.items.map((item) => (
                          <span key={item} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
                <div className="relative h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/images/yoga5.jpg"
                    alt="Sattvic Food"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Amenities Section */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Additional Amenities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Wi-Fi",
                description: "High-speed internet in common areas",
                icon: "📡"
              },
              {
                title: "Library",
                description: "Extensive collection of yoga and spiritual books",
                icon: "📚"
              },
              {
                title: "Garden",
                description: "Peaceful garden for meditation and relaxation",
                icon: "🌿"
              },
              {
                title: "Laundry",
                description: "Washing machines and drying area available",
                icon: "👕"
              },
              {
                title: "Security",
                description: "24/7 security and CCTV surveillance",
                icon: "🔒"
              },
              {
                title: "Medical Care",
                description: "First aid and nearby medical facilities",
                icon: "⚕️"
              }
            ].map((amenity, index) => (
              <motion.div
                key={amenity.title}
                variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4" role="img" aria-label={amenity.title}>
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </article>
  );
} 