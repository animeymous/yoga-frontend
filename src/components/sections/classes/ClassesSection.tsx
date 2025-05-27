import TopSection from '@/components/common/top-section/TopSection';

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

export default function ClassesSection() {
  return (
    <>
      <TopSection
        url="/images/classes5.jpg"
        heading1="Our Yoga Classes"
        heading2="Find the right practice for your body and soul."
      />

      <section className="py-20 bg-white px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <div
              key={i}
              className="bg-stone-100 rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-100 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {cls.title}
                </h3>
                <p className="text-gray-600 text-sm">{cls.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
