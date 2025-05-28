'use client';

import { motion } from 'framer-motion';
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

  // Variants for table rows
  const rowVariants = {
    rest: {
      scale: 1,
      backgroundColor: "#f8fafc", // Tailwind slate-50 / stone-50
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      scale: 1.02,
      backgroundColor: "#e0e7ff", // Tailwind indigo-100-ish
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  // Variants for cells that change color on hover
  const cellVariants = {
    rest: {
      color: "#374151", // Tailwind gray-700
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    hover: {
      color: "#4338ca", // Tailwind indigo-700
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <TopSection
        url="/images/schedule5.jpg"
        heading1="Class Schedule"
        heading2="Plan your week with ease and consistency."
      />

      <div className="bg-gray-100">
        <main>
          <section className="py-20 px-6 max-w-5xl mx-auto">
            <div className="overflow-x-auto rounded-lg shadow">
              <table className="w-full border text-left text-sm min-w-[600px] bg-stone-100">
                <caption className="sr-only">Weekly Yoga Class Schedule</caption>
                <thead className="bg-stone-300 text-gray-700">
                  <tr>
                    <th className="p-3">Day</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Class</th>
                    <th className="p-3">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map(([day, time, cls, instructor], i) => (
                    <motion.tr
                      key={i}
                      variants={rowVariants}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="border-b cursor-pointer"
                      tabIndex={0} // keyboard accessible row
                    >
                      <motion.td variants={cellVariants} className="p-3 font-medium whitespace-nowrap">{day}</motion.td>
                      <motion.td variants={cellVariants} className="p-3 whitespace-nowrap">{time}</motion.td>
                      <motion.td variants={cellVariants} className="p-3">{cls}</motion.td>
                      <motion.td variants={cellVariants} className="p-3">{instructor}</motion.td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}