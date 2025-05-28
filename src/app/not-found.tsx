'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl w-full">
        {/* Illustration */}
        <div className="relative w-full h-64 mx-auto mb-10">
          <Image
            src="/images/notfound1.jpg" // Replace with a gentle, themed yoga illustration
            alt="Yoga Pose Illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Oops, page not found
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          The page you're looking for might have been moved, renamed, or might never have existed.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block bg-primary text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
