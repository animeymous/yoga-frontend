"use client";

import { motion } from "framer-motion";
import TopSection from "../../common/top-section/TopSection";
import FaqSection from "../faq/FaqSection";
import { fadeIn, staggerContainer, textVariant } from "@/utils/motion";

export default function AboutSection() {
  return (
    <>
      <TopSection
        url={"/images/contact8.jpg"}
        heading1={"About Us"}
        heading2={
          "Ashu Yoga is more than a yoga studio — it's a sanctuary for holistic healing, mindfulness, and self-discovery."
        }
      />

      {/* Philosophy & Mission */}
      <section
        className="py-24 bg-gray-50"
        id="philosophy"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            id="philosophy-heading"
            className="text-4xl font-bold text-gray-900"
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            About Ashu Yoga
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            At Ashu Yoga, our mission is to provide authentic, inclusive yoga
            experiences that nurture your mind, body, and soul. As a trusted
            wellness center, we focus on creating mindful practices that help
            you reconnect with your inner peace and physical vitality.
          </motion.p>

          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-12 text-left"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                title: "Our Philosophy",
                content:
                  "We embrace holistic wellness — integrating physical asana, meditation, and pranayama to cultivate deep presence and lasting health.",
              },
              {
                title: "Our Mission",
                content:
                  "Our goal is to make mindful movement and spiritual wellness accessible to everyone, regardless of age or experience level.",
              },
              {
                title: "Our Community",
                content:
                  "From beginners to advanced yogis, our yoga community is built on compassion, connection, and the shared journey of self-growth.",
              },
            ].map((block, i) => (
              <motion.article
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out cursor-pointer"
                variants={fadeIn("up", "spring", i * 0.2, 0.7)}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                tabIndex={0}
                aria-labelledby={`philosophy-title-${i}`}
              >
                <h2
                  id={`philosophy-title-${i}`}
                  className="text-xl font-semibold text-primary mb-2 transition-colors duration-300 ease-in-out hover:text-primary-dark"
                >
                  {block.title}
                </h2>
                <p className="text-gray-600">{block.content}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section
        className="bg-white py-24"
        id="journey"
        aria-labelledby="journey-heading"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            id="journey-heading"
            className="text-3xl font-bold text-gray-900"
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Since our humble beginnings in 2012, Ashu Yoga has grown into one of
            the most trusted yoga studios in the region. Every chapter of our
            journey reflects our commitment to mindful living, spiritual growth,
            and community-based wellness.
          </motion.p>

          <motion.div
            className="mt-10 space-y-6 text-left"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                year: "2012",
                title: "Humble Beginnings",
                content:
                  "Ashu Yoga began as a small, intimate yoga space — a one-woman vision rooted in love, healing, and ancient yogic wisdom.",
              },
              {
                year: "2016",
                title: "Growth & Recognition",
                content:
                  "As our yoga community expanded, so did our offerings — from daily yoga classes to monthly wellness workshops in mindfulness and breathwork.",
              },
              {
                year: "2020",
                title: "Online & Resilient",
                content:
                  "In response to global challenges, we transitioned to online yoga classes, making healing and connection accessible across the world.",
              },
              {
                year: "Today",
                title: "Thriving Together",
                content:
                  "Now a full-spectrum wellness hub, Ashu Yoga offers teacher training, retreats, and mind-body therapies — serving a diverse and inclusive yoga family.",
              },
            ].map((item, i) => (
              <motion.section
                key={i}
                className="border-l-4 border-primary pl-4"
                variants={fadeIn("right", "spring", i * 0.2, 0.7)}
                tabIndex={0}
                aria-labelledby={`journey-title-${i}`}
              >
                <h3
                  id={`journey-title-${i}`}
                  className="text-lg font-semibold text-gray-800"
                >
                  {item.year} – {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.section>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section
        className="bg-gray-50 py-24"
        id="why-ashu-yoga"
        aria-labelledby="why-heading"
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            id="why-heading"
            className="text-3xl font-bold text-gray-900"
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            What Makes Ashu Yoga Unique
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-3xl mx-auto"
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            More than just yoga classes, we offer transformative experiences.
            Every detail — from our expert yoga instructors to our tranquil
            ambiance — is designed to support your journey toward total wellness.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8 mt-16 text-left"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              {
                icon: "🧘‍♀️",
                title: "Diverse Yoga Styles",
                content:
                  "We offer a wide variety of styles including Hatha, Vinyasa, Yin, Prenatal, and Restorative yoga — suitable for all experience levels.",
              },
              {
                icon: "🌿",
                title: "Holistic Health Services",
                content:
                  "Enhance your yoga practice with Ayurvedic consultations, guided meditations, breathwork, and journaling circles.",
              },
              {
                icon: "🌍",
                title: "Inclusive & Safe Space",
                content:
                  "Ashu Yoga is committed to being an inclusive wellness studio — embracing all identities, abilities, and backgrounds with love and acceptance.",
              },
            ].map((item, i) => (
              <motion.article
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500 ease-in-out cursor-pointer"
                variants={fadeIn("up", "spring", i * 0.2, 0.7)}
                whileHover={{ scale: 1.05, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
                tabIndex={0}
                aria-labelledby={`unique-title-${i}`}
              >
                <div className="text-3xl mb-4" aria-hidden="true">
                  {item.icon}
                </div>
                <h3
                  id={`unique-title-${i}`}
                  className="text-xl font-semibold text-primary mb-2 transition-colors duration-300 ease-in-out hover:text-primary-dark"
                >
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing Statement */}
      <section
        className="py-20 bg-white text-center"
        id="cta"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4">
          <motion.h2
            id="cta-heading"
            className="text-3xl font-bold text-gray-900"
            variants={textVariant()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            You Belong at Ashu Yoga
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg"
            variants={fadeIn("up", "tween", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            Whether you're seeking inner stillness, physical strength, or
            emotional healing, our yoga sanctuary is here for you. Join a
            community where your well-being is always the priority.
          </motion.p>
          <motion.div
            className="mt-6"
            variants={fadeIn("up", "tween", 0.4, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              href="/classes"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 ease-in-out"
            >
              Explore Yoga Classes
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-200" id="faqs" aria-label="Frequently Asked Questions">
        <FaqSection />
      </section>
    </>
  );
}