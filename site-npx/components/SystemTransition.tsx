"use client";

import { motion } from "framer-motion";

export default function SystemTransition() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-gradient opacity-95" />
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 text-center"
      >
        <p className="text-caption trackingf-[0.3em] mb-3 text-secondary">
          Initializing Intelligence...
        </p>

        <p className="text-gradient text-subtitle tracking-wide">
          Prepare to See the Magic of the Future
        </p>

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