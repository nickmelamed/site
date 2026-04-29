import { ddgptRun } from "./ddgpt";
// import others here

export const demoRegistry = {
  ddgpt: ddgptRun,
  // coclaims: coclaimsRun,
  // claimsrl: claimsRLRun,
};

export type DemoKey = keyof typeof demoRegistry;