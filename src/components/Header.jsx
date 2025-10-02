import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { useAuth } from "../services/AuthContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="fixed w-full z-50 shadow-md backdrop-blur-md bg-gradient-to-br from-background via-background/80 to-background">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Logo */}
        <Link to="/" className="text-primary font-extrabold text-2xl tracking-tight">
          Ingroove
        </Link>

        {/* Desktop nav */}
        <nav ref={navRef} className="hidden md:flex gap-8 items-center relative font-medium">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative transition duration-300 ${
                location.pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-text hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className={`transition duration-300 ${
                  location.pathname === "/dashboard"
                    ? "text-primary font-semibold"
                    : "text-text hover:text-primary"
                }`}
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-text hover:text-primary transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={`transition duration-300 ${
                location.pathname === "/login"
                  ? "text-primary font-semibold"
                  : "text-text hover:text-primary"
              }`}
            >
              Login
            </Link>
          )}
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-overlay_rr px-6 py-4 flex flex-col gap-4 border-t border-gray-700">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-text hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {isLoggedIn ? (
            <>
              <Link
                to="/dashboard"
                className="text-text hover:text-primary transition"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-text hover:text-primary transition text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="text-text hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
