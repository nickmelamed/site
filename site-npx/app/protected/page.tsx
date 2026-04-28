"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const demos = [
  {
    name: "Claims RL",
    description: "RL-based reasoning engine for claim validation.",
    details:
      "Optimizes evidence selection and reasoning strategies via reinforcement learning. Includes reward shaping, debate mechanisms, and uncertainty handling.",
  },
  {
    name: "CoClaims",
    description: "LLM-powered claim evaluation system.",
    details:
      "Combines retrieval, structured reasoning, and metric scoring (ESS, ECS, etc.) to evaluate claim validity with explainability.",
  },
  {
    name: "DDGPT",
    description: "Autonomous due diligence agent.",
    details:
      "Processes financial filings and news to generate structured investment insights using RAG pipelines and LLM reasoning.",
  },
];

export default function ControlCenter() {
  const [selected, setSelected] = useState(demos[0]);
  const [logs, setLogs] = useState<string[]>([]);

  // Fake system logs
  useEffect(() => {
    const messages = [
      "Initializing system...",
      "Loading models...",
      "Connecting to knowledge base...",
      "System ready.",
    ];

    let i = 0;
    const interval = setInterval(() => {
      setLogs((prev) => [...prev, messages[i]]);
      i++;
      if (i >= messages.length) clearInterval(interval);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[180px] top-[-100px] left-[-100px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[180px] bottom-[-100px] right-[-100px]" />
      </div>

      {/* Layout */}
      <div className="relative z-10 grid grid-cols-12 gap-6 p-8">

        {/* LEFT: MODULES */}
        <div className="col-span-4 space-y-4">
          <div className="text-xs text-gray-500 tracking-widest mb-4">
            MODULES
          </div>

          {demos.map((demo) => (
            <motion.div
              key={demo.name}
              onClick={() => setSelected(demo)}
              className={`p-4 rounded-lg border cursor-pointer transition ${
                selected.name === demo.name
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-800 hover:border-gray-500 hover:bg-white/5"
              }`}
            >
              <div className="flex justify-between mb-2 text-xs">
                <span className="text-gray-500">MODULE</span>
                <span className="text-green-400">● ACTIVE</span>
              </div>

              <h2 className="text-lg font-medium">{demo.name}</h2>
              <p className="text-sm text-gray-400">{demo.description}</p>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: DETAIL PANEL */}
        <div className="col-span-8 border border-gray-800 rounded-xl p-6 bg-black/40 backdrop-blur">

          <div className="text-xs text-gray-500 tracking-widest mb-2">
            SYSTEM OVERVIEW
          </div>

          <h2 className="text-2xl font-semibold mb-4">
            {selected.name}
          </h2>

          <p className="text-gray-400 mb-6">
            {selected.details}
          </p>

          {/* Fake metrics */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["Accuracy", "Stability", "Confidence"].map((metric) => (
              <div
                key={metric}
                className="border border-gray-800 p-4 rounded-lg text-center"
              >
                <div className="text-xs text-gray-500 mb-2">
                  {metric.toUpperCase()}
                </div>
                <div className="text-xl text-blue-400">
                  {(Math.random() * 0.3 + 0.7).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Launch button */}
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            Launch Module →
          </button>
        </div>
      </div>

      {/* TERMINAL */}
      <div className="relative z-10 mx-8 mt-6 border border-gray-800 rounded-lg p-4 bg-black/60 text-sm font-mono text-green-400 h-40 overflow-hidden">

        <div className="text-gray-500 mb-2">SYSTEM LOG</div>

        {logs.map((log, i) => (
          <div key={i} className="animate-pulse">
            &gt; {log}
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="relative z-10 px-8 py-4 flex justify-between text-xs text-gray-600 tracking-widest">
        <span>STATUS: OPERATIONAL</span>
        <span>ACCESS LEVEL: AUTHORIZED</span>
      </div>
    </main>
  );
}