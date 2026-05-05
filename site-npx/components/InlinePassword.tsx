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
      className={`transition-all ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <div className="inline-row-center inline-md">

        <input
          type="password"
          placeholder="Enter access key"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          className="input-base input-md text-body"
        />

        <button onClick={handleSubmit} className="btn btn-primary">
          Enter
        </button>
      </div>

      {error && (
        <p className="text-caption text-secondary text-center">
          Invalid key
        </p>
      )}
    </div>
  );
}