'use client';

import Link from 'next/link';

export default function HomeSection() {
  return (
    <section className="bg-stone-100 text-gray-800" role="main">
      {/* Hero Section */}
      <header className="relative w-full h-[90vh] bg-gradient-to-br from-stone-100 via-white to-stone-200 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow">
            Welcome to <span className="text-primary">Ashu Yoga Studio</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto">
            Experience authentic <strong>yoga classes</strong> designed for your mental peace, body strength, and spiritual balance.
            Whether you're a beginner or advanced yogi, Ashu Yoga helps you find your inner center.
          </p>
          <div className="mt-8">
            <Link
              href="/classes"
              className="inline-block bg-primary text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium"
            >
              Explore Yoga Classes
            </Link>
          </div>
        </div>
      </header>

      {/* About Snippet */}
      <section className="py-16 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Why Choose Ashu Yoga?</h2>
        <p className="mt-4 text-gray-600 text-lg">
          At <strong>Ashu Yoga Studio</strong>, we blend ancient yogic wisdom with modern wellness practices to offer a nurturing
          sanctuary for your body, mind, and soul. Discover a lifestyle of mindfulness, strength, and serenity.
        </p>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold">Benefits of Practicing Yoga</h3>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Unlock holistic wellness and vitality through yoga. These core benefits support mental health, body flexibility,
            and emotional resilience.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto text-left">
          {[
            {
              title: 'Improve Flexibility',
              desc: 'Regular yoga practice improves range of motion, supports joint health, and reduces stiffness in daily life.',
              icon: '🧘‍♀️',
            },
            {
              title: 'Reduce Stress & Anxiety',
              desc: 'Breathing exercises and meditation techniques in yoga lower cortisol and enhance mental clarity and calm.',
              icon: '🧠',
            },
            {
              title: 'Boost Strength & Posture',
              desc: 'Yoga helps build core strength, tone muscles, and correct postural imbalances for long-term wellness.',
              icon: '💪',
            },
          ].map((b, i) => (
            <article key={i} className="bg-stone-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4" aria-hidden>{b.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{b.title}</h4>
              <p className="text-gray-600">{b.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Featured Classes */}
      <section className="py-16 pt-0 bg-white px-6" id="classes">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-semibold">Featured Yoga Classes</h3>
          <p className="mt-2 text-gray-600">
            Explore our most popular yoga sessions — crafted for energy, balance, and healing.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Morning Flow',
              desc: 'Begin your day with gentle sun salutations and energizing breathwork to awaken body and mind.',
              img: '/images/home1.jpg',
            },
            {
              title: 'Power Yoga',
              desc: 'Challenge yourself with this dynamic vinyasa practice that builds heat, endurance, and strength.',
              img: '/images/home2.jpg',
            },
            {
              title: 'Yin & Restore',
              desc: 'Slow-paced, deep-stretching poses to relax fascia and activate your body’s natural healing response.',
              img: '/images/home3.jpg',
            },
          ].map((cls, i) => (
            <article key={i} className="bg-stone-100 rounded-lg overflow-hidden shadow-md">
              <img src={cls.img} alt={cls.title} className="w-full h-100 object-cover" loading="lazy" />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{cls.title}</h4>
                <p className="text-gray-600 text-sm">{cls.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Instructor Snippet */}
      <section className="py-16 text-center bg-stone-200 px-6" id="instructors">
        <h3 className="text-3xl font-bold mb-6">Meet Our Certified Yoga Instructors</h3>
        <p className="max-w-xl mx-auto text-gray-600 mb-10">
          Our passionate teachers bring over a decade of experience in hatha, vinyasa, and mindfulness practices.
          With compassionate guidance and deep-rooted knowledge, they help you grow both on and off the mat.
        </p>
        <Link
          href="/teachers"
          className="inline-block text-primary font-semibold hover:underline text-lg"
        >
          Meet the Team →
        </Link>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white px-6 text-center" id="testimonials">
        <h3 className="text-3xl font-semibold mb-10">What Our Yoga Students Say</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto text-left">
          {[
            {
              quote:
                "Ashu Yoga has completely transformed how I deal with stress. I feel mentally strong and emotionally lighter.",
              name: 'Anjali R.',
            },
            {
              quote:
                "My flexibility and posture have improved so much! The instructors are supportive and genuinely care.",
              name: 'Michael D.',
            },
            {
              quote:
                "Every session here feels like a sacred reset. I always leave with peace in my heart and a clear mind.",
              name: 'Sophie K.',
            },
          ].map((t, i) => (
            <blockquote key={i} className="bg-stone-100 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“{t.quote}”</p>
              <footer className="mt-4 font-medium text-primary">{t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Yoga Philosophy */}
      <section className="py-16 bg-white px-6 text-center" id="philosophy">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Our Yoga Philosophy</h3>
          <p className="text-gray-600 text-lg">
            At <strong>Ashu Yoga</strong>, we believe that yoga is not just exercise — it’s a sacred path of transformation.
            Our philosophy is rooted in the traditional teachings of Patanjali’s Yoga Sutras, and we infuse every class
            with intention, breath awareness, and compassion.
            <br /><br />
            Yoga is a way of life — a means to balance your mind, body, and spirit through regular practice, mindfulness, and self-discovery.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-stone-200 px-6 text-center" id="events">
        <h3 className="text-3xl font-semibold mb-6">Upcoming Yoga Events & Wellness Retreats</h3>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: 'Sunrise Beach Yoga',
              date: 'June 15, 2025',
              desc: 'Rejuvenate your spirit with a gentle yoga flow at dawn, beside the calming sound of ocean waves.',
            },
            {
              title: 'Weekend Wellness Retreat',
              date: 'July 20–22, 2025',
              desc: 'Unplug and reset in the serene mountains. Daily yoga, organic meals, and deep rest.',
            },
            {
              title: 'Full Moon Meditation',
              date: 'August 1, 2025',
              desc: 'Align with lunar energy through guided meditation, sound healing, and breathwork.',
            },
          ].map((event, i) => (
            <article key={i} className="bg-white p-6 rounded-lg shadow-md text-left">
              <h4 className="text-xl font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500 mb-2">{event.date}</p>
              <p className="text-gray-600">{event.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white px-6 text-center" id="newsletter">
        <div className="max-w-xl mx-auto">
          <h3 className="text-3xl font-semibold mb-4">Join Our Yoga Community</h3>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter to receive <strong>free yoga tips</strong>, upcoming events, and member-only wellness offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Instagram Gallery Preview */}
      <section className="py-16 bg-stone-100 px-6 text-center" id="gallery">
        <h3 className="text-3xl font-semibold mb-6">Follow Us on Instagram</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div key={i}>
              <img
                src={`/images/instagram${i}.jpg`}
                alt={`Ashu Yoga Instagram photo ${i}`}
                className="rounded-lg w-full h-40 object-cover shadow-sm hover:shadow-lg transition"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners */}
      <section className="py-16 bg-white px-6 text-center" id="partners">
        <h3 className="text-3xl font-semibold mb-6">Our Trusted Wellness Partners</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {['lululemon', 'manduka', 'calm', 'headspace'].map((brand, i) => (
            <img
              key={i}
              src={`/images/partner${i + 1}.jpg`}
              alt={`${brand} yoga partnership`}
              className="h-40 opacity-70 hover:opacity-100 transition"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* FAQ Snippet */}
      <section className="py-16 bg-stone-100 text-center px-6" id="faqs">
        <h3 className="text-3xl font-semibold mb-6">Frequently Asked Questions (FAQs)</h3>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div>
            <h4 className="text-lg font-medium text-primary">Do I need yoga experience to join?</h4>
            <p className="text-gray-600">
              Not at all! Our yoga studio welcomes all levels — from complete beginners to experienced practitioners.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-primary">What should I bring to a yoga class?</h4>
            <p className="text-gray-600">
              Bring a yoga mat, water bottle, and wear comfortable clothing. We also provide mats and props in-studio.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-primary">Are online yoga classes available?</h4>
            <p className="text-gray-600">
              Yes! Many of our yoga classes are offered in both studio and live-streamed formats for your convenience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center px-6" id="cta">
        <h3 className="text-3xl font-bold">Ready to begin your yoga journey?</h3>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Sign up now for a <strong>free trial yoga class</strong> and experience the Ashu Yoga difference.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-white text-primary px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Book a Free Class
        </Link>
      </section>
    </section>
  );
}