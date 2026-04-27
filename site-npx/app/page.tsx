"use client";

import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");

    const res = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.href = "/protected";
    } else {
      setError("Invalid password");
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          AI Systems That Think, Evaluate, and Act
        </h1>

        <p className="text-gray-400 mb-8">
          Interactive demos of real-world AI pipelines.
        </p>

        <input
          type="password"
          placeholder="Enter access code"
          className="px-4 py-2 rounded bg-gray-800 border border-gray-700"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="ml-2 px-4 py-2 bg-blue-600 rounded"
        >
          Enter
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </main>
  );
}
