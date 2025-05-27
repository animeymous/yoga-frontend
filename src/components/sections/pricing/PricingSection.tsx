// app/pricing/page.tsx

import TopSection from '@/components/common/top-section/TopSection';

export default function PricingSection() {
  return (
    <>
      <TopSection
        url="/images/pricing-hero.jpg"
        heading1="Pricing & Membership"
        heading2="Simple, transparent pricing for every lifestyle."
      />

      <section className="py-20 bg-white px-6 max-w-5xl mx-auto text-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Drop-In',
              price: '$15',
              features: ['1 Class Access', 'No Commitment'],
            },
            {
              title: 'Monthly Unlimited',
              price: '$99',
              features: ['Unlimited Classes', 'Free Workshop Access', 'Priority Booking'],
            },
            {
              title: '10-Class Pass',
              price: '$120',
              features: ['Valid for 3 Months', 'Flexible Schedule'],
            },
          ].map((plan, i) => (
            <div key={i} className="bg-stone-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold mb-2">{plan.title}</h4>
              <p className="text-primary text-xl font-semibold mb-4">{plan.price}</p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>
              <button className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary/90 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
