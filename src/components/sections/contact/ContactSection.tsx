'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useForm } from "react-hook-form";

export default function ContactSection() {
    const { register, handleSubmit } = useForm({
      defaultValues: {
        firstName: "bill",
        lastName: "luo",
        email: "test@test.com",
        isDeveloper: true
      }
    });

    const onSubmit = (data: any) => {
      alert(JSON.stringify(data));
    };
    return (
      <>
        <section className="breadcrumb-section w-full h-[40vh]">
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
        <section className="contact-location-section py-16">
          <div className="contact-location-section-parent-div mx-10">
            <div className="section-title-block text-center mb-10">
              <div className="section-subtitle">Our Expertise</div>
              <h2 className="section-title">
                A comfortable stage for mindful living
              </h2>
            </div>
            <div className="contact-location-wrap grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="contact-us-form-section pb-16">
          <div className="contact-us-form-section-parent-div mx-10">
            <div className="contact-us-form-area grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="contact-us-form-wrap bg-black">
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstName">First Name</label>
                <input placeholder="bill" {...register("firstName")} />

                <label htmlFor="lastName">Last Name</label>
                <input placeholder="luo" {...register("lastName")} />

                <label htmlFor="email">Email</label>
                <input
                  placeholder="bluebill1049@hotmail.com"
                  type="email"
                  {...register("email")}
                />

                <label>Is developer?</label>
                <input type="checkbox" {...register("isDeveloper")} />

                <input type="submit" />
              </form>
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
      </>
    );
  }
  