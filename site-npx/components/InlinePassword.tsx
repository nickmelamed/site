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
      className={`mt-6 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="flex items-center gap-3 justify-center">

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
          className="input-base w-64"
        />

        <button
          onClick={handleSubmit}
          className="btn-primary"
        >
          Enter
        </button>
      </div>

      {error && (
        <p className="text-sm text-muted mt-2 text-center">
          Invalid key
        </p>
      )}
    </div>
  );
}