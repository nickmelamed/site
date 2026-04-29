export type DemoRun = {
  id: string;
  name: string;
  description: string;

  input: {
    title: string;
    content: string;
  };

  steps: {
    name: string;
    duration?: number; // (ms)
    logs?: string[];
  }[];

  output: {
    type: "text" | "log" | "structured";
    content: any;
  };

  metrics: {
    name: string;
    value: number;
  }[];
};