"use client";

export default function GrainTexture() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[9990] opacity-[0.035] mix-blend-overlay overflow-hidden">
      <svg className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
