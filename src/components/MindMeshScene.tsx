"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface NodeData {
  id: number;
  basePos: THREE.Vector3;
  color: string;
  size: number;
  type: "sphere" | "cube" | "ring";
  speed: number;
  phaseOffset: number;
}

function NetworkGraph({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const scrollProgressRef = useRef(0);

  // Generate node positions deterministically
  const nodeCount = isMobile ? 8 : 14;
  const nodes = useMemo<NodeData[]>(() => {
    const arr: NodeData[] = [];
    const colors = ["#00E5FF", "#3B82F6", "#FFD21F", "#00E5FF", "#FFFFFF"];

    for (let i = 0; i < nodeCount; i++) {
      const radius = 2.2 + (i % 3) * 0.7;
      const angle = (i / nodeCount) * Math.PI * 2 + (i % 2 === 0 ? 0.3 : 0);
      const y = ((i % 5) - 2) * 0.9;

      arr.push({
        id: i,
        basePos: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        color: colors[i % colors.length],
        size: 0.18 + (i % 4) * 0.06,
        type: i % 5 === 0 ? "cube" : i % 4 === 0 ? "ring" : "sphere",
        speed: 0.7 + (i % 3) * 0.3,
        phaseOffset: i * 0.8,
      });
    }
    return arr;
  }, [nodeCount]);

  // Pre-calculate stable connecting node pairs once without runtime setState
  const connectionPairs = useMemo(() => {
    const pairs: [THREE.Vector3, THREE.Vector3, string][] = [];
    const maxDist = isMobile ? 3.2 : 3.6;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].basePos.distanceTo(nodes[j].basePos) < maxDist) {
          const color =
            pairs.length % 3 === 0
              ? "#00E5FF"
              : pairs.length % 2 === 0
              ? "#FFD21F"
              : "#3B82F6";
          pairs.push([nodes[i].basePos, nodes[j].basePos, color]);
        }
      }
    }
    return pairs;
  }, [nodes, isMobile]);

  // Track scroll without re-rendering React component
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        scrollProgressRef.current = window.scrollY / totalHeight;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth rotation lerp reading ref without React state updates
    const targetRotY =
      state.pointer.x * 0.35 + scrollProgressRef.current * Math.PI * 2;
    const targetRotX = state.pointer.y * 0.25;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      delta * 2.5
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      delta * 2.5
    );
  });

  return (
    <group ref={groupRef}>
      {/* Pre-computed High-Performance Connecting Lines */}
      {connectionPairs.map(([p1, p2, color], idx) => (
        <Line
          key={idx}
          points={[p1, p2]}
          color={color}
          lineWidth={1.5}
          transparent
          opacity={0.35}
        />
      ))}

      {/* Render 3D Floating Nodes */}
      {nodes.map((node) => (
        <Float
          key={node.id}
          speed={node.speed * 1.2}
          rotationIntensity={1}
          floatIntensity={1.2}
          position={node.basePos.toArray()}
        >
          {node.type === "sphere" && (
            <mesh>
              <sphereGeometry args={[node.size, 20, 20]} />
              <meshStandardMaterial
                color={node.color}
                roughness={0.2}
                metalness={0.6}
                emissive={node.color}
                emissiveIntensity={0.2}
              />
            </mesh>
          )}

          {node.type === "cube" && (
            <mesh rotation={[0.4, 0.5, 0]}>
              <boxGeometry
                args={[node.size * 1.5, node.size * 1.5, node.size * 1.5]}
              />
              <meshStandardMaterial
                color={node.color}
                roughness={0.25}
                metalness={0.5}
              />
            </mesh>
          )}

          {node.type === "ring" && (
            <group rotation={[Math.PI / 4, 0, 0]}>
              <mesh>
                <torusGeometry args={[node.size * 1.6, 0.03, 12, 24]} />
                <meshStandardMaterial
                  color="#00E5FF"
                  roughness={0.1}
                  emissive="#00E5FF"
                  emissiveIntensity={0.3}
                />
              </mesh>
            </group>
          )}
        </Float>
      ))}

      {/* Central Holographic AI Core Ring */}
      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={0.4}>
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[1.5, 0.04, 12, 36]} />
          <meshStandardMaterial
            color="#00E5FF"
            roughness={0.1}
            emissive="#00E5FF"
            emissiveIntensity={0.35}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function MindMeshScene() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.25]}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[8, 8, 8]} intensity={1.5} />
        <directionalLight
          position={[-8, -8, -5]}
          intensity={0.8}
          color="#00E5FF"
        />
        <pointLight position={[0, 0, 4]} intensity={1} color="#00E5FF" />

        <NetworkGraph isMobile={isMobile} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
