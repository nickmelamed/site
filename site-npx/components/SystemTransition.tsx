"use client";

import { motion } from "framer-motion";

export default function SystemTransition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-95" />

      {/* Glow layer */}
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <p className="text-cyan text-xs tracking-[0.3em] mb-3">
          Initializing Intelligence...
        </p>

        <p className="text-gradient text-lg font-medium tracking-wide">
          Prepare to See the Magic of the Future
        </p>

        {/* Loading bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 1 }}
          className="h-[2px] bg-electric mt-6 mx-auto shadow-glow"
        />
      </motion.div>
    </motion.div>
  );
}