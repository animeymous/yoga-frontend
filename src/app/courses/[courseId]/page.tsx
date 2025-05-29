'use client';

import { useParams } from 'next/navigation';
import SingleYogaTeacherTrainingSection from '@/components/sections/yoga-ttc/single/SingleYogaTeacherTrainingSection';
import { courseData } from '@/data/courseData';
import { notFound } from 'next/navigation';

export default function CoursePage() {
  const params = useParams();
  const courseId = Number(params.courseId);
  
  const course = courseData.find(course => course.id === courseId);
  
  if (!course) {
    notFound();
  }

  return <SingleYogaTeacherTrainingSection course={course} />;
} 