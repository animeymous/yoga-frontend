'use client';

import { LazyMotion, domAnimation, m } from 'framer-motion';

const MotionWrapper = ({ children }: { children: React.ReactNode }) => (
  <LazyMotion features={domAnimation}>
    {children}
  </LazyMotion>
);

export const MotionDiv = m.div;
export const MotionH1 = m.h1;
export const MotionP = m.p;
export default MotionWrapper; 