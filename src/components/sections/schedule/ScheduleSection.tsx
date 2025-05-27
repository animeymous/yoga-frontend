import TopSection from '@/components/common/top-section/TopSection';

export default function ScheduleSection() {
  const scheduleData = [
    ['Monday', '7:00 AM', 'Morning Flow', 'Asha'],
    ['Monday', '12:00 PM', 'Midday Reset', 'Daniel'],
    ['Monday', '6:00 PM', 'Hatha Foundations', 'Lila'],

    ['Tuesday', '6:30 AM', 'Power Yoga', 'Daniel'],
    ['Tuesday', '10:00 AM', 'Chair Yoga (Seniors)', 'Asha'],
    ['Tuesday', '6:00 PM', 'Power Vinyasa', 'Daniel'],
    ['Tuesday', '7:30 PM', 'Guided Meditation', 'Lila'],

    ['Wednesday', '8:00 AM', 'Yin Yoga', 'Lila'],
    ['Wednesday', '1:00 PM', 'Gentle Flow', 'Asha'],
    ['Wednesday', '6:30 PM', 'Deep Stretch & Restore', 'Lila'],
  ];

  return (
    <>
      <TopSection
        url="/images/schedule5.jpg"
        heading1="Class Schedule"
        heading2="Plan your week with ease and consistency."
      />

      <section className="py-20 px-6 bg-white max-w-5xl mx-auto">
        <div className="overflow-x-auto rounded-lg shadow">
          <table className="w-full border text-left text-sm min-w-[600px]">
            <thead className="bg-stone-200 text-gray-700">
              <tr>
                <th className="p-3">Day</th>
                <th className="p-3">Time</th>
                <th className="p-3">Class</th>
                <th className="p-3">Instructor</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map(([day, time, cls, instructor], i) => (
                <tr key={i} className="border-b hover:bg-stone-50">
                  <td className="p-3 font-medium whitespace-nowrap">{day}</td>
                  <td className="p-3 whitespace-nowrap">{time}</td>
                  <td className="p-3">{cls}</td>
                  <td className="p-3">{instructor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
