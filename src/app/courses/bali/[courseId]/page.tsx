'use client';

import { useParams } from 'next/navigation';
import SingleBaliCourseSection from '@/components/sections/yoga-ttc/single/SingleBaliCourseSection';
import { baliCourseData } from '@/data/baliCourseData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export default function BaliCoursePage() {
  const params = useParams();
  const courseId = Number(params.courseId);
  
  const course = baliCourseData.find(course => course.id === courseId);
  
  if (!course) {
    notFound();
  }

  return <SingleBaliCourseSection course={course} />;
} 