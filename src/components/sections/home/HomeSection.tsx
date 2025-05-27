'use client';

export default function HomeSection() {
  return (
    <section className="relative w-full h-[90vh] bg-gradient-to-br from-stone-100 via-white to-stone-200 flex items-center justify-center text-center overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow">
          Welcome to <span className="text-primary">Ashu Yoga</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
          Embrace tranquility, find your center, and begin your journey to inner peace with us.
        </p>
        <div className="mt-8">
          <a
            href="/classes"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition"
          >
            Explore Classes
          </a>
        </div>
      </div>
    </section>
  );
}
