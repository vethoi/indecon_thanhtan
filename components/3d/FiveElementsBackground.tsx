import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, PerspectiveCamera, Sparkles, Billboard, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Glow = ({ color, scale = 1 }: { color: string, scale?: number }) => {
  return (
    <Billboard>
      <mesh>
        <planeGeometry args={[4 * scale, 4 * scale]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </Billboard>
  );
};

// Create a simple glow texture
const glowTexture = new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/glow.png');

const ElementShape = ({ position, color, type, speed = 1, scale = 1 }: { position: [number, number, number], color: string, type: 'metal' | 'wood' | 'water' | 'fire' | 'earth', speed?: number, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Reduce base scale further for "gem" look
  const baseScale = scale * 0.35;

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Base rotation
      meshRef.current.rotation.x += delta * 0.2 * speed;
      meshRef.current.rotation.y += delta * 0.3 * speed;

      // Hover reaction
      if (hovered) {
         meshRef.current.rotation.y += delta * 3;
         meshRef.current.scale.lerp(new THREE.Vector3(baseScale * 1.5, baseScale * 1.5, baseScale * 1.5), 0.1);
      } else {
         meshRef.current.scale.lerp(new THREE.Vector3(baseScale, baseScale, baseScale), 0.1);
      }
    }
  });

  const getGeometry = () => {
    switch (type) {
      case 'metal': return <octahedronGeometry args={[1, 0]} />; // Diamond shape
      case 'wood': return <cylinderGeometry args={[0.4, 0.4, 1.5, 6]} />; // Hexagonal crystal
      case 'water': return <icosahedronGeometry args={[0.7, 0]} />; // Faceted drop
      case 'fire': return <tetrahedronGeometry args={[1, 0]} />; // Pyramid
      case 'earth': return <boxGeometry args={[0.9, 0.9, 0.9]} />; // Cube
      default: return <boxGeometry />;
    }
  };

  const getMaterial = () => {
    // Gem-like material properties
    return (
        <meshPhysicalMaterial 
            color={color}
            roughness={0.1}
            metalness={0.1}
            transmission={0.6} // Glass-like transparency
            thickness={1.5} // Refraction volume
            ior={1.7} // Index of refraction (Gemstone)
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive={color}
            emissiveIntensity={0.4}
            attenuationColor="#ffffff"
            attenuationDistance={0.5}
        />
    );
  };

  return (
    <group position={position}>
        <Float speed={2 * speed} rotationIntensity={1} floatIntensity={1}>
            <mesh 
                ref={meshRef} 
                scale={baseScale}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
                castShadow
                receiveShadow
            >
                {getGeometry()}
                {getMaterial()}
            </mesh>
        </Float>
        
        {/* Inner Light - Reduced intensity */}
        <pointLight color={color} intensity={0.8} distance={3} decay={2} />
        
        {/* Glow Sprite - Subtle halo */}
        <Billboard position={[0, 0, -1]}>
            <sprite scale={[baseScale * 6, baseScale * 6, 1]}>
                <spriteMaterial map={glowTexture} color={color} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
            </sprite>
        </Billboard>

        {/* Sparkles for "Rays/Energy" - More sparkles for gem effect */}
        <Sparkles count={25} scale={baseScale * 4} size={4} speed={0.5} opacity={0.6} color={color} />
    </group>
  );
};

const InteractionLines = ({ positions }: { positions: Record<string, [number, number, number]> }) => {
    const genLineRef = useRef<any>(null);
    const overLineRef = useRef<any>(null);
    
    const generationCycle = [
        positions.metal, positions.water, positions.wood, positions.fire, positions.earth, positions.metal
    ];

    const overcomingCycle = [
        positions.metal, positions.wood, positions.earth, positions.water, positions.fire, positions.metal
    ];

    useFrame((state, delta) => {
        const time = state.clock.elapsedTime;
        
        // Animate dash offset to simulate laser beam flow
        if (genLineRef.current) {
            genLineRef.current.material.dashOffset -= delta * 5;
            // Occasional appearance: use sin wave with threshold
            // Visible only when sin(time) > 0.8 (approx 10% of the time)
            const visibility = Math.max(0, Math.sin(time * 0.5) - 0.8) * 5; 
            genLineRef.current.material.opacity = visibility * 0.4;
        }
        if (overLineRef.current) {
            overLineRef.current.material.dashOffset -= delta * 5;
            // Different timing for overcoming cycle
            const visibility = Math.max(0, Math.sin(time * 0.3 + 2) - 0.85) * 6;
            overLineRef.current.material.opacity = visibility * 0.3;
        }
    });

    return (
        <group>
            {/* Generation Cycle - Laser Beam Effect */}
            <Line 
                ref={genLineRef}
                points={generationCycle} 
                color="#4ade80" 
                lineWidth={1} // Thinner
                dashed={true}
                dashScale={2}
                dashSize={1}
                gapSize={5}
                opacity={0} // Controlled by useFrame
                transparent
                toneMapped={false}
            />
            
            {/* Overcoming Cycle - Laser Beam Effect */}
            <Line 
                ref={overLineRef}
                points={overcomingCycle} 
                color="#f87171" 
                lineWidth={0.5} // Very thin
                dashed={true}
                dashScale={2}
                dashSize={0.5}
                gapSize={8}
                opacity={0} // Controlled by useFrame
                transparent
                toneMapped={false}
            />
        </group>
    );
};

const RotatingSystem = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Rotate the whole system slowly
            groupRef.current.rotation.y += delta * 0.1;
            // Slight wobble
            groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
        }
    });

    // Define positions relative to center (Earth)
    // Earth at [0,0,0] - Center
    // Others in a circle radius 6
    const positions: Record<string, [number, number, number]> = {
        earth: [0, 0, 0], // Center - Earth (Yellow)
        fire: [5, 2, 0],
        wood: [0, -3, 5],
        metal: [-5, 2, 0],
        water: [0, -3, -5]
    };

    return (
        <group ref={groupRef}>
            <InteractionLines positions={positions} />

            {/* Thổ - Earth - Center (Yellow) */}
            <ElementShape type="earth" position={positions.earth} color="#facc15" speed={0.5} scale={1.2} />

            {/* Satellites */}
            <ElementShape type="fire" position={positions.fire} color="#f87171" speed={1.2} scale={1} />
            <ElementShape type="wood" position={positions.wood} color="#4ade80" speed={0.8} scale={1} />
            <ElementShape type="metal" position={positions.metal} color="#94a3b8" speed={1} scale={1} />
            <ElementShape type="water" position={positions.water} color="#60a5fa" speed={1.1} scale={1.1} />
        </group>
    )
}

export const FiveElementsBackground = () => {
  // Use state to handle mobile check to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile(); // Check immediately
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Adjust camera position for mobile
  // Y=0 to center vertically. Z=24 to fit the width of the system (~10-12 units) in portrait FOV.
  const cameraPosition: [number, number, number] = isMobile ? [0, 0, 24] : [0, 2, 14];

  return (
    <div className="absolute inset-0 z-0 opacity-100">
      <Canvas gl={{ alpha: true, antialias: true }} dpr={[1, 2]} shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} fov={45} />
        
        {/* Environment for Gem Reflections */}
        <Environment preset="city" />

        {/* Improved Lighting for 3D depth */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <directionalLight position={[-10, -5, -5]} intensity={0.5} color="blue" />
        
        <RotatingSystem />
      </Canvas>
    </div>
  );
};
