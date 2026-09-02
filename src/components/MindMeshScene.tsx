"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, OrbitControls, Environment, Ring } from "@react-three/drei";
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
  const [scrollProgress, setScrollProgress] = useState(0);

  // Generate node positions deterministically
  const nodeCount = isMobile ? 8 : 16;
  const nodes = useMemo<NodeData[]>(() => {
    const arr: NodeData[] = [];
    const colors = ["#FFD21F", "#111111", "#FFD21F", "#FFFFFF", "#111111"];
    
    for (let i = 0; i < nodeCount; i++) {
      const radius = 2.2 + (i % 3) * 0.7;
      const angle = (i / nodeCount) * Math.PI * 2 + (i % 2 === 0 ? 0.3 : 0);
      const y = ((i % 5) - 2) * 0.95;

      arr.push({
        id: i,
        basePos: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        color: colors[i % colors.length],
        size: 0.18 + (i % 4) * 0.07,
        type: i % 5 === 0 ? "cube" : i % 4 === 0 ? "ring" : "sphere",
        speed: 0.8 + (i % 3) * 0.4,
        phaseOffset: i * 0.8,
      });
    }
    return arr;
  }, [nodeCount]);

  // Track scroll position to rotate network
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress(window.scrollY / totalHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate node positions & connection threshold
  const [activeConnections, setActiveConnections] = useState<[THREE.Vector3, THREE.Vector3][]>([]);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Slow group rotation + mouse parallax effect
    const targetRotY = state.pointer.x * 0.4 + scrollProgress * Math.PI * 2;
    const targetRotX = state.pointer.y * 0.3;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, delta * 2);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, delta * 2);

    const time = state.clock.getElapsedTime();
    const currentPositions: THREE.Vector3[] = [];

    // Calculate current positions of floating nodes
    nodes.forEach((node, idx) => {
      const floatY = Math.sin(time * node.speed + node.phaseOffset) * 0.3;
      const floatX = Math.cos(time * (node.speed * 0.7) + node.phaseOffset) * 0.2;
      const pos = node.basePos.clone().add(new THREE.Vector3(floatX, floatY, 0));
      currentPositions[idx] = pos;
    });

    // Compute lines between nodes that are close
    const lines: [THREE.Vector3, THREE.Vector3][] = [];
    const maxDist = isMobile ? 3.0 : 3.5;

    for (let i = 0; i < currentPositions.length; i++) {
      for (let j = i + 1; j < currentPositions.length; j++) {
        const dist = currentPositions[i].distanceTo(currentPositions[j]);
        if (dist < maxDist) {
          lines.push([currentPositions[i], currentPositions[j]]);
        }
      }
    }

    if (lines.length !== activeConnections.length) {
      setActiveConnections(lines);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Connecting Lines */}
      {activeConnections.map(([p1, p2], idx) => (
        <Line
          key={idx}
          points={[p1, p2]}
          color={idx % 3 === 0 ? "#FFD21F" : "#111111"}
          lineWidth={1.5}
          transparent
          opacity={0.35}
        />
      ))}

      {/* Render 3D Nodes */}
      {nodes.map((node) => (
        <Float
          key={node.id}
          speed={node.speed * 1.5}
          rotationIntensity={1.2}
          floatIntensity={1.5}
          position={node.basePos.toArray()}
        >
          {node.type === "sphere" && (
            <mesh castShadow receiveShadow>
              <sphereGeometry args={[node.size, 32, 32]} />
              <meshStandardMaterial
                color={node.color}
                roughness={0.2}
                metalness={node.color === "#FFD21F" ? 0.4 : 0.8}
              />
            </mesh>
          )}

          {node.type === "cube" && (
            <mesh castShadow receiveShadow rotation={[0.4, 0.5, 0]}>
              <boxGeometry args={[node.size * 1.6, node.size * 1.6, node.size * 1.6]} />
              <meshStandardMaterial
                color={node.color}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
          )}

          {node.type === "ring" && (
            <group rotation={[Math.PI / 4, 0, 0]}>
              <mesh castShadow>
                <torusGeometry args={[node.size * 1.8, 0.03, 16, 32]} />
                <meshStandardMaterial color="#FFD21F" roughness={0.1} />
              </mesh>
            </group>
          )}
        </Float>
      ))}

      {/* Central Hero Core Accent Ring */}
      <Float speed={2} rotationIntensity={2} floatIntensity={0.5}>
        <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
          <torusGeometry args={[1.6, 0.04, 16, 64]} />
          <meshStandardMaterial color="#111111" roughness={0.2} />
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
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FFD21F" />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#FFD21F" />

        <NetworkGraph isMobile={isMobile} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
