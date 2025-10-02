import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-background">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-white to-secondary/10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left side - Text */}
        <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/40 rounded-3xl shadow-xl p-8 md:p-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Why <span className="text-primary">choose</span> Ingroove?
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            We designed Ingroove to make event management simple, fast, and 
            fun. Here’s why organizers and hubs trust us.
          </p>

          <ul className="space-y-5">
            {[
              "Easy to set up and use",
              "Low fees, transparent pricing",
              "Built for mobile-first audiences",
              "Engage and grow your community",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <CheckCircle className="text-primary w-7 h-7 flex-shrink-0" />
                <span className="text-base md:text-lg text-gray-800 dark:text-gray-200">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right side - Image / Screenshot */}
        <div className="flex justify-center relative">
          <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <img
            src="/images/ingroove-preview.png"
            alt="Ingroove App Preview"
            className="rounded-2xl shadow-2xl w-[85%] md:w-[75%] object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
