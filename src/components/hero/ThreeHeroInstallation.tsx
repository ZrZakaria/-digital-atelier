'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// ─── Particle Ring ─────────────────────────────────────────────────
function ParticleRing({ radius, count, color, speed, spread }: {
  radius: number;
  count: number;
  color: string;
  speed: number;
  spread: number;
}) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r = radius + (Math.random() - 0.5) * spread;
      arr[i * 3] = r * Math.cos(angle);
      arr[i * 3 + 1] = (Math.random() - 0.5) * spread * 0.3;
      arr[i * 3 + 2] = r * Math.sin(angle);
    }
    return arr;
  }, [count, radius, spread]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += speed * delta;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color={color as any}
        transparent
        opacity={0.65}
        sizeAttenuation
      />
    </points>
  );
}

// ─── Connection Lines from Center ──────────────────────────────────
function ConnectionLines() {
  const lineRef = useRef<THREE.LineSegments>(null);
  const count = 20;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 6);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const r1 = 0.55;
      const r2 = 1.4 + Math.random() * 0.5;
      arr[i * 6] = r1 * Math.cos(angle);
      arr[i * 6 + 1] = (Math.random() - 0.5) * 0.2;
      arr[i * 6 + 2] = r1 * Math.sin(angle);
      arr[i * 6 + 3] = r2 * Math.cos(angle + 0.15);
      arr[i * 6 + 4] = (Math.random() - 0.5) * 0.4;
      arr[i * 6 + 5] = r2 * Math.sin(angle + 0.15);
    }
    return arr;
  }, []);

  useFrame((_state, delta) => {
    if (lineRef.current) {
      lineRef.current.rotation.y += 0.0008 * delta;
    }
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count * 2}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#E34AFF" transparent opacity={0.2} />
    </lineSegments>
  );
}

// ─── Core Orb ───────────────────────────────────────────────────────
function CoreOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial
        color="#365CFF"
        emissive="#365CFF"
        emissiveIntensity={0.4}
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}

// ─── Installation ───────────────────────────────────────────────────
function ThreeInstallation() {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div className="relative w-full aspect-square max-w-md mx-auto">
        <div
          className="absolute inset-0 rounded-full flex items-center justify-center"
          style={{
            background: 'radial-gradient(circle at 40% 40%, #E34AFF30, #365CFF10, transparent 70%)',
          }}
        >
          <div
            className="w-24 h-24 rounded-full"
            style={{ background: 'radial-gradient(circle at 35% 35%, #E34AFF, #365CFF)' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.25} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#E34AFF" />
        <pointLight position={[-4, -3, 2]} intensity={0.6} color="#365CFF" />
        <pointLight position={[0, -4, 3]} intensity={0.4} color="#FF5C35" />

        <CoreOrb />
        <ConnectionLines />
        <ParticleRing radius={1.5} count={50} color="#FF5C35" speed={0.12} spread={0.25} />
        <ParticleRing radius={2.0} count={70} color="#D9FF3F" speed={-0.08} spread={0.35} />
        <ParticleRing radius={2.5} count={55} color="#365CFF" speed={0.06} spread={0.4} />
        <ParticleRing radius={3.0} count={40} color="#E34AFF" speed={-0.05} spread={0.5} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      </Canvas>
    </div>
  );
}

// ─── Public Component ───────────────────────────────────────────────
export default function ThreeHeroInstallation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      className="relative hidden lg:block"
    >
      {/* Glow behind canvas */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E34AFF 0%, #365CFF 40%, transparent 70%)' }}
      />
      <ThreeInstallation />
    </motion.div>
  );
}
