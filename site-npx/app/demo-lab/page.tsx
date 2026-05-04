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
    <main className="relative min-h-screen bg-navy overflow-hidden">

      <div className="absolute inset-0 bg-hero-gradient opacity-80" />
      <div className="absolute inset-0 bg-glow-radial animate-pulseGlow" />
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="relative z-10 container-system stack-lg">

        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-title text-gradient">Demo Lab</h1>

          <button
            onClick={() => router.push("/")}
            className="text-tertiary hover:text-primary text-body"
          >
            ← Back
          </button>
        </div>

        {/* INSTRUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p className="text-subtitle text-secondary max-w-2xl mx-auto">
            Choose a system to see how AI turns raw data into decisions.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {demos.map(([key, demo]) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openDemo(demo.id as DemoKey)}
              className="relative group cursor-pointer panel p-5 hover-glow stack-sm"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-electric/10 to-electric/30 blur-xl" />

              <div className="flex justify-between text-caption">
                <span className="text-green-400">● ACTIVE</span>
              </div>

              <h2 className="text-subtitle">{demo.name}</h2>
              <p className="text-secondary text-body">{demo.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center stack-sm">
          <p className="text-caption text-secondary">
            Interested in something similar?
          </p>

          <button
            onClick={() => router.push("/work")}
            className="btn-primary text-body"
          >
            Work With Me →
          </button>
        </div>

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
              className="relative z-10 max-w-4xl w-full panel p-8 stack-lg"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-title text-gradient">{run.name}</h2>

                <button
                  onClick={closeDemo}
                  className="text-tertiary hover:text-primary"
                >
                  ✕
                </button>
              </div>

              {mode === "preview" && (
                <div className="stack-lg">
                  <p className="text-secondary text-body">{run.description}</p>

                  <button
                    onClick={() => {
                      document.body.classList.add("system-flash");
                      setTimeout(() => {
                        document.body.classList.remove("system-flash");
                        setMode("run");
                      }, 400);
                    }}
                    className="btn-primary text-body"
                  >
                    Run Demo →
                  </button>
                </div>
              )}

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