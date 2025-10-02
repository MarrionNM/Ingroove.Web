import { motion } from "framer-motion";
import { Calendar, Rocket, Globe, Users } from "lucide-react";

const milestones = [
  {
    year: "2022",
    icon: <Calendar size={22} />,
    title: "The Idea",
    desc: "Ingroove was born from the need to simplify event management and ticketing.",
  },
  {
    year: "2023",
    icon: <Rocket size={22} />,
    title: "Prototype Launch",
    desc: "Our team released the first prototype, gathering feedback from early users.",
  },
  {
    year: "2024",
    icon: <Users size={22} />,
    title: "Community Growth",
    desc: "Thousands of users and organizers joined the platform, shaping the ecosystem.",
  },
  {
    year: "2025",
    icon: <Globe size={22} />,
    title: "Global Reach",
    desc: "Ingroove expands to international markets, connecting events worldwide.",
  },
];

const OurStorySection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-primary/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our <span className="text-primary">Story</span>
        </h2>

        <div className="relative border-l-2 border-primary/30 dark:border-primary/40 pl-6">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="mb-12 relative"
            >
              {/* Dot */}
              <div className="absolute -left-10 top-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                {item.icon}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <span className="text-sm font-medium text-primary">{item.year}</span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
