import ParticleBackground from "./Particles";
import TypingHeadline from "./TypingHeadline";

export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

      {/* PARTICLES = SIGNALS */}
      <ParticleBackground />

      {/* CONTENT */}
      <div className="relative z-10">

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
          <TypingHeadline />
          <br />
          <span className="text-offwhite">
            Before They Act.
          </span>
        </h1>

        <button className="mt-10 px-6 py-3 bg-electric text-white rounded-xl shadow-glow hover:scale-105 transition">
          Enter Demo Lab
        </button>

      </div>
    </main>
  );
}