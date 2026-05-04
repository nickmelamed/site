import ParticleBackground from "./Particles";
import TypingHeadline from "./TypingHeadline";

export default function Hero() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">

      <ParticleBackground />

      <div className="relative z-10 stack-lg">

        <h1 className="text-title leading-tight">

          <span className="text-gradient">
            <TypingHeadline />
          </span>

          <br />

          <span className="text-secondary">
            Before They Act.
          </span>
        </h1>

        <button className="btn-primary text-body">
          Enter Demo Lab
        </button>

      </div>
    </main>
  );
}