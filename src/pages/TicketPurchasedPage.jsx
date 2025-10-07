import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TicketPurchasedPage = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("Processing your payment...");
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentStatus = params.get("pf_payment_status");
    const reservationId = params.get("custom_str1");
    const amount = params.get("amount_gross");

    if (!reservationId) {
      setLoading(false);
      setSuccess(false);
      setMessage("Missing reservation details.");
      return;
    }

    const finalizePurchase = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/tickets/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reservationId, paymentStatus, amount }),
        });

        const data = await res.json();

        if (data?.isSuccess) {
          setSuccess(true);
          setMessage("Your ticket purchase was successful!");
        } else {
          throw new Error(data?.message || "Payment could not be confirmed.");
        }
      } catch (err) {
        console.error(err);
        setSuccess(false);
        setMessage("Something went wrong while finalizing your ticket.");
      } finally {
        setLoading(false);
      }
    };

    // only finalize if payment is complete
    if (paymentStatus?.toLowerCase() === "complete") {
      finalizePurchase();
    } else {
      setLoading(false);
      setSuccess(false);
      setMessage("Payment was not successful or was cancelled.");
    }
  }, []);

  const handleOpenApp = () => {
    const appUrl = "ingroove://tickets";
    const fallbackUrl = "/"; // fallback if app not installed

    // Try to open app
    window.location.href = appUrl;

    // If app not installed, redirect after 2 seconds
    setTimeout(() => {
        window.location.href = fallbackUrl;
    }, 2000);
    };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-background via-background to-background overflow-hidden px-4">
      {/* Floating gradient blobs (same as login page) */}
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

      <div className="relative z-10 bg-overlay_Dark/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-xl w-full sm:max-w-md border border-white/10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-6">
          Ticket Purchase
        </h1>

        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="animate-spin w-10 h-10 text-primary" />
            <p className="text-secondaryText">{message}</p>
          </div>
        ) : success ? (
          <div className="flex flex-col items-center gap-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <p className="text-lg text-white">{message}</p>
            <button
              onClick={() => navigate("/tickets")}
              className="mt-4 bg-gradient-to-r from-primary to-indigo-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition shadow-md"
            >
              View My Tickets
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <XCircle className="w-12 h-12 text-red-500" />
            <p className="text-lg text-white">{message}</p>
            {/* <button
              onClick={() => navigate("/")}
              className="mt-4 bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition shadow-md"
            >
              Return Home
            </button> */}
            <button
                onClick={handleOpenApp}
                className="mt-4 bg-gradient-to-r from-primary to-indigo-500 text-white py-3 px-6 rounded-lg hover:opacity-90 transition shadow-md"
                >
                Open Ingroove App
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default TicketPurchasedPage;
