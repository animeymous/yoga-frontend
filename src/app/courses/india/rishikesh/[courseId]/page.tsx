'use client';

import { useParams } from 'next/navigation';
import SingleRishikeshCourseSection from '@/components/sections/yoga-ttc/single/SingleRishikeshCourseSection';
import { courseData } from '@/data/courseData';
import { notFound } from 'next/navigation';

export default function RishikeshCoursePage() {
  const params = useParams();
  const courseId = Number(params.courseId);
  
  const course = courseData.find(course => course.id === courseId);
  
  if (!course) {
    notFound();
  }

  return <SingleRishikeshCourseSection course={course} />;
} 