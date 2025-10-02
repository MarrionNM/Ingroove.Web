import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Abigaile",
    avatar: "user.png",
    message: "I love how i can interact with my audience even before the event day. This app really does bring the community together",
  },
  {
    name: "Thabang",
    avatar: "user.png",
    message: "Its not just a ticketing platform, its a social plateform.",
  },
  {
    name: "Lerato",
    avatar: "user.png",
    message: "The ticketing system is smooth and reliable. Love the app!",
  },
  {
    name: "Dube",
    avatar: "user.png",
    message: "I am able to create my event in less them 5min.. no need for long waitimes waiting to be aproved, its all in my hands.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-background text-text">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
      <div className="flex overflow-x-auto gap-8 px-4 md:px-12">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="bg-overlay_rr p-6 rounded-xl shadow-md min-w-[280px]"
          >
            <p className="text-secondaryText mb-4">"{t.message}"</p>
            <div className="flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full" />
              <p className="text-primary font-semibold">{t.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
