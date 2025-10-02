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
  const { login } = useAuth(); // context sets auth state

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

      // Save user in context
      login(data.data.user);

      // Redirect based on role
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
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden">
      {/* ...same UI code you had for background & form... */}
      <form
        onSubmit={handleLogin}
        className="relative z-10 bg-overlay_Dark/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/10"
      >
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Ingroove
        </h1>

        {error && (
          <p className="text-red-500 mb-4 text-center text-sm">{error}</p>
        )}

        <label className="block mb-2 text-secondaryText">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg mb-4 bg-background text-text_Dark border border-border_Dark placeholder-secondary_Text_Dark focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Enter your email"
          required
        />

        <label className="block mb-2 text-secondaryText">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg mb-6 bg-background text-text_Dark border border-border_Dark placeholder-secondary_Text_Dark focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Enter your password"
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-primary to-indigo-500 text-white p-3 rounded-lg hover:opacity-90 transition flex justify-center items-center shadow-md"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <div className="mt-6 flex justify-between text-sm text-secondaryText">
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
