import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ContactSection() {
    return (
      <>
        <section className="breadcrumb-section w-full h-[40vh]">
          <div className="relative w-full h-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/contact1.jpg')" }}>
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
              <h2 className="section-title">A comfortable stage for mindful living</h2>
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
            <div className="contact-us-form-area">
              <div className="contact-us-form-wrap">
                this will have form
              </div>
              <div className="contact-us-info-wrap">
                <div className="contact-us-info-area">
                  this one will have image and some texts in center of it just like we did top of the page 
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  