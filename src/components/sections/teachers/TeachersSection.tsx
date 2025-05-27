// app/teachers/page.tsx

import TopSection from '@/components/common/top-section/TopSection';

export default function TeachersSection() {
  return (
    <>
      <TopSection
        url="/images/teachers-hero.jpg"
        heading1="Meet Our Teachers"
        heading2="Certified, experienced, and passionate guides."
      />

      <section className="py-20 bg-white px-6 max-w-6xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              name: 'Asha Mehta',
              bio: '20+ years of experience in Hatha and Ayurveda-based healing.',
              image: '/images/teacher1.jpg',
            },
            {
              name: 'Daniel Stone',
              bio: 'Power yoga expert focused on movement therapy.',
              image: '/images/teacher2.jpg',
            },
            {
              name: 'Lila Sharma',
              bio: 'Specialist in Yin Yoga and guided meditation.',
              image: '/images/teacher3.jpg',
            },
          ].map((t, i) => (
            <div key={i} className="bg-stone-100 rounded-lg shadow-md overflow-hidden">
              <img src={t.image} alt={t.name} className="w-full h-56 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-xl font-semibold">{t.name}</h4>
                <p className="text-gray-600 text-sm mt-2">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
