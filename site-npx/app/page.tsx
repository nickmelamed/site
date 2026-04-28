"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 200); // fade-in delay
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
      window.location.href = "/protected";
    } else {
      setError("Access denied");
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden">

      {/* Animated background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full blur-[200px] bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-2xl w-full text-center transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >

        {/* System label */}
        <div className="text-xs tracking-widest text-gray-500 mb-4">
          SYSTEM ACCESS PORTAL
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
          AI Systems That{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Think. Evaluate. Act.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-400 text-lg mb-12">
          A curated set of applied AI systems — from claim verification to autonomous reasoning pipelines.
        </p>

        {/* Input section */}
        <div className="flex flex-col items-center gap-5">

          <input
            type="password"
            placeholder="Enter access code"
            value={password}
            autoFocus
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            className="w-full max-w-sm px-5 py-3 rounded-lg bg-black/60 border border-gray-700 text-center text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Enter"}
          </button>

          {error && (
            <p className="text-red-500 text-sm animate-pulse">
              {error}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-xs text-gray-600 tracking-widest">
          PRIVATE ACCESS • AUTHORIZED VIEWERS ONLY
        </div>
      </div>
    </main>
  );
}
