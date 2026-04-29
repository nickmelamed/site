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
    description?: string;
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