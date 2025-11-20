import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles, Billboard } from '@react-three/drei';
import * as THREE from 'three';

type IconType = 'ruler' | 'calendar' | 'electricity' | 'water' | 'waste' | 'security';

// Create a simple glow texture using canvas (avoid external URL 404)
const createGlowTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.5, 'rgba(255,255,255,0.5)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);
  }
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
};
const glowTexture = createGlowTexture();

const IconShape = ({ type, color }: { type: IconType, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const target = meshRef.current || groupRef.current;
    if (target) {
      // Default slow rotation
      target.rotation.y += delta * 0.5;
      
      // Hover effect: faster rotation and scale pulse
      if (hovered) {
         target.rotation.y += delta * 3;
         target.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
         target.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  if (type === 'ruler') {
    return (
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <mesh 
            ref={meshRef} 
            rotation={[0, 0, Math.PI / 4]}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
          <boxGeometry args={[1.8, 0.4, 0.1]} />
          <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
        </mesh>
      </Float>
    );
  }

  if (type === 'calendar') {
    return (
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
        <group 
            ref={groupRef}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Base */}
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[1.2, 1.2, 0.2]} />
                <meshStandardMaterial color={color} metalness={0.3} roughness={0.4} />
            </mesh>
            {/* Top binding */}
            <mesh position={[0, 0.5, 0.15]}>
                <boxGeometry args={[1.2, 0.3, 0.1]} />
                <meshStandardMaterial color="#ef4444" />
            </mesh>
        </group>
      </Float>
    );
  }

  if (type === 'electricity') {
    return (
      <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
        <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            {/* Lightning Bolt Construction */}
            <mesh position={[0.2, 0.3, 0]} rotation={[0, 0, 0.5]}>
                <boxGeometry args={[0.3, 1.2, 0.2]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
            </mesh>
            <mesh position={[-0.2, -0.3, 0]} rotation={[0, 0, 0.5]}>
                <boxGeometry args={[0.3, 1.2, 0.2]} />
                <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
            </mesh>
        </group>
      </Float>
    );
  }

  if (type === 'water') {
    return (
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            {/* Drop Shape */}
            <mesh position={[0, -0.3, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshPhysicalMaterial color={color} transmission={0.6} roughness={0.1} metalness={0.1} thickness={1} />
            </mesh>
            <mesh position={[0, 0.3, 0]}>
                <coneGeometry args={[0.5, 1, 32]} />
                <meshPhysicalMaterial color={color} transmission={0.6} roughness={0.1} metalness={0.1} thickness={1} />
            </mesh>
        </group>
      </Float>
    );
  }

  if (type === 'waste') {
    return (
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            {/* Tank 1 */}
            <mesh position={[-0.3, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 1, 16]} />
                <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
            </mesh>
            {/* Tank 2 */}
            <mesh position={[0.3, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 1, 16]} />
                <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
            </mesh>
            {/* Connecting Pipe */}
            <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI/2]}>
                <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
            </mesh>
             {/* Base */}
            <mesh position={[0, -0.55, 0]}>
                <boxGeometry args={[1, 0.1, 0.5]} />
                <meshStandardMaterial color="#475569" metalness={0.5} roughness={0.5} />
            </mesh>
        </group>
      </Float>
    );
  }

  if (type === 'security') {
    return (
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.2}>
        <group ref={groupRef} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
            {/* Lock Body */}
            <mesh position={[0, -0.2, 0]}>
                <boxGeometry args={[0.8, 0.7, 0.3]} />
                <meshStandardMaterial color={color} metalness={0.7} roughness={0.2} />
            </mesh>
            {/* Shackle */}
            <mesh position={[0, 0.35, 0]}>
                <torusGeometry args={[0.3, 0.1, 16, 32, Math.PI]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.8} roughness={0.2} />
            </mesh>
        </group>
      </Float>
    );
  }

  return null;
};

export const Icon3D = ({ type, color }: { type: IconType, color: string }) => {
  return (
    <div className="w-16 h-16 -ml-2">
      <Canvas gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0, 4], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color={color} />
        
        <IconShape type={type} color={color} />
        
        {/* 3D Ray / Glow Effect */}
        <Billboard position={[0, 0, -2]}>
            <sprite scale={[4, 4, 1]}>
                <spriteMaterial map={glowTexture} color={color} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
            </sprite>
        </Billboard>
        <Sparkles count={20} scale={3} size={2} speed={0.4} opacity={0.5} color={color} />
      </Canvas>
    </div>
  );
};
