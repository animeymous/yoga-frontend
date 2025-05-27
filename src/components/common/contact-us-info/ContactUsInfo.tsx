import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUsInfo() {
  return (
    <div className="contact-us-info-wrap">
      <div
        className="relative w-full h-[70vh] max-w-full rounded-2xl overflow-hidden shadow-xl mx-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/images/contact3.jpg')" }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent z-10" />

        {/* Contact content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end px-8 py-12 text-white space-y-6">
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-white" />
            <p className="text-lg font-medium">(603) 555-0123-2345</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-white" />
            <p className="text-lg font-medium break-words max-w-full">
                contact@example.com
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-white" />
            <p className="text-lg font-medium">123 Yoga Street, Wellness City</p>
          </div>
        </div>
      </div>
    </div>
  );
}
