export default function Protected() {
  const demos = [
    {
      name: "Claims RL",
      description: "Reinforcement learning system for claim verification.",
      link: "/protected/claims-rl",
    },
    {
      name: "CoClaims",
      description: "LLM-powered claim evaluation with evidence scoring.",
      link: "/protected/coclaims",
    },
    {
      name: "DDGPT",
      description: "Automated due diligence agent for financial analysis.",
      link: "/protected/ddgpt",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-20">
      <h1 className="text-4xl font-semibold mb-12 text-center">
        Demo Lab
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {demos.map((demo) => (
          <a
            key={demo.name}
            href={demo.link}
            className="border border-gray-800 p-6 rounded-xl hover:border-gray-500 transition hover:scale-[1.02]"
          >
            <h2 className="text-xl font-medium mb-3">{demo.name}</h2>
            <p className="text-gray-400 text-sm">{demo.description}</p>
          </a>
        ))}
      </div>
    </main>
  );
}