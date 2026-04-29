import { DemoRun } from "./types";

export const ddgptRun: DemoRun = {
  id: "ddgpt",
  name: "DDGPT",
  description: "Autonomous due diligence agent.",

  input: {
    title: "Company: NVIDIA",
    content: "Generate an investment committee memo from filings and news",
  },

  steps: [
    { name: "Document Ingestion" },
    { name: "Parsing" },
    { name: "RAG Pipeline" },
    { name: "LLM Synthesis" },
  ],

  output: {
    type: "text",
    content: `NVIDIA demonstrates strong revenue growth driven by AI demand...`,
  },

  metrics: [
    { name: "Coverage", value: 0.92 },
    { name: "Confidence", value: 0.88 },
    { name: "Consistency", value: 0.90 },
  ],
};