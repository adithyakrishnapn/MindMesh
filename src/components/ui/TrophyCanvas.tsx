"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function AbstractTrophyMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
      meshRef.current.rotation.x += delta * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1.3, 0]} />
        <meshStandardMaterial
          color="#FFD21F"
          roughness={0.15}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

export default function TrophyCanvas() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#FFFFFF" />
        <directionalLight position={[-5, -5, -5]} intensity={0.8} color="#FFD21F" />
        <AbstractTrophyMesh />
      </Canvas>
    </div>
  );
}
