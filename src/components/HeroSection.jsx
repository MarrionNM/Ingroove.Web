import { motion } from "framer-motion";
import { Apple, Play, Ticket, Users, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
<section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-background 
                   min-h-screen px-6 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Animated background blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] rounded-full bg-primary/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] rounded-full bg-indigo-400/20 blur-2xl"
      />

      {/* Left: Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left max-w-lg relative z-10 flex-1"
      >
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Manage{" "}
          <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
            Events
          </span>{" "}
          with Ease
        </h1>
        <p className="text-lg text-secondaryText mb-8">
          Ingroove helps you create, manage, and sell tickets effortlessly. 
          Stay connected with your audience in real time.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center md:justify-start mb-10 flex-wrap">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition border border-gray-200">
            <Apple size={20} /> App Store
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
            <Play size={20} /> Google Play
          </button>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-8 justify-center md:justify-start text-gray-700 dark:text-gray-300 flex-wrap">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 text-primary" />
            <span className="font-semibold">10k+ Tickets Sold</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold">500+ Hubs</span>
          </div>
        </div>
      </motion.div>

      {/* Middle: Floating Card (fills center gap on large screens) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="hidden lg:flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 rounded-2xl shadow-xl relative z-10 w-[250px] text-center"
      >
        <Sparkles className="text-yellow-400 w-8 h-8 mb-3" />
        <h3 className="text-lg font-bold text-white mb-2">Why Ingroove?</h3>
        <p className="text-sm text-gray-200">
          Powering events across SA — seamless ticketing, real-time updates, and smooth payouts.
        </p>
      </motion.div>

      {/* Right: App Preview */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative flex flex-1 justify-center items-center"
      >
        {/* Light Theme (front) */}
        <div className="relative w-[220px] sm:w-[240px] md:w-[260px] z-20 rotate-[-4deg] drop-shadow-2xl">
          <img
            src="/iphone_light.png"
            alt="Ingroove App Light Theme"
            className="w-full h-auto rounded-3xl"
          />
        </div>

        {/* Dark Theme (behind, shifted) */}
        <div className="absolute right-[-40px] sm:right-[20px] w-[200px] sm:w-[220px] md:w-[240px] rotate-[6deg] z-10 drop-shadow-xl hidden sm:block">
          <img
            src="/iphone_dark.png"
            alt="Ingroove App Dark Theme"
            className="w-full h-auto rounded-3xl opacity-90"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
