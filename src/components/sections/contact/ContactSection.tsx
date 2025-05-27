'use client'

import FaqSection from "../faq/FaqSection"
import { LocationCard } from "../../common/location-card/LocationCardSection"
import ContactUsInfo from "@/components/common/contact-us-info/ContactUsInfo"
import ContactForm from "../form/ContactForm"

export default function ContactSection() {

  
    return (
      <>
<section className="relative w-full h-[96vh] bg-gray-900">
  <div
    className="absolute inset-0 bg-center bg-cover filter brightness-75"
    style={{ backgroundImage: "url('/images/contact5.jpg')" }}
    aria-hidden="true"
  />
  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
      Get in Touch
    </h1>
    <hr className="w-20 border-t-4 border-primary mb-6 opacity-80" />
    <p className="text-lg md:text-xl max-w-xl drop-shadow-md">
      We would love to hear from you! Reach out for any questions, feedback, or collaborations.
    </p>
  </div>
</section>

        <section className="contact-location-section py-20 bg-gray-100">
          <div className="contact-location-section-parent-div mx-10">
          <div className="text-center mb-20">
            <p className="text-primary uppercase tracking-widest text-sm font-medium mb-2">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              A Comfortable Stage for Mindful Living
            </h2>
            <div className="w-16 h-1 bg-primary mt-4 mx-auto rounded-full" />
          </div>

            <div className="contact-location-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <LocationCard locationName={"Vinayasa yoga school"} address={"Rishikesh, Uttarakhand"} />
              <LocationCard locationName={"World peace yoga school"} address={"Rishikesh, Uttarakhand"} />
              <LocationCard locationName={"Ashu yoga school"} address={"Rishikesh, Uttarakhand"} />
            </div>
          </div>
        </section>
        <section className="contact-us-form-section pb-16 bg-gray-100">
          <div className="contact-us-form-section-parent-div mx-10">
            <div className="contact-us-form-area grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ContactForm />
              <ContactUsInfo />
            </div>
          </div>
        </section>
        <section className="contact-us-faq-section bg-gray-200">
          <FaqSection />
        </section>
      </>
    );
  }
  