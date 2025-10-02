import { Facebook, Instagram, Twitter, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-background text-secondaryText pt-10 pb-6 mt-12">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary via-indigo-400 to-pink-500" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-extrabold text-primary">Ingroove</h2>
          <p className="text-sm">&copy; {new Date().getFullYear()} Ingroove. All rights reserved.</p>
        </div>

        {/* Middle: Links */}
        <div className="flex gap-6 text-sm">
          <a href="https://omnyx.co.za/privacy" className="hover:text-primary transition">
            Privacy Policy
          </a>
          <a href="https://omnyx.co.za/terms" className="hover:text-primary transition">
            Terms of Service
          </a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-white shadow-lg hover:scale-110 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
