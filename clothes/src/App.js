import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './clothes1/Scene'
import './App.css'

const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <Environment preset="sunset" />
      <ambientLight intensity={1}/>
      <Suspense fallback={null}>
        <Model position={[0, -5, 0]} />
        <OrbitControls  />
      </Suspense>
    </Canvas>
  )
}

export default App