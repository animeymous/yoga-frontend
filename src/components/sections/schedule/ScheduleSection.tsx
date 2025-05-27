// app/schedule/page.tsx

import TopSection from '@/components/common/top-section/TopSection';

export default function ScheduleSection() {
  return (
    <>
      <TopSection
        url="/images/schedule-hero.jpg"
        heading1="Class Schedule"
        heading2="Plan your week with ease and consistency."
      />

      <section className="py-20 px-6 bg-white max-w-4xl mx-auto">
        <table className="w-full border text-left text-sm">
          <thead className="bg-stone-200 text-gray-700">
            <tr>
              <th className="p-3">Day</th>
              <th className="p-3">Time</th>
              <th className="p-3">Class</th>
              <th className="p-3">Instructor</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Monday', '7:00 AM', 'Morning Flow', 'Asha'],
              ['Tuesday', '6:00 PM', 'Power Vinyasa', 'Daniel'],
              ['Wednesday', '8:00 AM', 'Yin Yoga', 'Lila'],
              ['Thursday', '6:30 PM', 'Hatha Basics', 'Asha'],
              ['Friday', '5:00 PM', 'Restorative Yoga', 'Daniel'],
              ['Saturday', '9:00 AM', 'All Levels Flow', 'Lila'],
            ].map(([day, time, cls, instructor], i) => (
              <tr key={i} className="border-b hover:bg-stone-50">
                <td className="p-3 font-medium">{day}</td>
                <td className="p-3">{time}</td>
                <td className="p-3">{cls}</td>
                <td className="p-3">{instructor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
