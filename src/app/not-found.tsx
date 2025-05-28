'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Logo Header */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative w-16 h-16 mr-3">
          <Image
            src="/images/yogabrandlogo1.png"
            alt="Ashu Yoga Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        <h1 className="text-3xl font-bold text-rose-800">Ashu Yoga</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-8">
        {/* Illustration */}
        <div className="relative w-full h-64 mx-auto mb-8">
          <Image
            src="/images/notfound1.jpg"
            alt="Yoga Pose Illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Oops, Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8">
          The page you're looking for might have been moved, renamed, or might never have existed.
          Let's guide you back to your practice.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-block text-white bg-gradient-to-r from-amber-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-full text-sm px-8 py-3 text-center transition-all duration-300 transform hover:scale-105"
        >
          Return to Serenity
        </Link>
      </div>

      {/* Footer Note */}
      <p className="mt-8 text-gray-500">
        Breathe deeply. This too shall pass.
      </p>
    </main>
  );
}