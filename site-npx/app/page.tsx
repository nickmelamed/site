"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import ParticleBackground from "@/components/Particles";
import TypingHeadline from "@/components/TypingHeadline";
import InlinePassword from "@/components/InlinePassword";
import SystemTransition from "@/components/SystemTransition";

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const router = useRouter();

  const handleUnlock = () => {
    document.body.classList.add("system-flash");

    setTimeout(() => {
      document.body.classList.remove("system-flash");
    }, 600);

    setTransitioning(true);

    setTimeout(() => {
      router.push("/demo-lab");
    }, 1200);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

      {/* 🌐 PARTICLES */}
      <ParticleBackground />

      {/* 🔥 TRANSITION OVERLAY */}
      {transitioning && <SystemTransition />}

      <div className="relative z-10">

        {/* HEADLINE */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
          <TypingHeadline onComplete={() => setTypingDone(true)} />
          <br />
          <span className="text-offwhite">
            Before They Act.
          </span>
        </h1>

        {/* PASSWORD */}
        <InlinePassword
          visible={typingDone}
          onUnlock={handleUnlock}
        />

        {/* SUBTEXT */}
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
          Custom AI systems for decision-making, automation, and real-world deployment.
        </motion.p>

      </div>
    </main>
  );
}