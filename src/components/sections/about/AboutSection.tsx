import TopSection from "../../common/top-section/TopSection";
import FaqSection from "../faq/FaqSection";

export default function AboutSection() {
  return (
    <>
      <TopSection
        url={"/images/contact8.jpg"}
        heading1={"About Us"}
        heading2={
          "Ashu Yoga is more than a studio — it's a sanctuary for self-discovery, healing, and holistic transformation."
        }
      />

      {/* Philosophy & Mission */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At Ashu Yoga, we offer authentic, grounded yoga experiences to help
            you reconnect with your body, mind, and soul.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
            {[
              {
                title: "Our Philosophy",
                content:
                  "We believe in holistic living — blending physical movement, mindfulness, and breathwork to promote inner peace and health.",
              },
              {
                title: "Our Mission",
                content:
                  "To make yoga accessible and meaningful for all — whether you're a beginner or deep in your journey, there's space for you here.",
              },
              {
                title: "Our Community",
                content:
                  "We nurture a warm, welcoming environment where connection, growth, and transformation are at the heart of everything we do.",
              },
            ].map((block, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-primary mb-2">{block.title}</h3>
                <p className="text-gray-600">{block.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900">Our Journey</h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Since our founding in 2012, Ashu Yoga has grown from a single room in a quiet neighborhood to a thriving community of practitioners. Every step has been guided by love, intention, and a deep respect for the ancient traditions of yoga.
          </p>

          <div className="mt-10 space-y-6 text-left">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-lg font-semibold text-gray-800">2012 – Humble Beginnings</h4>
              <p className="text-gray-600">
                What started as a small, one-woman operation with a few mats and a dream became a word-of-mouth favorite among locals.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-lg font-semibold text-gray-800">2016 – Growth & Recognition</h4>
              <p className="text-gray-600">
                With new teachers joining, we expanded classes and started hosting monthly workshops on mindfulness, breathing, and balance.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-lg font-semibold text-gray-800">2020 – Online & Resilient</h4>
              <p className="text-gray-600">
                During the pandemic, we shifted online and stayed connected with hundreds of students worldwide through daily live sessions.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="text-lg font-semibold text-gray-800">Today – Thriving Together</h4>
              <p className="text-gray-600">
                Now a full wellness hub, we offer teacher training, retreats, and therapies, serving a vibrant, diverse community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-gray-900">What Sets Us Apart</h3>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We don’t just teach yoga — we live it. From the teachers we train to the music we play and the oils we diffuse, every detail at Ashu Yoga is intentional and sacred.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            {[
              {
                icon: "🧘‍♀️",
                title: "Diverse Styles",
                content: "Hatha, Vinyasa, Yin, Prenatal, Restorative, and therapeutic yoga for all levels.",
              },
              {
                icon: "🌿",
                title: "Holistic Wellness",
                content: "Ayurvedic consultations, meditation circles, journaling workshops, and breathwork therapy.",
              },
              {
                icon: "🌍",
                title: "Inclusive Space",
                content: "We welcome all ages, bodies, and backgrounds with open arms and open hearts.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-gray-900">You Belong Here</h3>
          <p className="mt-4 text-gray-600 text-lg">
            Whether you're seeking stillness, strength, or healing, Ashu Yoga offers a safe place to simply be. We can’t wait to practice with you.
          </p>
          <div className="mt-6">
            <a
              href="/classes"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition"
            >
              View Classes
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-200">
        <FaqSection />
      </section>
    </>
  );
}
