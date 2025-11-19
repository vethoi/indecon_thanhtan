import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const IconShape = ({ type, color }: { type: 'ruler' | 'calendar', color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Default slow rotation
      meshRef.current.rotation.y += delta * 0.2;
      
      // Hover effect: faster rotation and scale pulse
      if (hovered) {
         meshRef.current.rotation.y += delta * 2;
         meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
         meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
    if (groupRef.current) {
        // Default slow rotation
        groupRef.current.rotation.y += delta * 0.2;

        // Hover effect
        if (hovered) {
            groupRef.current.rotation.y += delta * 2;
            groupRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
        } else {
            groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
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

  return null;
};

export const Icon3D = ({ type, color }: { type: 'ruler' | 'calendar', color: string }) => {
  return (
    <div className="w-12 h-12">
      <Canvas gl={{ alpha: true, antialias: true }} camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <IconShape type={type} color={color} />
      </Canvas>
    </div>
  );
};
