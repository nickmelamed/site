"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const demos = [
  {
    name: "Claims RL",
    description: "Reinforcement learning for evidence selection and claim reasoning.",
    status: "ACTIVE",
    link: "/protected/claims-rl",
  },
  {
    name: "CoClaims",
    description: "LLM-based claim evaluation with structured scoring.",
    status: "ACTIVE",
    link: "/protected/coclaims",
  },
  {
    name: "DDGPT",
    description: "Autonomous due diligence agent for financial analysis.",
    status: "ACTIVE",
    link: "/protected/ddgpt",
  },
];

export default function Protected() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen bg-black text-white px-8 py-16 overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[180px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-6xl mx-auto mb-12">
        {/* <div className="text-xs tracking-widest text-gray-500 mb-2">
          AI SYSTEM CONTROL CENTER
        </div> */}
        <h1 className="text-4xl font-semibold">
          Demo Lab
        </h1>
        <p className="text-gray-400 mt-2">
          Interactive modules showcasing applied AI systems.
        </p>
      </div>

      {/* Grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {demos.map((demo, i) => (
          <motion.div
            key={demo.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(demo.name)}
            className={`cursor-pointer p-6 rounded-xl border transition ${
              selected === demo.name
                ? "border-blue-500 bg-blue-500/10"
                : "border-gray-800 hover:border-gray-500 hover:bg-white/5"
            }`}
          >

            {/* Status */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs text-gray-500 tracking-widest">
                MODULE
              </span>
              <span className="text-xs text-green-400">
                ● {demo.status}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-medium mb-2">
              {demo.name}
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              {demo.description}
            </p>

            {/* Action */}
            <a
              href={demo.link}
              className="text-sm text-blue-400 hover:underline"
            >
              Launch →
            </a>

          </motion.div>
        ))}
      </div>

      {/* Bottom system bar */}
      {/* <div className="relative z-10 max-w-6xl mx-auto mt-16 flex justify-between text-xs text-gray-600 tracking-widest">
        <span>STATUS: ALL SYSTEMS OPERATIONAL</span>
        <span>ACCESS LEVEL: AUTHORIZED</span>
      </div> */}
    </main>
  );
}