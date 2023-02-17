import React from 'react'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Float } from '@react-three/drei'


export default function Ball() {
  const ballRef = useRef()
  useFrame(() => {
    ballRef.current.rotation.y += 0.005
    ballRef.current.rotation.x -= 0.003
  })
  return (
    <>
      <Float rotationIntensity={3} floatIntensity={20}>
        <mesh ref={ballRef} position={[0, -2, -4]} >
          <sphereGeometry args={[2.5, 25, 25]} />
          <meshBasicMaterial color="#74a7f7" wireframe />
        </mesh>
      </Float>
    </>
  )
}
