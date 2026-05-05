import ParticleBackground from "./Particles";
import TypingHeadline from "./TypingHeadline";

export default function Hero() {
  return (
    <main className="relative screen-center text-center overflow-hidden">

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

        <button className="btn btn-primary">
          Enter Demo Lab
        </button>

      </div>
    </main>
  );
}