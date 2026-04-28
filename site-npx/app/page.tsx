"use client";

import { motion } from "framer-motion";
import PasswordGate from "@/components/PasswordGate";
import ParticleBackground from "@/components/Particles";
import TypingHeadline from "@/components/TypingHeadline";

export default function Home() {
  return (
    <PasswordGate>
      <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

        {/* 🌐 PARTICLES = SIGNALS */}
        <ParticleBackground />

        {/* 🧠 CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          {/* HEADLINE */}
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            <TypingHeadline />
            <br />
            <span className="text-offwhite">
              Before They Act.
            </span>
          </h1>

          {/* SUBTEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 max-w-xl text-slate-300 text-lg"
          >
            Perception. Reasoning. Decision-making.
            <br />
            Built as systems — not just models.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="mt-10"
          >
            <button className="px-6 py-3 bg-electric text-white rounded-xl shadow-glow hover:scale-105 hover:shadow-[0_0_30px_rgba(0,209,255,0.6)] transition-all duration-300">
              Enter Demo Lab
            </button>
          </motion.div>
        </motion.div>

      </main>
    </PasswordGate>
  );
}