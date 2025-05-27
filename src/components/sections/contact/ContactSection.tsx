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

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters long.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters long.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(7, { message: "Phone number must be at least 7 digits." })
    .max(15, { message: "Phone number must be less than 15 digits." })
    .regex(/^\+?[0-9\s\-()]+$/, {
      message: "Phone number contains invalid characters.",
    }),
  subject: z.string().min(3, {
    message: "Subject must be at least 3 characters long.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long.",
  }),
});


export default function ContactSection() {
    const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      },
    });
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
      console.log(values);
    };
  
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
              <div className="contact-us-form-wrap">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* First Row: First Name & Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Second Row: Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="email@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input placeholder="+1 234 567 890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Third Row: Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Fourth Row: Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Input placeholder="Your message here..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit">Submit</Button>
                  </form>
                </Form>
              </div>
              <div className="contact-us-info-wrap">
                <div className="contact-us-info-area relative w-full max-w-[100vw] sm:max-w-[96vw] md:max-w-[696px] lg:max-w-[456px] xl:max-w-[100vw] h-[70vh] bg-no-repeat bg-cover bg-center mx-auto"
                    style={{ backgroundImage: "url('/images/contact3.jpg')" }}>

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center bg-[rgba(0,0,0,0.3)] text-white px-6 space-y-6">
                    <div className="single-contact-us-info-wrap flex items-center space-x-4">
                      <div className="contact-us-info-icon-wrap text-2xl">📞</div>
                      <p className="contact-us-info-content text-lg">(603) 555-0123-2345</p>
                    </div>
                    <div className="single-contact-us-info-wrap flex items-center space-x-4">
                      <div className="contact-us-info-icon-wrap text-2xl">📧</div>
                      <p className="contact-us-info-content text-lg">contact@example.com</p>
                    </div>
                    <div className="single-contact-us-info-wrap flex items-center space-x-4">
                      <div className="contact-us-info-icon-wrap text-2xl">📍</div>
                      <p className="contact-us-info-content text-lg">123 Yoga Street, Wellness City</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us-faq-section bg-gray-200">
          <FaqSection />
        </section>
      </>
    );
  }
  