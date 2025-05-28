import TopSection from '@/components/common/top-section/TopSection';

const plans = [
  {
    title: 'Drop-In',
    price: '$15',
    features: ['1 Class Access', 'No Commitment'],
    popular: false,
  },
  {
    title: 'Monthly Unlimited',
    price: '$99',
    features: ['Unlimited Classes', 'Free Workshop Access', 'Priority Booking'],
    popular: true,
  },
  {
    title: '10-Class Pass',
    price: '$120',
    features: ['Valid for 3 Months', 'Flexible Schedule'],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <>
      <TopSection
        url="/images/pricing1.jpg"
        heading1="Pricing & Membership"
        heading2="Simple, transparent pricing for every lifestyle."
      />

      <main>
        <section className="py-24 bg-gray-100">
          <div className="px-6 max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8 text-gray-900">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-lg">
              Whether you're just starting out or a dedicated yogi, we have a plan tailored for you.
            </p>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
              {plans.map(({ title, price, features, popular }, i) => (
                <article
                  key={i}
                  className={`
                    relative flex flex-col rounded-3xl border 
                    p-8 shadow-lg transition-transform duration-300
                    hover:scale-105
                    ${popular ? 'border-primary bg-primary/5 shadow-primary/30' : 'border-gray-200 bg-white'}
                  `}
                >
                  {popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-semibold uppercase rounded-full px-3 py-1 shadow-md">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h3>
                  <p className="text-5xl font-extrabold text-primary mb-6">{price}</p>
                  <ul className="flex-1 mb-8 text-gray-700 space-y-3 text-left">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`
                      rounded-full py-3 text-lg font-semibold transition-colors
                      ${
                        popular
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-gray-300 text-gray-900 hover:bg-gray-400'
                      }
                    `}
                  >
                    Get Started
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
