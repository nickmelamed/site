"use client";

import { useState } from "react";

const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || "test123";

export default function PasswordGate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="flex items-center justify-center min-h-screen text-center px-6">
      <div className="bg-charcoal/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-glow">
        
        <h2 className="text-2xl font-semibold mb-4 text-gradient">
          Access Required
        </h2>

        <p className="text-slate-300 mb-6">
          Enter system credentials
        </p>

        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          className="px-4 py-2 w-full bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 w-full py-2 bg-electric rounded-lg hover:scale-105 transition shadow-glow"
        >
          Enter System
        </button>

        {error && (
          <p className="text-red-400 mt-3 text-sm">
            Invalid credentials
          </p>
        )}
      </div>
    </div>
  );
}