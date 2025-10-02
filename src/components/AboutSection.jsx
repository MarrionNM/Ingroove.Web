import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-indigo-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-center overflow-hidden">
      {/* Floating accent */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-200/20 dark:bg-indigo-400/10 rounded-full blur-3xl -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
          About Ingroove
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Ingroove is your ultimate solution for{" "}
          <span className="font-semibold text-primary">event management</span> and{" "}
          <span className="font-semibold text-indigo-500">ticketing</span>.
        </p>
        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
          Our mission is to make managing events, selling tickets, and connecting with your audience{" "}
          <span className="text-primary font-semibold">effortless</span> and{" "}
          <span className="text-indigo-500 font-semibold">enjoyable</span>.
          With Ingroove, you focus on creating unforgettable experiences — we handle the rest.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
