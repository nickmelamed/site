"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 blur-3xl" />

      {/* Center container */}
      <div className="relative z-10 max-w-2xl w-full text-center">

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

        {/* Password box */}
        <div className="flex flex-col items-center gap-4">

          <div className="w-full max-w-sm">
            <input
              type="password"
              placeholder="Enter access code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Authenticating..." : "Enter"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-2 animate-pulse">
              {error}
            </p>
          )}
        </div>

        {/* Footer subtle */}
        <div className="mt-16 text-xs text-gray-600 tracking-wide">
          PRIVATE ACCESS • AUTHORIZED VIEWERS ONLY
        </div>
      </div>
    </main>
  );
}
