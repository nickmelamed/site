"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = "Think. Evaluate. Act.";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      // Play subtle success sound
      new Audio("/unlock.mp3").play();
      window.location.href = "/protected";
    } else {
      setError("Access denied");
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">

      {/* Animated gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[180px] top-[-150px] left-[-150px] animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[180px] bottom-[-150px] right-[-150px] animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[160px] top-[40%] left-[30%] animate-[pulse_8s_ease-in-out_infinite]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* <div className="text-xs tracking-widest text-gray-500 mb-4">
            SYSTEM ACCESS PORTAL
          </div> */}

          {/* Typing headline */}
          <h1 className="text-5xl font-semibold mb-6 leading-tight">
            AI Systems That{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {displayText.replace("AI Systems That ", "")}
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-gray-400 mb-10">
            Curated AI systems for reasoning, evaluation, and autonomous decision-making.
          </p>

          <div className="flex flex-col items-center gap-4">
            <input
              type="password"
              placeholder="Enter access code"
              value={password}
              autoFocus
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="px-5 py-3 bg-black/60 border border-gray-700 rounded-lg text-center w-72"
            />

            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-white text-black rounded-lg"
              disabled={loading}
            >
              {loading ? "Initializing..." : "Enter"}
            </button>

            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          <div className="mt-16 text-xs text-gray-600 tracking-widest">
            AUTHORIZED ACCESS ONLY
          </div>

        </motion.div>
      </div>
    </main>
  );
}