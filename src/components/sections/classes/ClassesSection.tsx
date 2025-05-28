'use client';

import TopSection from '@/components/common/top-section/TopSection';
import { motion } from 'framer-motion';

const classes = [
  {
    title: 'Morning Flow',
    desc: 'Start your day with gentle sun salutations, guided breathwork, and intentional movement to awaken the body.',
    image: '/images/home1.jpg',
  },
  {
    title: 'Power Vinyasa',
    desc: 'A dynamic, high-energy sequence combining strength, balance, and endurance. Ideal for those who want a workout with breath-based flow.',
    image: '/images/home2.jpg',
  },
  {
    title: 'Yin Yoga',
    desc: 'Hold deep stretches for longer periods to release fascia and tension while cultivating mindfulness and stillness.',
    image: '/images/home3.jpg',
  },
  {
    title: 'Restorative Yoga',
    desc: 'A deeply relaxing class using props and long-held poses to calm the nervous system and promote healing.',
    image: '/images/home3.jpg',
  },
  {
    title: 'Hatha Yoga',
    desc: 'Traditional yoga practice that blends postures, pranayama, and meditation. A great class for beginners and all levels.',
    image: '/images/home2.jpg',
  },
  {
    title: 'Prenatal Yoga',
    desc: 'Support your pregnancy journey with gentle movement, breathwork, and positions that aid in labor preparation.',
    image: '/images/home1.jpg',
  },
  {
    title: 'Chair Yoga',
    desc: 'Perfect for seniors or anyone with limited mobility. Focuses on seated and standing poses using the support of a chair.',
    image: '/images/home3.jpg',
  },
  {
    title: 'Inversion Play',
    desc: 'A fun and empowering class that breaks down handstands, headstands, and arm balances safely and progressively.',
    image: '/images/home2.jpg',
  },
  {
    title: 'Sound Bath & Meditation',
    desc: 'A guided meditation and vibrational healing experience using gongs, bowls, and gentle breathwork.',
    image: '/images/home1.jpg',
  },
  {
    title: 'Kundalini Yoga',
    desc: 'Awaken your inner energy with dynamic movements, chanting, breathwork, and meditation for deep transformation.',
    image: '/images/home3.jpg',
  },
  {
    title: 'Kids Yoga',
    desc: 'A playful, creative class that introduces breath, movement, and mindfulness for children ages 5–12.',
    image: '/images/home1.jpg',
  },
  {
    title: 'Vinyasa Foundations',
    desc: 'Great for beginners. Break down key poses and transitions with an emphasis on safe alignment and breath control.',
    image: '/images/home2.jpg',
  },
];

const cardVariants = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.25)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const titleVariants = {
  rest: { color: "#2563eb" /* Tailwind primary blue-600 */, transition: { duration: 0.3 } },
  hover: { color: "#1e40af" /* Tailwind primary blue-800 */, transition: { duration: 0.3 } },
};

export default function ClassesSection() {
  return (
    <>
      <TopSection
        url="/images/classes5.jpg"
        heading1="Our Yoga Classes"
        heading2="Find the right practice for your body and soul."
      />

      <main className="bg-gray-100">
        <section
          aria-labelledby="about-classes-title"
          className="bg-white py-16 px-6 max-w-4xl mx-auto text-center"
        >
          <h2
            id="about-classes-title"
            className="text-3xl font-bold mb-4 text-gray-900"
          >
            About Our Yoga Classes
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Our diverse selection of yoga classes at Ashu Yoga Studio is designed to meet you wherever you are on your wellness journey.
            From energizing flows and strength-building sequences to deep relaxation and meditation, our classes accommodate all ages,
            abilities, and experience levels. Each session is thoughtfully curated to support physical vitality, mental calmness,
            and spiritual growth — creating a balanced practice that nurtures your whole self.
          </p>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mt-4 leading-relaxed">
            Whether you're looking to build strength, increase flexibility, relieve stress, or simply find a moment of mindful peace,
            you’ll find a welcoming class tailored for your goals and lifestyle.
          </p>
        </section>

        <section
          aria-labelledby="class-grid-title"
          className="bg-gray-100 py-20 px-4 md:px-6 max-w-7xl mx-auto"
        >
          <h2 id="class-grid-title" className="sr-only">
            Yoga Class Options
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {classes.map((cls, i) => (
              <motion.article
                key={i}
                role="region"
                aria-label={cls.title}
                className="bg-stone-100 rounded-xl overflow-hidden cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={cardVariants}
              >
                <img
                  src={cls.image}
                  alt={`Illustration for ${cls.title}`}
                  className="w-full h-100 object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-primary"
                    variants={titleVariants}
                  >
                    {cls.title}
                  </motion.h3>
                  <p className="text-gray-600 text-sm">{cls.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}