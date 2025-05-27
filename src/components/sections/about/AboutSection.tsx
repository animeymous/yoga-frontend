import TopSection from "../top-section/TopSection";

export default function AboutSection() {
  return (
    <>
    <TopSection url={"/images/contact8.jpg"} heading1={"About Us"} heading2={"Pepperidge Farm makes a bold but straightforward statement - We Are Bakers - so everyone knows exactly what the company does right out of the gate"} />
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At Ashu Yoga, we offer authentic, grounded yoga experiences to help you reconnect with your body, mind, and soul.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-12 text-left">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">Our Philosophy</h3>
            <p className="text-gray-600">
              We believe in holistic living — blending physical movement, mindfulness, and breathwork to promote inner peace and health.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To make yoga accessible and meaningful for all — whether you're a beginner or deep in your journey, there's space for you here.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-primary mb-2">Our Community</h3>
            <p className="text-gray-600">
              We nurture a warm, welcoming environment where connection, growth, and transformation are at the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
