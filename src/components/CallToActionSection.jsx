import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";

const CallToActionSection = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-6 text-white"
          >
            Ready to <span className="text-yellow-300">Get Ingroove?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg mb-10 text-gray-200 leading-relaxed"
          >
            Download the app today and start creating, managing, and selling tickets
            for your events — all in one place.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
              <Apple size={20} /> App Store
            </button>
            <button className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
              <Play size={20} /> Google Play
            </button>
          </motion.div>
        </div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-[280px] max-w-sm"
        >
          <img
            src="iphone_light.png"
            alt="Ingroove App Preview"
            className="w-full h-auto drop-shadow-2xl"
          />
        </motion.div>

      </div>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default CallToActionSection;
