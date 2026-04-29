"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { demoRegistry } from "@/demos/registry";
import { DemoKey } from "@/demos/registry";
import DemoRunner from "@/components/demo/DemoRunner";

const demos = Object.values(demoRegistry);

export default function ControlCenter() {
  const [selected, setSelected] = useState<DemoKey | null>(null);

  const run = selected ? demoRegistry[selected] : null;

  return (
    <main className="relative min-h-screen bg-navy text-offwhite overflow-hidden p-8">

      {/* Background */}
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
      </div>

      {/* MODULE GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {demos.map((demo) => (
          <motion.div
            key={demo.id}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(demo.id as DemoKey)}
            className="relative group cursor-pointer border border-white/10 p-5 rounded-xl bg-charcoal/60 backdrop-blur"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-electric/10 to-indigo/10 blur-xl" />

            <div className="relative z-10">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-offwhite/50">MODULE</span>
                <span className="text-green-400">● ACTIVE</span>
              </div>

              <h2 className="text-lg font-medium">{demo.name}</h2>
              <p className="text-offwhite/60 text-sm">{demo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {run && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-20 flex items-center justify-center px-6"
          >
            <div className="absolute inset-0 bg-navy/90 backdrop-blur-xl" />

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative z-10 max-w-4xl w-full border border-white/10 rounded-xl p-8 bg-charcoal/90"
            >
              {/* Header */}
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gradient">
                  {run.name}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-offwhite/50 hover:text-offwhite"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6 text-sm text-offwhite/60">
                INPUT: {run.input.title}
              </div>

              {/* running via DemoRunner */}
              <DemoRunner run={run} />

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}