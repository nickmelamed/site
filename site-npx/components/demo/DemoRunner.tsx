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
    <div className="stack-lg">

      {/* INPUT */}
      <div className="panel-base panel-sm stack-sm">
        <div className="text-caption text-secondary">INPUT</div>
        <h3 className="text-subtitle">{run.input.title}</h3>
        <p className="text-secondary text-body">
          {run.input.content}
        </p>
      </div>

      {/* PIPELINE */}
      <div className="stack-sm">
        <div className="text-caption text-secondary">PIPELINE</div>

        <div className="inline-row inline-sm flex-wrap items-center">
          {run.steps.map((step, i) => (
            <div key={i} className="inline-row inline-sm">
              <div
                className={`px-3 py-2 rounded-lg text-body border transition ${
                  i === currentStep
                    ? "border-accent text-accent glow-sm"
                    : i < currentStep
                    ? "border-accent text-accent/70"
                    : "border-subtle text-muted"
                }`}
              >
                {step.name}
              </div>

              {i !== run.steps.length - 1 && (
                <span className="text-secondary">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* LOGS */}
      <div className="panel-base panel-sm font-mono text-caption text-accent h-40 overflow-y-auto">
        {logs.map((log, i) => (
          <div key={i}>{log}</div>
        ))}
      </div>

      {/* OUTPUT */}
      {complete && (
        <div className="panel-base panel-sm stack-sm">
          <div className="text-caption text-secondary">OUTPUT</div>

          {run.output.type === "text" && (
            <p className="text-secondary text-body whitespace-pre-line">
              {run.output.content}
            </p>
          )}
        </div>
      )}

      {/* METRICS */}
      {complete && (
        <div className="grid-responsive inline-md">
          {run.metrics.map((m, i) => (
            <div key={i} className="panel-base panel-sm text-center stack-xs">
              <div className="text-caption text-secondary">
                {m.name}
              </div>
              <div className="text-subtitle text-accent">
                {m.value.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}