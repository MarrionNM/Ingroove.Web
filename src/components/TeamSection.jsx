import { motion } from "framer-motion";

const team = [
  { name: "Nkosinathi Mabuza", role: "Founder & CEO", img: "/images/nkosinathi.jpg" },
  { name: "Jane Doe", role: "Lead Developer", img: "/images/jane.jpg" },
];

const TeamSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-t from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Meet <span className="text-primary">Our Team</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition w-72"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-6 border-4 border-primary/20 shadow"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
