"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Environment, Float, Stars } from "@react-three/drei"
import { CosmicSphere } from "./3d/cosmic-sphere"
import { OrbitingPlanets } from "./3d/orbiting-planets"

export function Scene3D({ activeSection }: { activeSection: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }} className="w-full h-full" dpr={[1, 2]}>
      <Suspense fallback={null}>
        {/* Ambient lighting */}
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#C8A2C8" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#E5B8D0" />

        {/* Stars background */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />

        {/* Main cosmic sphere */}
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <CosmicSphere activeSection={activeSection} />
        </Float>

        {/* Orbiting planets */}
        <OrbitingPlanets activeSection={activeSection} />

        {/* Environment */}
        <Environment preset="night" />
      </Suspense>
    </Canvas>
  )
}
