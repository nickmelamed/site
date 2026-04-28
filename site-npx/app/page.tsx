"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "@/components/Particles";
import TypingHeadline from "@/components/TypingHeadline";
import InlinePassword from "@/components/InlinePassword";

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

      {/* 🌐 PARTICLES */}
      <ParticleBackground />

      <div className="relative z-10">

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          <TypingHeadline onComplete={() => setTypingDone(true)} />
          <br />
          <span className="text-offwhite">
            Before They Act.
          </span>
        </h1>

        {/* 🔐 PASSWORD (appears after typing) */}
        <InlinePassword visible={typingDone} />

        {/* SUBTEXT (animates after typing completes) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={
            typingDone
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 10 }
          }
          transition={{ duration: 0.6 }}
          className="mt-8 max-w-xl text-slate-300 text-lg"
        >
          Perception. Reasoning. Decision-making.
          <br />
          Built as systems — not just models.
        </motion.p>

      </div>
    </main>
  );
}