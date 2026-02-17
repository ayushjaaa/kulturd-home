
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Bottle: React.FC = () => {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF('/textured_model_0.glb');

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = t * 0.4;
    }
  });

  return <primitive ref={ref} object={scene} scale={3.4} position={[0, 0.3, 0]} rotation={[0, 0, 0]} />;
};

const BottleModel: React.FC = () => {
  return (
    <div className="bottle-canvas-wrapper" style={{ width: '100%', height: '700px', transform: 'rotate(20deg) translate3d(-150px, -9px, 0px)' }}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        style={{ background: 'transparent', width: '100%', height: '700px' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[4, 6, 4]} intensity={2} castShadow />
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
