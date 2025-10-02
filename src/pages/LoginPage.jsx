import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../services/authService";
import { useAuth } from "../services/AuthContext";
import { motion } from "framer-motion";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await loginService(email, password);

      if (!data?.isSuccess) {
        setError(data?.message || "Invalid email or password.");
        return;
      }

      login(data.data.user);

      if (data.data.user.role === "Hub") {
        navigate("/hub");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden px-4">
      {/* Decorative gradient blobs */}
      <motion.div
        animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-20 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute -bottom-24 -right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-2xl"
      />

      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-overlay_Dark/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:max-w-md border border-white/10"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
          Login to Ingroove
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-center text-sm">{error}</p>
        )}

        {/* Email */}
        <label className="block mb-2 text-secondaryText text-sm sm:text-base">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-background text-text_Dark border border-border_Dark placeholder-secondary_Text_Dark focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Enter your email"
          required
        />

        {/* Password */}
        <label className="block mb-2 text-secondaryText text-sm sm:text-base">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg mb-6 bg-background text-text_Dark border border-border_Dark placeholder-secondary_Text_Dark focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Enter your password"
          required
        />

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-indigo-500 text-white p-3 rounded-lg hover:opacity-90 transition flex justify-center items-center shadow-md"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Links */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-3 text-sm text-secondaryText text-center sm:text-left">
          <a href="/register" className="hover:text-primary transition">
            Don’t have an account? Sign up
          </a>
          <a href="/forgot-password" className="hover:text-primary transition">
            Forgot password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
