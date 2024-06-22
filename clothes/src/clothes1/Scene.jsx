import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

export default function Model({ color = "red" }) { // Corrected line
  const { nodes, materials } = useGLTF('/scene-transformed.glb');

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <Environment preset="sunset" />
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <group dispose={null} scale={10} position={[0, -5, 0]}>
          {/* Corrected the material-color prop to use the three.js standard for setting material properties dynamically */}
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Collar_FRONT_5309977} scale={0.01} material-color={color} />
        </group>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}

useGLTF.preload('/scene-transformed.glb');