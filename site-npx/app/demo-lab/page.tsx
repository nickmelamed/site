"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { demoRegistry, DemoKey } from "@/demos/registry";
import DemoRunner from "@/components/demo/DemoRunner";

const demos = Object.entries(demoRegistry);

export default function ControlCenter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selected = searchParams.get("demo") as DemoKey | null;
  const run = selected && demoRegistry[selected] ? demoRegistry[selected] : null;

  const [mode, setMode] = useState<"preview" | "run">("preview");

  useEffect(() => {
    setMode("preview");
  }, [selected]);

  const openDemo = (id: DemoKey) => {
    setMode("preview");
    router.push(`?demo=${id}`, { scroll: false });
  };

  const closeDemo = () => {
    router.push("?", { scroll: false });
  };

  return (
    <main className="relative min-h-screen bg-navy text-offwhite overflow-hidden p-8">

      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      {/* HEADER */}
      <div className="relative z-10 max-w-6xl mx-auto mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gradient">
          Demo Lab
        </h1>

        <button
          onClick={() => router.push("/")}
          className="text-tertiary hover:text-primary text-body"
        >
          ← Back
        </button>
      </div>

      {/* Instruction */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-3xl mx-auto text-center mb-10"
      >
        <p className="text-subtitle text-secondary">
          Choose a system to see how AI turns raw data into decisions.
        </p>
      </motion.div>

      {/* DEMO GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {demos.map(([key, demo]) => (
          <motion.div
            key={key}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => openDemo(demo.id as DemoKey)}
            className="relative group cursor-pointer panel p-5 hover-glow"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-electric/10 to-electric/30 blur-xl" />

            <div className="relative z-10">
              <div className="flex justify-between text-xs mb-2">
                <span className="text-green-400">● ACTIVE</span>
              </div>

              <h2 className="text-subtitle">{demo.name}</h2>
              <p className="text-secondary text-body">{demo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative z-10 mt-12 text-center">
        <p className="text-sm text-muted mb-3">
          Interested in something similar?
        </p>

        <button
          onClick={() => router.push("/work")}
          className="btn-primary"
        >
          Work With Me →
        </button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {run && (
          <motion.div
            key={mode}
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
              className="relative z-10 max-w-4xl w-full panel p-8"
            >
              {/* Header */}
              <div className="flex justify-between mb-6">
                <h2 className="text-2xl font-semibold text-gradient">
                  {run.name}
                </h2>

                <button
                  onClick={closeDemo}
                  className="text-offwhite/50 hover:text-offwhite"
                >
                  ✕
                </button>
              </div>

              {/* PREVIEW */}
              {mode === "preview" && (
                <div>
                  <p className="text-muted mb-6">
                    {run.description}
                  </p>

                  {/* SYSTEM FLOW */}
                  <div className="mb-8">
                    <div className="text-caption text-secondary mb-3">
                      SYSTEM FLOW
                    </div>

                    <div className="flex flex-wrap gap-3 items-center">
                      {run.steps.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="panel px-3 py-2 text-sm">
                            {step.name}
                          </div>
                          {i !== run.steps.length - 1 && (
                            <span className="text-muted">→</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* METRICS */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {run.metrics.map((m, i) => (
                      <div key={i} className="panel p-4 text-center">
                        <div className="text-caption text-secondary">{m.name}</div>
                        <div className="text-subtitle text-electric">
                          {m.value.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* RUN BUTTON */}
                  <button
                    onClick={() => {
                      document.body.classList.add("system-flash");

                      setTimeout(() => {
                        document.body.classList.remove("system-flash");
                        setMode("run");
                      }, 400);
                    }}
                    className="btn-primary"
                  >
                    Run Demo →
                  </button>
                </div>
              )}

              {/* RUN */}
              {mode === "run" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <DemoRunner run={run} active={true} />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}