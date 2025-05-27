'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import FaqSection from "../faq/FaqSection"
import { LocationCard } from "../../common/location-card/LocationCardSection"
import ContactUsInfo from "@/components/common/contact-us-info/ContactUsInfo"
import ContactForm from "../form/ContactForm"

export default function ContactSection() {

  
    return (
      <>
        <section className="breadcrumb-section w-full h-[40vh] bg-gray-100">
          <div
            className="relative w-full h-full bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: "url('/images/contact1.jpg')" }}
          >
            {/* Overlay div with flexbox to center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <hr className="w-24 border-white border-t-2 mb-2" />
              <p className="text-lg">We would love to hear from you!</p>
            </div>
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
  