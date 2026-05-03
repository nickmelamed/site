"use client";

import { DemoRun } from "@/demos/types";
import { useDemoExecution } from "./useDemoExecution";

export default function DemoRunner({
  run,
  active,
}: {
  run: DemoRun;
  active: boolean;
}) {
  const { currentStep, logs, complete } =
    useDemoExecution(run, active);

  return (
    <div className="space-y-8">

      {/* INPUT */}
      <div className="panel p-4">
        <div className="text-xs text-muted mb-2">INPUT</div>
        <h3 className="text-lg font-medium">{run.input.title}</h3>
        <p className="text-muted text-sm mt-1">
          {run.input.content}
        </p>
      </div>

      {/* PIPELINE */}
      <div>
        <div className="text-xs text-muted mb-3">PIPELINE</div>

        <div className="flex flex-wrap gap-3 items-center">
          {run.steps.map((step, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className={`px-3 py-2 rounded-lg text-sm border transition ${
                  i === currentStep
                    ? "border-electric text-electric shadow-glow"
                    : i < currentStep
                    ? "border-electric text-electric/70"
                    : "border-subtle text-muted"
                }`}
              >
                {step.name}
              </div>

              {i !== run.steps.length - 1 && (
                <span className="text-muted">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* LOGS */}
      <div className="panel p-4 font-mono text-xs text-electric h-40 overflow-y-auto">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>

      {/* OUTPUT */}
      {complete && (
        <div className="panel p-4">
          <div className="text-xs text-muted mb-2">OUTPUT</div>

          {run.output.type === "text" && (
            <p className="text-offwhite/80 whitespace-pre-line">
              {run.output.content}
            </p>
          )}

          {run.output.type === "log" && (
            <div className="font-mono text-sm text-electric space-y-1">
              {run.output.content.map((line: string, i: number) => (
                <div key={i}>› {line}</div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* METRICS */}
      {complete && (
        <div className="grid grid-cols-3 gap-4">
          {run.metrics.map((m, i) => (
            <div key={i} className="panel p-4 text-center">
              <div className="text-xs text-muted">
                {m.name}
              </div>
              <div className="text-electric text-lg">
                {m.value.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}