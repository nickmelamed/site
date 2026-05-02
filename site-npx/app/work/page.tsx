"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WorkWithMe() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <main className="relative min-h-screen bg-navy text-offwhite overflow-hidden flex items-center justify-center px-6">

      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg bg-charcoal/80 backdrop-blur-xl border border-white/10 rounded-xl p-8"
      >

        {/* Header */}
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-semibold text-gradient">
            Work With Me
          </h1>

          <button
            onClick={() => router.back()}
            className="text-offwhite/50 hover:text-offwhite"
          >
            ← Back
          </button>
        </div>

        <p className="text-sm text-offwhite/60 mb-6">
          Tell me what you're trying to build — let's get it done.
        </p>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full px-4 py-2 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan"
          />

          <textarea
            placeholder="What are you trying to create?"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full px-4 py-2 h-28 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-cyan"
          />

          <button className="w-full py-3 bg-electric text-white rounded-lg shadow-glow hover:scale-105 transition">
            Send Message
          </button>
        </div>

      </motion.div>
    </main>
  );
}