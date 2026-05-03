"use client";

import Particles from "@tsparticles/react";
import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "rgb(56, 189, 248)" }, // matches --primary
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.5,
          },
          links: {
            enable: true,
            color: "rgb(59, 130, 246)",
            opacity: 0.2,
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
}