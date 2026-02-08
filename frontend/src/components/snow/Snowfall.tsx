"use client";

import { useMemo } from "react";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function Snowfall({ count = 50 }: { count?: number }) {
  const snowflakes = useMemo<Snowflake[]>(() => {
    const rand = seededRandom(42);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand() * 100,
      size: 4 + rand() * 6,
      duration: 8 + rand() * 12,
      delay: rand() * 10,
      opacity: 0.4 + rand() * 0.6,
    }));
  }, [count]);

  return (
    <div
      className="fixed inset-0 z-50 pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white motion-reduce:hidden"
          style={{
            left: `${flake.left}%`,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite, snow-sway ${flake.duration * 0.8}s ease-in-out ${flake.delay}s infinite`,
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}
