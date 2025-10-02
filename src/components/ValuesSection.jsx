import { motion } from "framer-motion";
import { Users, Sparkles, ShieldCheck, Zap } from "lucide-react";

const values = [
  { icon: <Sparkles size={28} />, title: "Innovation", desc: "We embrace creativity and modern tech to stay ahead." },
  { icon: <ShieldCheck size={28} />, title: "Trust", desc: "Security and reliability are at the core of everything we build." },
  { icon: <Users size={28} />, title: "Community", desc: "We connect people and empower organizers & attendees alike." },
  { icon: <Zap size={28} />, title: "Efficiency", desc: "Simplifying event management so you can do more, faster." },
];

const ValuesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-primary/5 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">
          Our <span className="text-primary">Values</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl p-8 flex flex-col items-center text-center transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {val.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
