'use client';

import Link from 'next/link';

export default function HomeSection() {
  return (
    <section className="bg-stone-100 text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-[90vh] bg-gradient-to-br from-stone-100 via-white to-stone-200 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow">
            Welcome to <span className="text-primary">Ashu Yoga</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Embrace tranquility, find your center, and begin your journey to inner peace with us.
          </p>
          <div className="mt-8">
            <Link
              href="/classes"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition"
            >
              Explore Classes
            </Link>
          </div>
        </div>
      </div>

      {/* About Snippet */}
      <div className="py-16 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Why Ashu Yoga?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          We blend traditional techniques with modern mindfulness to offer a sanctuary for your body and soul.
        </p>
      </div>

      {/* Featured Classes */}
      <div className="py-16 bg-white px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold">Featured Classes</h3>
          <p className="mt-2 text-gray-600">Find the class that fits your lifestyle.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Morning Flow', desc: 'Start your day with gentle stretches.', img: '/images/home1.jpg' },
            { title: 'Power Yoga', desc: 'High energy vinyasa to strengthen & detox.', img: '/images/home2.jpg' },
            { title: 'Yin & Restore', desc: 'Slow-paced deep stretching and relaxation.', img: '/images/home3.jpg' },
          ].map((cls, i) => (
            <div key={i} className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
              <img src={cls.img} alt={cls.title} className="w-full h-120 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{cls.title}</h4>
                <p className="text-gray-600 text-sm">{cls.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-stone-200 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-10">What Our Students Say</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto text-left">
          {[
            {
              quote: "Yoga Bliss has transformed how I manage stress and live mindfully. Highly recommend!",
              name: 'Anjali R.',
            },
            {
              quote: "Their instructors are truly world-class and the community is warm and welcoming.",
              name: 'Michael D.',
            },
            {
              quote: "Each session is a mini-retreat. It’s the best part of my week!",
              name: 'Sophie K.',
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 font-medium text-primary">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-900 text-white text-center px-6">
        <h3 className="text-3xl font-bold">Ready to begin your yoga journey?</h3>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Sign up for a free trial class and discover the Yoga Bliss experience today.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Book a Free Class
        </Link>
      </div>
    </section>
  );
}
