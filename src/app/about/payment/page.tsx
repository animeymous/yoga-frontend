'use client';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Check, CreditCard, Building2, Wallet } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

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
      {/* Hero Section - Custom for performance */}
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
        {/* Course Pricing - Custom cards for performance, shadcn Button for interaction */}
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
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6 text-white text-center">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="opacity-90">{plan.duration}</p>
                  </div>
                  <div className="flex-grow flex flex-col">
                    <div className="p-6 border-b border-gray-100">
                      <div className="text-center">
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-1">Shared Accommodation</p>
                          <p className="text-3xl font-bold text-gray-900">${plan.price.shared}</p>
                          <Badge variant="secondary" className="mt-2">Early Bird Available</Badge>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600 mb-1">Private Room</p>
                          <p className="text-3xl font-bold text-gray-900">${plan.price.private}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow">
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 pt-0">
                      <Button 
                        className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
                        size="lg"
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Payment Methods - Custom cards for performance */}
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
              >
                <div className="bg-white rounded-xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow">
                  <method.icon className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{method.title}</h3>
                  <p className="text-gray-500 mb-4">{method.description}</p>
                  <ul className="space-y-2">
                    {method.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Payment Policy - Enhanced shadcn/ui design */}
        <motion.section
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4"
        >
          <Card className="border-2">
            <CardHeader className="text-center pb-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900">Payment Policy</h2>
                <CardDescription className="text-base mt-2">
                  Clear guidelines for deposits, discounts, and refunds
                </CardDescription>
              </motion.div>
            </CardHeader>
            <CardContent className="pt-6">
              <Separator className="mb-6" />
              <div className="grid gap-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="deposit" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-4 px-6 data-[state=open]:bg-green-50 rounded-lg transition-all">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Building2 className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-900">Deposit</h3>
                          <p className="text-sm text-gray-500">Secure your spot in the course</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-20 pb-6 pt-2">
                      <div className="bg-white rounded-lg">
                        <p className="text-gray-600 leading-relaxed">
                          A 30% non-refundable deposit is required to secure your spot in the course. 
                          The deposit is transferable to another course within one year.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="early-bird" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-4 px-6 data-[state=open]:bg-green-50 rounded-lg transition-all">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <CreditCard className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-900">Early Bird Discount</h3>
                          <p className="text-sm text-gray-500">Save with early registration</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-20 pb-6 pt-2">
                      <div className="bg-white rounded-lg">
                        <p className="text-gray-600 leading-relaxed">
                          Book and pay in full 3 months before the course start date to receive a 10% discount 
                          on the total course fee.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="payment-plans" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-4 px-6 data-[state=open]:bg-green-50 rounded-lg transition-all">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-900">Payment Plans</h3>
                          <p className="text-sm text-gray-500">Flexible installment options</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-20 pb-6 pt-2">
                      <div className="bg-white rounded-lg">
                        <p className="text-gray-600 leading-relaxed">
                          We offer flexible payment plans allowing you to pay in installments. 
                          Contact us to discuss payment plan options that work for you.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cancellation" className="border-none">
                    <AccordionTrigger className="hover:no-underline py-4 px-6 data-[state=open]:bg-green-50 rounded-lg transition-all">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <Check className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-gray-900">Cancellation Policy</h3>
                          <p className="text-sm text-gray-500">Refund terms and conditions</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-20 pb-6 pt-2">
                      <div className="bg-white rounded-lg">
                        <p className="text-gray-600 leading-relaxed">
                          Full refund (minus deposit) available up to 30 days before the course start date. 
                          50% refund (minus deposit) available up to 15 days before the course.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Contact CTA - Using shadcn Button for interaction */}
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
            <Button 
              variant="default" 
              size="lg"
              className="bg-green-500 hover:bg-green-600 rounded-full px-8"
            >
              Contact Us
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-green-500 border-green-500 hover:bg-green-50 rounded-full px-8"
            >
              View FAQs
            </Button>
          </div>
        </motion.section>
      </div>
    </article>
  );
} 