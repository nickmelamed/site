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
        className="relative z-10 w-full max-w-lg panel p-8"
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

        <p className="text-sm text-muted mb-6">
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
            className="input-base"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="input-base"
          />

          <textarea
            placeholder="What are you trying to create?"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="input-base h-28"
          />

          <button className="btn-primary w-full">
            Send Message
          </button>
        </div>
      </motion.div>
    </main>
  );
}