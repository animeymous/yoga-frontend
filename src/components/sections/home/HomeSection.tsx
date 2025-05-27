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

      {/* Benefits Section */}
      <div className="py-16 bg-white px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold">Benefits of Practicing Yoga</h3>
        </div>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-left">
          {[
            {
              title: 'Improve Flexibility',
              desc: 'Regular yoga helps increase range of motion, reduce stiffness, and support joint health.',
              icon: '🧘‍♀️',
            },
            {
              title: 'Reduce Stress & Anxiety',
              desc: 'Breathing techniques and mindfulness reduce stress levels and improve mental clarity.',
              icon: '🧠',
            },
            {
              title: 'Boost Strength & Posture',
              desc: 'Strengthen core muscles and correct postural habits for a healthier body.',
              icon: '💪',
            },
          ].map((b, i) => (
            <div key={i} className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{b.title}</h4>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
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
              <img src={cls.img} alt={cls.title} className="w-full h-100 object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{cls.title}</h4>
                <p className="text-gray-600 text-sm">{cls.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor Snippet */}
      <div className="py-16 text-center bg-stone-200 px-6">
        <h3 className="text-3xl font-bold mb-6">Meet Our Instructors</h3>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          Our certified teachers bring years of experience and compassion to every class, guiding you with care and knowledge.
        </p>
        <Link
          href="/team"
          className="inline-block text-primary font-semibold hover:underline text-lg"
        >
          Meet the Team →
        </Link>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white px-6 text-center">
        <h3 className="text-3xl font-semibold mb-10">What Our Students Say</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto text-left">
          {[
            {
              quote: "Ashu Yoga has helped me reconnect with myself and grow mentally and physically.",
              name: 'Anjali R.',
            },
            {
              quote: "I feel more balanced and focused. The teachers truly care about your journey.",
              name: 'Michael D.',
            },
            {
              quote: "Every session feels like coming home to peace. Highly recommend!",
              name: 'Sophie K.',
            },
          ].map((t, i) => (
            <div key={i} className="bg-stone-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <p className="mt-4 font-medium text-primary">{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Yoga Philosophy */}
      <div className="py-16 bg-white px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Our Yoga Philosophy</h3>
          <p className="text-gray-600 text-lg">
            At Ashu Yoga, we believe that yoga is more than movement — it is a path to awareness, balance, and transformation. 
            Our practice is rooted in authenticity, mindfulness, and deep respect for ancient traditions.
          </p>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16 bg-stone-200 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Upcoming Events & Retreats</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: 'Sunrise Beach Yoga',
              date: 'June 15, 2025',
              desc: 'Join us for a peaceful morning session by the ocean.',
            },
            {
              title: 'Weekend Wellness Retreat',
              date: 'July 20–22, 2025',
              desc: 'Disconnect to reconnect — a 3-day immersive experience in nature.',
            },
            {
              title: 'Full Moon Meditation',
              date: 'August 1, 2025',
              desc: 'A moonlit group practice under the stars, in harmony with nature’s cycles.',
            },
          ].map((event, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md text-left">
              <h4 className="text-xl font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-600">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-16 bg-white px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Stay Connected</h3>
          <p className="text-gray-600 mb-6">Sign up for our newsletter to receive yoga tips, upcoming events, and special offers.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Instagram Gallery Preview */}
      <div className="py-16 bg-stone-100 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Follow Us on Instagram</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <img
                src={`/images/instagram${i}.jpg`}
                alt={`Instagram photo ${i}`}
                className="rounded-lg w-full h-40 object-cover shadow-sm hover:shadow-lg transition"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Our Partners */}
      <div className="py-16 bg-white px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Our Trusted Partners</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {['lululemon', 'manduka', 'calm', 'headspace'].map((brand, i) => (
            <img
              key={i}
              src={`/images/partner${i+1}.jpg`}
              alt={brand}
              className="h-40 opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>

      {/* FAQ Snippet */}
      <div className="py-16 bg-stone-100 text-center px-6">
        <h3 className="text-3xl font-semibold mb-6">FAQs</h3>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div>
            <h4 className="text-lg font-medium text-primary">Do I need experience to join?</h4>
            <p className="text-gray-600">Not at all! We welcome all levels, from complete beginners to experienced yogis.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-primary">What should I bring?</h4>
            <p className="text-gray-600">A yoga mat, water bottle, and comfortable clothing. Mats are also available in the studio.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-primary">Are online classes available?</h4>
            <p className="text-gray-600">Yes, many classes are available both in-studio and online for flexibility.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gray-900 text-white text-center px-6">
        <h3 className="text-3xl font-bold">Ready to begin your yoga journey?</h3>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Sign up for a free trial class and discover the Ashu Yoga experience today.
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
