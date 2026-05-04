import ParticleBackground from "./Particles";
import TypingHeadline from "./TypingHeadline";

export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden text-offwhite">

      {/* PARTICLES */}
      <ParticleBackground />

      {/* CONTENT */}
      <div className="relative z-10">

        <h1 className="text-title leading-tight">
          
          <span className="text-gradient">
            <TypingHeadline />
          </span>

          <br />

          <span className="text-secondary">
            Before They Act.
          </span>
        </h1>

        <button className="mt-10 btn-primary">
          Enter Demo Lab
        </button>

      </div>
    </main>
  );
}