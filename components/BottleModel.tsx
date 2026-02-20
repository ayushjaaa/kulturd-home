
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Shared mouse state outside component so both Canvas and wrapper share the same ref
const mouse = { x: 0, y: 0 };
let lastMouseTime = 0;

useGLTF.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

const Bottle: React.FC = () => {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/textured_model_0.glb');
  const autoY = useRef(0);
  const smoothX = useRef(0);
  const smoothMouseY = useRef(0);

  useFrame((_, delta) => {
    if (ref.current) {
      // Auto-rotate continuously
      autoY.current += delta * 0.4;

      // Smooth mouse offsets independently
      smoothMouseY.current += (mouse.x * Math.PI * 0.6 - smoothMouseY.current) * 0.08;
      smoothX.current += (mouse.y * Math.PI * 0.25 - smoothX.current) * 0.08;

      ref.current.rotation.y = autoY.current + smoothMouseY.current;
      ref.current.rotation.x = smoothX.current;
    }
  });

  return <primitive ref={ref} object={scene} scale={3.4} position={[0, 0.3, 0]} rotation={[0, 0, 0]} />;
};

const BottleModel: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseTime < 32) return; // throttle to ~30fps
      lastMouseTime = now;
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bottle-canvas-wrapper" style={{ width: '100%', height: '100%', transform: 'rotate(20deg) translateX(-20%) translateY(-1%)' }}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 6, 4]} intensity={2} />
        <directionalLight position={[-4, 4, -4]} intensity={0.8} />
        <spotLight position={[0, 8, 2]} intensity={1} penumbra={1} />
        <Bottle />
        <ContactShadows position={[0, -1.2, 0]} opacity={0.25} scale={4} blur={2.5} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
};

export default BottleModel;
