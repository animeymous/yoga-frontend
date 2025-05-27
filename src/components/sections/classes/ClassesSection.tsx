// app/classes/page.tsx

import TopSection from '@/components/common/top-section/TopSection';

export default function ClassesSection() {
  return (
    <>
      <TopSection
        url="/images/classes-hero.jpg"
        heading1="Our Yoga Classes"
        heading2="Find the right practice for your body and soul."
      />

      <section className="py-20 bg-white px-6 max-w-6xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Morning Flow',
              desc: 'Start your day with gentle sun salutations and breathwork.',
              image: '/images/class1.jpg',
            },
            {
              title: 'Power Vinyasa',
              desc: 'Dynamic, high-energy sequences to build strength and endurance.',
              image: '/images/class2.jpg',
            },
            {
              title: 'Yin Yoga',
              desc: 'Deep stretches and stillness to release tension and calm the mind.',
              image: '/images/class3.jpg',
            },
          ].map((cls, i) => (
            <div key={i} className="bg-stone-100 rounded-lg shadow overflow-hidden">
              <img src={cls.image} alt={cls.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                <p className="text-gray-600 text-sm">{cls.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
