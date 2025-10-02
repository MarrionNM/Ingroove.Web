import { motion } from "framer-motion";
import { CalendarCheck, Ticket, Bell } from "lucide-react";

const features = [
  {
    icon: <CalendarCheck size={32} className="text-primary" />,
    title: "Easy Event Management",
    description: "Create and manage your events effortlessly with Ingroove.",
  },
  {
    icon: <Ticket size={32} className="text-primary" />,
    title: "Ticket Sales",
    description: "Sell tickets directly through the app with secure payment options.",
  },
  {
    icon: <Bell size={32} className="text-primary" />,
    title: "Real-time Updates",
    description: "Keep your audience informed with live updates and notifications.",
  },
];

const FeaturesSection = () => {
  return (
<section className="py-20 px-5 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
  <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Features</h2>
  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {features.map((feature, idx) => (
      <div 
        key={idx} 
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition"
      >
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
          {feature.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
      </div>
    ))}
  </div>
</section>

  );
};

export default FeaturesSection;
