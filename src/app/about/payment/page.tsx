'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Check, CreditCard, Building2, Wallet } from 'lucide-react';

const paymentMethods = [
  {
    title: "Bank Transfer",
    icon: Building2,
    description: "Direct bank transfer to our international or domestic accounts",
    benefits: [
      "No additional fees",
      "Secure transaction",
      "Multiple currency options",
      "Quick processing"
    ]
  },
  {
    title: "Credit Card",
    icon: CreditCard,
    description: "Secure payment via major credit cards through our payment gateway",
    benefits: [
      "Instant confirmation",
      "256-bit encryption",
      "All major cards accepted",
      "Convenient and fast"
    ]
  },
  {
    title: "Digital Wallet",
    icon: Wallet,
    description: "Pay using popular digital wallet services",
    benefits: [
      "PayPal supported",
      "Mobile-friendly",
      "Quick checkout",
      "Buyer protection"
    ]
  }
];

const pricingPlans = [
  {
    title: "100 Hour TTC",
    duration: "2 Weeks",
    price: {
      shared: 899,
      private: 1099
    },
    features: [
      "Basic yoga philosophy",
      "Foundational asana practice",
      "Introduction to meditation",
      "Teaching methodology basics",
      "Course materials included",
      "Certification fees included"
    ]
  },
  {
    title: "200 Hour TTC",
    duration: "4 Weeks",
    price: {
      shared: 1699,
      private: 1999
    },
    features: [
      "Comprehensive yoga philosophy",
      "Advanced asana practice",
      "Meditation techniques",
      "Teaching methodology",
      "Anatomy & physiology",
      "Business of yoga",
      "Course materials included",
      "Certification fees included"
    ]
  },
  {
    title: "300 Hour TTC",
    duration: "6 Weeks",
    price: {
      shared: 2499,
      private: 2899
    },
    features: [
      "Advanced yoga philosophy",
      "Expert asana practice",
      "Advanced meditation",
      "Advanced teaching methods",
      "Therapeutic applications",
      "Specialized workshops",
      "Course materials included",
      "Certification fees included"
    ]
  }
];

export default function PaymentPage() {
  return (
    <article className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-green-600 to-teal-600">
        <div className="absolute inset-0 bg-white/5" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Course Payment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
          >
            Flexible payment options to begin your spiritual journey
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Course Pricing */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Course Pricing</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <p className="opacity-90">{plan.duration}</p>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-6 text-center">
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-1">Shared Accommodation</p>
                      <p className="text-3xl font-bold text-gray-900">${plan.price.shared}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Private Room</p>
                      <p className="text-3xl font-bold text-gray-900">${plan.price.private}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/book-now"
                    className="block w-full text-center bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg mt-6 hover:from-green-600 hover:to-teal-600 transition-colors"
                  >
                    Book Now
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Payment Methods */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Payment Methods</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                variants={fadeIn('up', 'spring', index * 0.2, 0.8)}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <method.icon className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <ul className="space-y-2">
                  {method.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Payment Policy */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Payment Policy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Deposit</h3>
                <p className="text-gray-600">
                  A 30% non-refundable deposit is required to secure your spot in the course. 
                  The deposit is transferable to another course within one year.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Early Bird Discount</h3>
                <p className="text-gray-600">
                  Book and pay in full 3 months before the course start date to receive a 10% discount 
                  on the total course fee.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Payment Plans</h3>
                <p className="text-gray-600">
                  We offer flexible payment plans allowing you to pay in installments. 
                  Contact us to discuss payment plan options that work for you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Cancellation Policy</h3>
                <p className="text-gray-600">
                  Full refund (minus deposit) available up to 30 days before the course start date. 
                  50% refund (minus deposit) available up to 15 days before the course.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          variants={fadeIn('up', 'spring', 0.5, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Help?</h2>
          <p className="text-gray-600 mb-6">
            Contact us for personalized payment plans or any questions about the course fees.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/about/faq"
              className="bg-white text-green-500 px-8 py-3 rounded-full border border-green-500 hover:bg-green-50 transition-colors"
            >
              View FAQs
            </a>
          </div>
        </motion.section>
      </div>
    </article>
  );
} 