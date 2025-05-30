"use client";

import { CourseInfo } from '@/types/chat';
import { Download, Calendar, MapPin, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';

interface CourseCardProps {
  course: CourseInfo;
  onEnquire: (courseId: string) => void;
}

export const CourseCard = ({ course, onEnquire }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full hover:shadow-lg transition-shadow"
      style={{ fontFamily: theme.fonts.body }}
    >
      <h3 
        className="font-semibold text-lg mb-2 text-[#2C3639]"
        style={{ fontFamily: theme.fonts.heading }}
      >
        {course.title}
      </h3>
      
      <div className="space-y-2 text-sm text-[#5C6B73] mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#7C9070]" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#D48166]" />
          <span>{course.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-[#E6B325]" />
          <span>${course.price} USD</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onEnquire(course.id)}
          className="flex-1 bg-[#7C9070] text-white px-4 py-2 rounded-md hover:bg-[#7C9070]/90 transition-colors text-sm"
        >
          Enquire Now
        </button>
        <a
          href={course.brochureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-[#7C9070] hover:bg-[#7C9070]/10 rounded-md transition-colors"
          title="Download Brochure"
        >
          <Download className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
}; 