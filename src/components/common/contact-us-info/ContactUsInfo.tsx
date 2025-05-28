"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsInfo() {
  
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } },
  };

  const iconHover = {
    rest: { scale: 1, color: "white" },
    hover: {
      scale: 1.2,
      color: "#f87171", // Tailwind red-400
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };  

  const linkHover = {
    color: "#f87171",
    textDecoration: "underline",
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  return (
    <motion.aside
      className="contact-us-info-wrap"
      aria-label="Contact Information"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div
        className="relative w-full h-[70vh] max-w-full rounded-2xl overflow-hidden shadow-xl mx-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact3.jpg')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />

        {/* Contact content */}
        <address className="absolute inset-0 z-20 flex flex-col justify-end px-8 py-12 text-white space-y-6 not-italic">
          {/* Phone */}
          <motion.div
            className="flex items-center gap-4"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { scale: 1, color: "white" },
              hover: iconHover,
            }}
          >
            <motion.span
              aria-hidden="true"
              className="w-6 h-6"
              variants={iconHover}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <Phone />
            </motion.span>
            <motion.a
              href="tel:+160355501232345"
              className="text-lg font-medium"
              style={{ color: "inherit" }}
              whileHover={linkHover}
              tabIndex={0}
            >
              (603) 555-0123-2345
            </motion.a>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center gap-4"
            whileHover="hover"
            initial="rest"
            animate="rest"
            variants={{
              rest: { scale: 1, color: "white" },
              hover: iconHover,
            }}
          >
            <motion.span
              aria-hidden="true"
              className="w-6 h-6"
              variants={iconHover}
              style={{ originX: 0.5, originY: 0.5 }}
            >
              <Mail />
            </motion.span>

            <motion.a
              href="mailto:contact@example.com"
              className="text-lg font-medium break-words max-w-full"
              style={{ color: "inherit" }}
              whileHover={linkHover}
              tabIndex={0}
            >
              contact@example.com
            </motion.a>
          </motion.div>

          {/* Address (non-clickable, so just a subtle fade-in) */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0.8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
            <p className="text-lg font-medium">123 Yoga Street, Wellness City</p>
          </motion.div>
        </address>
      </div>
    </motion.aside>
  );
}