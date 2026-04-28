"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fullText = "AI Systems That Think. Evaluate. Act.";

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

      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="text-xs tracking-widest text-gray-500 mb-4">
            SYSTEM ACCESS PORTAL
          </div>

          {/* Typing headline */}
          <h1 className="text-5xl font-semibold mb-6 leading-tight">
            {displayText}
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