import { motion } from "framer-motion";

const DownloadLinks = () => {
  return (
    <section className="py-20 px-6 flex flex-col items-center bg-gradient-to-br from-primary/10 via-background to-background text-text">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        Get Ingroove Now
      </motion.h2>

      <div className="flex gap-4">
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="App Store"
          className="h-12 cursor-pointer hover:scale-105 transition"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
          alt="Google Play"
          className="h-12 cursor-pointer hover:scale-105 transition"
        />
      </div>

      <p className="text-secondaryText mt-6">Trusted by 10,000+ users worldwide 🚀</p>
    </section>
  );
};

export default DownloadLinks;
