"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import ParticleBackground from "@/components/Particles";
import TypingHeadline from "@/components/TypingHeadline";
import SystemTransition from "@/components/SystemTransition";

export default function Home() {
  const [typingDone, setTypingDone] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [password, setPassword] = useState("");

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
    <main className="bg-main relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

  <ParticleBackground />
  {transitioning && <SystemTransition />}

  <div className="relative z-10">

    {/* HEADLINE */}
    <h1 className="text-title leading-tight text-center">
      <span className="text-gradient">
        <TypingHeadline onComplete={() => setTypingDone(true)} />
      </span>
    </h1>

    {/* UNLOCK */}
    {typingDone && (
      <div className="mt-8">

        {!showInput ? (
          <button onClick={() => setShowInput(true)} className="btn btn-primary">
            Unlock
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="input-group centered"
          >
            <input
              type="password"
              placeholder="Enter access key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-base input-md text-body"
              onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
            />

            <button onClick={handleUnlock} className="btn btn-primary">
              Enter
            </button>
          </motion.div>
        )}

      </div>
    )}

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={typingDone ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mt-8 container-xl text-secondary text-body"
    >
      Custom AI systems for real-world decisions
    </motion.p>

  </div>
</main>
  );
}