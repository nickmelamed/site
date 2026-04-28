"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#00D1FF" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.5,
          },
          links: {
            enable: true,
            color: "#2D9CDB",
            opacity: 0.2,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}