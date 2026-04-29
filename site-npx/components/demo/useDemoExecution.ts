import { useEffect, useState } from "react";
import { DemoRun } from "@/demos/types";

export function useDemoExecution(run: DemoRun | null, active: boolean) {
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!run || !active) return;

    let stepIndex = 0;
    setLogs([]);
    setComplete(false);

    const runSteps = async () => {
      for (const step of run.steps) {
        setCurrentStep(stepIndex);

        // emit logs gradually
        if (step.logs) {
          for (const log of step.logs) {
            setLogs((prev) => [...prev, `› ${log}`]);
            await new Promise((r) => setTimeout(r, 300));
          }
        }

        await new Promise((r) =>
          setTimeout(r, step.duration || 800)
        );

        stepIndex++;
      }

      setComplete(true);
    };

    runSteps();
  }, [run, active]);

  return { currentStep, logs, complete };
}