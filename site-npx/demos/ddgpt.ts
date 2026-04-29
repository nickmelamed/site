import { DemoRun } from "./types";

export const ddgptRun: DemoRun = {
  id: "ddgpt",
  name: "Due Diligence GPT",
  description: "Autonomous due diligence agent.",

  input: {
    title: "Company: NVIDIA",
    content: "Generate an investment committee memo from filings and news",
  },

  steps: [
  {
    name: "Document Ingestion",
    duration: 800,
    logs: ["Loading filings...", "Parsing documents..."],
  },
  {
    name: "RAG Pipeline",
    duration: 1200,
    logs: ["Embedding chunks...", "Retrieving relevant context..."],
  },
  {
    name: "LLM Synthesis",
    duration: 1500,
    logs: ["Generating memo...", "Refining output..."],
  },
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