"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function CosmicSphere({ activeSection }: { activeSection: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  const sectionColors = useMemo(
    () => ({
      hero: new THREE.Color("#C8A2C8"),
      about: new THREE.Color("#E5B8D0"),
      skills: new THREE.Color("#FFD700"),
      projects: new THREE.Color("#9370DB"),
      experience: new THREE.Color("#DDA0DD"),
      contact: new THREE.Color("#F4C2C2"),
    }),
    [],
  )

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= 0.001
      const scale = 1.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      glowRef.current.scale.setScalar(scale)
    }
  })

  const targetColor = sectionColors[activeSection as keyof typeof sectionColors] || sectionColors.hero

  return (
    <group position={[0, 0, 0]}>
      {/* Main sphere */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshStandardMaterial
          color={targetColor}
          emissive={targetColor}
          emissiveIntensity={0.3}
          roughness={0.4}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>

      {/* Outer glow */}
      <mesh ref={glowRef}>
        <icosahedronGeometry args={[1.7, 2]} />
        <meshBasicMaterial color={targetColor} transparent opacity={0.1} wireframe />
      </mesh>

      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshBasicMaterial color={targetColor} transparent opacity={0.2} />
      </mesh>
    </group>
  )
}
