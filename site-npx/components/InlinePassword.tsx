"use client";

import { useState } from "react";

const PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD || "test123";

export default function InlinePassword({
  visible,
  onUnlock,
}: {
  visible: boolean;
  onUnlock?: () => void;
}) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      onUnlock?.();
    } else {
      setError(true);
    }
  };

  return (
    <div
      className={`mt-6 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <input
        type="password"
        placeholder="Enter access key"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setError(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
        className="px-4 py-2 bg-black/40 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan"
      />

      <button
        onClick={handleSubmit}
        className="ml-3 px-4 py-2 bg-electric rounded-lg hover:scale-105 transition shadow-glow"
      >
        Unlock
      </button>

      {error && (
        <p className="text-red-400 text-sm mt-2">
          Invalid key
        </p>
      )}
    </div>
  );
}