"use client";

import TopSection from '../../common/top-section/TopSection';
import FaqSection from '../faq/FaqSection';
import { LocationCard } from '../../common/location-card/LocationCardSection';
import ContactUsInfo from '@/components/common/contact-us-info/ContactUsInfo';
import ContactForm from '../form/ContactForm';
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeInOut", duration: 0.6 }
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)", transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function ContactSection() {
  return (
    <>
      <TopSection
        url="/images/contact5.jpg"
        heading1="Contact Ashu Yoga"
        heading2="We would love to hear from you — for any questions, feedback, or yoga collaborations."
      />

      <section className="contact-location-section py-20 bg-gray-100" id="locations">
        <div className="mx-10">
          <header className="text-center mb-20">
            <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">
              Our Locations
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              A Comfortable Stage for Mindful Living
            </h1>
            <div className="w-16 h-1 bg-primary mt-4 mx-auto rounded-full" />
          </header>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { name: "Vinyasa Yoga School", address: "Rishikesh, Uttarakhand" },
              { name: "World Peace Yoga School", address: "Rishikesh, Uttarakhand" },
              { name: "Ashu Yoga School", address: "Rishikesh, Uttarakhand" },
            ].map(({ name, address }, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="rounded-lg cursor-pointer"
                tabIndex={0}
                role="article"
                aria-label={`Location: ${name}, Address: ${address}`}
              >
                <LocationCard locationName={name} address={address} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="contact-us-form-section pb-16 bg-gray-100" id="contact-form">
        <div className="mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactForm />
            <ContactUsInfo />
          </div>
        </div>
      </section>

      <section className="contact-us-faq-section bg-gray-200" id="faq">
        <FaqSection />
      </section>
    </>
  );
}