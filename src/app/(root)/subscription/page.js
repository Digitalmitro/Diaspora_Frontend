const plans = [
  {
    plan: "Basic",
    tagline: "Post jobs for free*",
    features: [
      "Appear in general search results",
      "Accept mobile applications",
      "Manage candidates directly from your account",
    ],
    button: "Get Started",
  },
  {
    plan: "Pro",
    tagline: "Sponsor jobs to attract more candidates",
    features: [
      "Appear in general search results",
      "Accept mobile applications",
      "Manage candidates directly from your account",
    ],
    button: "Get Started",
  },
  {
    plan: "Premium",
    tagline: "Post jobs for free*",
    features: [
      "Appear in general search results",
      "Accept mobile applications",
      "Manage candidates directly from your account",
    ],
    button: "Get Started",
  },
];

function Subscription() {
  return (
    <main>
      <section className="flex flex-col justify-center py-8 items-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Pick your way to create
        </h1>
        <div className="flex justify-center gap-4 mt-4">
          <button className="text-xl text-[#FFC107] font-semibold py-1 border px-6 border-black hover:bg-[#0C2340] transition">
            Monthly
          </button>
          <button className="text-xl text-[#FFC107] font-semibold py-1 border px-6 border-black hover:bg-[#0C2340] transition">
            Annually
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 pt-6 bg-white">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-[#0C2340] text-white p-6  w-72 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-2xl font-bold mb-2">{plan.plan}</h2>
                <p className="font-semibold mb-4">{plan.tagline}</p>
                <ul className="mb-6 space-y-2 text-gray-300">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="text-sm">
                      *{feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="bg-[#FFC107] text-black font-semibold py-2 hover:bg-yellow-500 transition">
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Subscription;
