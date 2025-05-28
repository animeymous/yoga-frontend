import TopSection from "../../common/top-section/TopSection";
import FaqSection from "../faq/FaqSection";

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
      <section className="py-24 bg-gray-50" id="philosophy">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900">About Ashu Yoga</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            At Ashu Yoga, our mission is to provide authentic, inclusive yoga experiences that nurture your mind, body, and soul. As a trusted wellness center, we focus on creating mindful practices that help you reconnect with your inner peace and physical vitality.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
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
              <article key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
                <h2 className="text-xl font-semibold text-primary mb-2">{block.title}</h2>
                <p className="text-gray-600">{block.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-white py-24" id="journey">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Since our humble beginnings in 2012, Ashu Yoga has grown into one of the most trusted yoga studios in the region. Every chapter of our journey reflects our commitment to mindful living, spiritual growth, and community-based wellness.
          </p>

          <div className="mt-10 space-y-6 text-left">
            <section className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold text-gray-800">2012 – Humble Beginnings</h3>
              <p className="text-gray-600">
                Ashu Yoga began as a small, intimate yoga space — a one-woman vision rooted in love, healing, and ancient yogic wisdom.
              </p>
            </section>
            <section className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold text-gray-800">2016 – Growth & Recognition</h3>
              <p className="text-gray-600">
                As our yoga community expanded, so did our offerings — from daily yoga classes to monthly wellness workshops in mindfulness and breathwork.
              </p>
            </section>
            <section className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold text-gray-800">2020 – Online & Resilient</h3>
              <p className="text-gray-600">
                In response to global challenges, we transitioned to online yoga classes, making healing and connection accessible across the world.
              </p>
            </section>
            <section className="border-l-4 border-primary pl-4">
              <h3 className="text-lg font-semibold text-gray-800">Today – Thriving Together</h3>
              <p className="text-gray-600">
                Now a full-spectrum wellness hub, Ashu Yoga offers teacher training, retreats, and mind-body therapies — serving a diverse and inclusive yoga family.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-gray-50 py-24" id="why-ashu-yoga">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">What Makes Ashu Yoga Unique</h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            More than just yoga classes, we offer transformative experiences. Every detail — from our expert yoga instructors to our tranquil ambiance — is designed to support your journey toward total wellness.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
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
              <article key={i} className="bg-white p-6 rounded-2xl shadow">
                <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 bg-white text-center" id="cta">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900">You Belong at Ashu Yoga</h2>
          <p className="mt-4 text-gray-600 text-lg">
            Whether you're seeking inner stillness, physical strength, or emotional healing, our yoga sanctuary is here for you. Join a community where your well-being is always the priority.
          </p>
          <div className="mt-6">
            <a
              href="/classes"
              className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition"
            >
              Explore Yoga Classes
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-200" id="faqs">
        <FaqSection />
      </section>
    </>
  );
}