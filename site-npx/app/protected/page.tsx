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
    <main className="relative min-h-screen bg-black text-white overflow-hidden p-8">

      <div className="relative z-10 max-w-6xl mx-auto mb-8 flex justify-between items-center">

      {/* Left: Title */}
      <div>
        <div className="text-xs text-gray-500 tracking-widest">
          AI SYSTEM CONTROL CENTER
        </div>
        <h1 className="text-2xl font-semibold">
          Demo Lab
        </h1>
      </div>

      {/* Right: Status */}
      <div className="text-xs text-gray-500 tracking-widest text-right">
        <div>STATUS: OPERATIONAL</div>
        <div>ACCESS: AUTHORIZED</div>
      </div>

    </div>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[180px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* MODULE GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {demos.map((demo) => (
          <motion.div
            key={demo.name}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(demo)}
            className="relative group cursor-pointer border border-gray-800 p-5 rounded-xl overflow-hidden"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />

            <div className="relative z-10">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-500">MODULE</span>
                <span className="text-green-400">● ACTIVE</span>
              </div>

              <h2 className="text-lg font-medium mb-1">{demo.name}</h2>
              <p className="text-gray-400 text-sm">{demo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* EXPANDED PANEL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-20 flex items-center justify-center px-6"
          >
            <div className="max-w-4xl w-full border border-gray-800 rounded-xl p-8 bg-black">

              {/* Close */}
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold">
                  {selected.name}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-gray-500 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-8">
                {selected.details}
              </p>

              {/* Architecture preview */}
              <div className="mb-8">
                <div className="text-xs text-gray-500 tracking-widest mb-4">
                  SYSTEM ARCHITECTURE
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  {selected.architecture.map((step: string, i: number) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="px-3 py-2 border border-gray-700 rounded-lg text-sm bg-white/5">
                        {step}
                      </div>
                      {i !== selected.architecture.length - 1 && (
                        <span className="text-gray-500">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Fake metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {["Accuracy", "Confidence", "Stability"].map((m) => (
                  <div
                    key={m}
                    className="border border-gray-800 p-4 rounded-lg text-center"
                  >
                    <div className="text-xs text-gray-500 mb-1">{m}</div>
                    <div className="text-blue-400 text-lg">
                      {(Math.random() * 0.3 + 0.7).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              {/* Launch */}
              <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200">
                Launch Interactive Demo →
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}