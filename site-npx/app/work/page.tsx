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
    <main className="relative min-h-screen bg-main flex items-center justify-center px-6">

      <div className="absolute inset-0 bg-[rgb(var(--bg-main))]" />
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-lg panel p-8 stack-lg"
      >

        <div className="flex justify-between items-center">
          <h1 className="text-title text-gradient">Work With Me</h1>

          <button
            onClick={() => router.back()}
            className="text-tertiary hover:text-primary"
          >
            ← Back
          </button>
        </div>

        <p className="text-secondary text-body">
          Tell me what you're trying to build — let's get it done.
        </p>

        <div className="stack-md">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="input-base text-body"
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="input-base text-body"
          />

          <textarea
            placeholder="What are you trying to create?"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="input-base textarea-md text-body"
          />

          <button className="btn btn-primary btn-full">
            Send Message
          </button>
        </div>
      </motion.div>
    </main>
  );
}