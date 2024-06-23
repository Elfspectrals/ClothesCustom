import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

export default function Model() {
  const { nodes, materials } = useGLTF('./diorBag/scene.gltf');
  const [color, setColor] = useState('pink'); // Initial color set to pink

  return (
    <div className="flex flex-col items-center justify-center">
      <input 
        id="colorPicker"
        type="color" 
        value={color} 
        onChange={(e) => setColor(e.target.value)} // Update color based on input
      />
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <Environment preset="studio" background/>
        <ambientLight intensity={20} />
        <Suspense fallback={null}>
          <group dispose={null} scale={12}>
            <mesh geometry={nodes.Object_5.geometry} material={materials.FabricLines_mat} material-color={color}/>
            <mesh geometry={nodes.Object_7.geometry} material={materials.fabric_mat} material-color={color}/>
            <mesh geometry={nodes.Object_9.geometry} material={materials.leather_mat} material-color={color}/>
            <mesh geometry={nodes.Object_11.geometry} material={materials.metals_mat} material-color={color}/>
            <mesh geometry={nodes.Object_13.geometry} material={materials.logo_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} material-color={color}/>
            <mesh geometry={nodes.Object_15.geometry} material={materials.pattern_mat} material-color={color}/>
            <mesh geometry={nodes.Object_17.geometry} material={materials.Plastics_mat} rotation={[Math.PI / 2, 0, 0]} scale={0.01} material-color={color}/>
            <mesh geometry={nodes.Object_19.geometry} material={materials.Stitches_mat} material-color={color}/>
          </group>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('./diorBag/scene.gltf');