"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

interface Planet {
  radius: number
  size: number
  speed: number
  color: string
  offset: number
}

export function OrbitingPlanets({ activeSection }: { activeSection: string }) {
  const groupRef = useRef<THREE.Group>(null)

  const planets = useMemo<Planet[]>(
    () => [
      { radius: 3, size: 0.15, speed: 0.3, color: "#E5B8D0", offset: 0 },
      { radius: 3.5, size: 0.1, speed: 0.25, color: "#FFD700", offset: Math.PI * 0.5 },
      { radius: 4, size: 0.12, speed: 0.2, color: "#C8A2C8", offset: Math.PI },
      { radius: 4.5, size: 0.08, speed: 0.15, color: "#9370DB", offset: Math.PI * 1.5 },
      { radius: 5, size: 0.1, speed: 0.1, color: "#DDA0DD", offset: Math.PI * 0.25 },
    ],
    [],
  )

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {planets.map((planet, index) => (
        <OrbitingPlanet key={index} {...planet} index={index} />
      ))}
    </group>
  )
}

function OrbitingPlanet({ radius, size, speed, color, offset, index }: Planet & { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * speed + offset
      meshRef.current.position.x = Math.cos(time) * radius
      meshRef.current.position.z = Math.sin(time) * radius
      meshRef.current.position.y = Math.sin(time * 2 + index) * 0.5
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.3} metalness={0.7} />
    </mesh>
  )
}
