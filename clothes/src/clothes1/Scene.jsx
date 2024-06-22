import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

export default function Model() { // Corrected line
  const { nodes, materials } = useGLTF('./VictorianShirt/Model.glb');
  const [color, setColor] = useState('blue'); // Initial color set to blue

  return (
    <div>
      <input 
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} // Update color based on input
      />
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <Environment preset="studio" background/>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <group dispose={null} scale={10} position={[0, -5, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Collar_FRONT_5309977} scale={0.01} material-color={color} />
        </group>
        <OrbitControls />
      </Suspense>
    </Canvas>
    </div>
    
  );
}

useGLTF.preload('./VictorianShirt/Model.glb');