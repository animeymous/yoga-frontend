'use client';

import { useParams } from 'next/navigation';
import SingleGoaCourseSection from '@/components/sections/yoga-ttc/single/SingleGoaCourseSection';
import { courseData } from '@/data/courseData';
import { notFound } from 'next/navigation';

export default function GoaCoursePage() {
  const params = useParams();
  const courseId = Number(params.courseId);
  
  const course = courseData.find(course => course.id === courseId);
  
  if (!course) {
    notFound();
  }

  return <SingleGoaCourseSection course={course} />;
} 