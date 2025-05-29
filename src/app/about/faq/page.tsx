'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: "Course Information",
    questions: [
      {
        q: "What certification will I receive after completing the course?",
        a: "Upon successful completion, you will receive an internationally recognized Yoga Alliance certification. Our courses are registered with Yoga Alliance USA, allowing you to teach worldwide."
      },
      {
        q: "Do I need to be an advanced practitioner to join the course?",
        a: "No, our courses are designed for all levels. While some experience with yoga is beneficial, we welcome dedicated students with a regular practice of at least 6 months."
      },
      {
        q: "What is the language of instruction?",
        a: "All courses are taught in English. Our teachers are fluent in English and can also explain concepts in Hindi for better understanding when needed."
      },
      {
        q: "What is included in the course fee?",
        a: "The course fee includes accommodation, three vegetarian meals daily, course materials, yoga mat and props, weekend excursions, and certification fees."
      }
    ]
  },
  {
    category: "Accommodation & Facilities",
    questions: [
      {
        q: "What type of accommodation is provided?",
        a: "We offer three types of accommodation: private rooms with attached bathroom, shared rooms (2-3 persons), and dormitory options. All rooms are clean, comfortable, and regularly maintained."
      },
      {
        q: "Is Wi-Fi available?",
        a: "Yes, we provide free Wi-Fi in common areas. However, we encourage minimal use of technology during the course to maintain focus on your practice."
      },
      {
        q: "What kind of food is served?",
        a: "We serve fresh, nutritious vegetarian meals prepared according to yogic principles. Special dietary requirements can be accommodated with advance notice."
      },
      {
        q: "Are laundry facilities available?",
        a: "Yes, we provide washing machines and a drying area. Alternatively, laundry service is available at an additional cost."
      }
    ]
  },
  {
    category: "Travel & Logistics",
    questions: [
      {
        q: "How do I reach the ashram?",
        a: "We provide detailed arrival instructions and can arrange airport pickup. The nearest airports vary by location - please check the specific course details for transportation information."
      },
      {
        q: "What should I bring with me?",
        a: "Comfortable yoga clothes, meditation cushion, weather-appropriate clothing, personal items, and any medications you require. A detailed packing list will be provided upon registration."
      },
      {
        q: "Do I need a visa?",
        a: "Yes, if you're traveling to India, you'll need a valid visa. We recommend applying for a student or tourist visa. We can provide necessary documentation to support your visa application."
      }
    ]
  },
  {
    category: "Course Structure",
    questions: [
      {
        q: "What is the daily schedule like?",
        a: "The day typically begins at 6:00 AM with meditation, followed by asana practice, philosophy classes, teaching methodology, and anatomy. Evening sessions include practice teaching and meditation."
      },
      {
        q: "Are there any days off?",
        a: "Yes, Sundays are usually free for rest and self-study. We also organize occasional excursions to nearby spiritual sites and local attractions."
      },
      {
        q: "How many students are in each batch?",
        a: "We maintain small batch sizes of 15-20 students to ensure personal attention and quality learning. This allows for intimate group dynamics and individual guidance."
      }
    ]
  },
  {
    category: "Payment & Cancellation",
    questions: [
      {
        q: "What are the payment options?",
        a: "We accept bank transfers, credit cards, and PayPal. A deposit is required to secure your spot, with the balance due before the course begins."
      },
      {
        q: "What is the cancellation policy?",
        a: "Deposits are non-refundable but transferable to future courses within one year. Full refunds (minus deposit) are available up to 30 days before the course start date."
      },
      {
        q: "Are there any scholarships available?",
        a: "We offer limited scholarships based on financial need and dedication to yoga. Please contact us directly to discuss scholarship opportunities."
      }
    ]
  }
];

function FAQAccordion({ category, questions }: { category: string, questions: { q: string, a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">{category}</h2>
      <div className="space-y-4">
        {questions.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 'spring', index * 0.1, 0.8)}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{faq.q}</span>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-600">{faq.a}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <article className="bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Find answers to common questions about our yoga teacher training courses and ashram life
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {faqs.map((section, index) => (
            <FAQAccordion
              key={section.category}
              category={section.category}
              questions={section.questions}
            />
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Still have questions?</h2>
          <p className="text-gray-600 mb-6">
            We're here to help! Contact us directly and we'll be happy to assist you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </article>
  );
} 