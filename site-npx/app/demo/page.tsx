"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const demos = [
  {
    name: "Claims RL",
    description: "RL-based reasoning engine for claim validation.",
    details:
      "Optimizes evidence selection and reasoning strategies via reinforcement learning.",
    architecture: [
      "Claim Input",
      "Evidence Pool",
      "Policy (RL Agent)",
      "Debate Engine",
      "Final Score",
    ],
  },
  {
    name: "CoClaims",
    description: "LLM-powered claim evaluation system.",
    details:
      "Combines retrieval, reasoning, and structured scoring for claim validation.",
    architecture: [
      "Claim Input",
      "Retriever",
      "LLM Reasoner",
      "Metric Engine",
      "Aggregation",
    ],
  },
  {
    name: "DDGPT",
    description: "Autonomous due diligence agent.",
    details:
      "Processes filings and news to generate structured investment insights.",
    architecture: [
      "Documents",
      "Parser",
      "RAG Pipeline",
      "LLM",
      "Insights",
    ],
  },
];

export default function ControlCenter() {
  const [selected, setSelected] = useState<any | null>(null);

  return (
    <main className="relative min-h-screen bg-navy text-offwhite overflow-hidden p-8">

      {/* 🌐 Background System Layers */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto mb-8 flex justify-between items-center">

        <div>
          <div className="text-xs text-offwhite/50 tracking-widest">
            AI SYSTEM CONTROL CENTER
          </div>
          <h1 className="text-2xl font-semibold text-gradient">
            Demo Lab
          </h1>
        </div>

        <div className="text-xs text-offwhite/50 tracking-widest text-right">
          <div>STATUS: <span className="text-cyan">OPERATIONAL</span></div>
          <div>ACCESS: <span className="text-cyan">AUTHORIZED</span></div>
        </div>

      </div>

      {/* MODULE GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {demos.map((demo) => (
          <motion.div
            key={demo.name}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(demo)}
            className="relative group cursor-pointer border border-white/10 p-5 rounded-xl overflow-hidden bg-charcoal/60 backdrop-blur"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-electric/10 to-indigo/10 blur-xl" />

            <div className="relative z-10">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-offwhite/50">MODULE</span>
                <span className="text-cyan">● ACTIVE</span>
              </div>

              <h2 className="text-lg font-medium mb-1">
                {demo.name}
              </h2>

              <p className="text-offwhite/60 text-sm">
                {demo.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EXPANDED PANEL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center px-6"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-navy/90 backdrop-blur-xl" />

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative z-10 max-w-4xl w-full border border-white/10 rounded-xl p-8 bg-charcoal/90"
            >

              {/* Close */}
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gradient">
                  {selected.name}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-offwhite/50 hover:text-offwhite"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="text-offwhite/60 mb-8">
                {selected.details}
              </p>

              {/* Architecture */}
              <div className="mb-8">
                <div className="text-xs text-offwhite/50 tracking-widest mb-4">
                  SYSTEM ARCHITECTURE
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {selected.architecture.map((step: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="px-3 py-2 border border-white/10 rounded-lg text-sm bg-white/5">
                        {step}
                      </div>
                      {i !== selected.architecture.length - 1 && (
                        <span className="text-offwhite/40">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {["Accuracy", "Confidence", "Stability"].map((m) => (
                  <div
                    key={m}
                    className="border border-white/10 p-4 rounded-lg text-center bg-white/5"
                  >
                    <div className="text-xs text-offwhite/50 mb-1">{m}</div>
                    <div className="text-electric text-lg">
                      {(Math.random() * 0.3 + 0.7).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Launch */}
              <button className="px-6 py-3 bg-electric text-white rounded-lg shadow-glow hover:scale-105 transition">
                Launch Interactive Demo →
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}