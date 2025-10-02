import { motion } from "framer-motion";
import { Apple, Play, Ticket, Users, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background 
                 min-h-screen px-6 pt-28 md:pt-32 flex items-center justify-center"
    >
      {/* Animated background blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-indigo-400/20 blur-2xl"
      />

      {/* Hero Content Wrapper */}
      <div className="max-w-8xl w-full flex flex-col lg:flex-row justify-center items-center gap-20 relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-6xl font-extrabold mb-8 leading-tight">
            Manage{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
              Events
            </span>{" "}
            with Ease
          </h1>
          <p className="text-xl text-secondaryText mb-10">
            Ingroove helps you create, manage, and sell tickets effortlessly. 
            Stay connected with your audience in real time.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-5 justify-center lg:justify-start mb-12 flex-wrap">
            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition border border-gray-200 text-lg font-semibold">
              <Apple size={24} /> App Store
            </button>
            <button className="flex items-center gap-3 bg-gradient-to-r from-primary to-indigo-500 text-white px-8 py-4 rounded-2xl shadow-lg hover:scale-105 transition text-lg font-semibold">
              <Play size={24} /> Google Play
            </button>
          </div>

          {/* Quick Stats */}
          <div className="flex gap-10 justify-center lg:justify-start text-gray-700 dark:text-gray-300 flex-wrap text-lg">
            <div className="flex items-center gap-3">
              <Ticket className="w-6 h-6 text-primary" />
              <span className="font-semibold">10k+ Tickets Sold</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-indigo-400" />
              <span className="font-semibold">500+ Hubs</span>
            </div>
          </div>
        </motion.div>

        {/* Middle: Floating Callout Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 40, scale: 1 }} // float below
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex flex-col items-center bg-white/20 backdrop-blur-md border border-white/30 px-8 py-10 rounded-3xl shadow-2xl w-[300px] text-center"
        >
          <Sparkles className="text-yellow-400 w-10 h-10 mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Why Ingroove?</h3>
          <p className="text-base text-gray-200">
            Powering events across SA — seamless ticketing, real-time updates, and smooth payouts.
          </p>
        </motion.div>

        {/* Right: App Preview */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex justify-center items-center lg:gap-10"
        >
          {/* Light Theme (front phone) */}
          <div className="relative w-[220px] md:w-[260px] lg:w-[280px] z-10 rotate-[-4deg] drop-shadow-2xl">
            <img
              src="/iphone_light.png"
              alt="Ingroove App Light Theme"
              className="w-full h-auto rounded-[3rem] shadow-xl"
            />
          </div>

          {/* Dark Theme (second phone) */}
          <div
            className="
              absolute md:absolute lg:static 
              w-[220px] md:w-[240px] lg:w-[260px] 
              rotate-[6deg] 
              left-5 md:left-20 lg:left-0 
              top-6 md:top-8 lg:top-0 
              drop-shadow-md opacity-90
            "
          >
            <img
              src="/iphone_dark.png"
              alt="Ingroove App Dark Theme"
              className="w-full h-auto rounded-[3rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
