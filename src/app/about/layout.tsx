import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s - Ashu Yoga Ashram',
    default: 'About - Ashu Yoga Ashram',
  },
  description: 'Learn about our authentic yoga ashram, facilities, courses, and spiritual practices.',
  keywords: 'yoga ashram, yoga training, spiritual sanctuary, yoga courses, meditation center',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 