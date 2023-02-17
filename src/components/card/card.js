import { OrbitControls, Html, Text, useTexture } from '@react-three/drei'
import React from 'react'
import { useState, useEffect } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import './card.scss'

export default function Card() {



  const [colorMap] = useTexture([
    'space.jpg',

  ])
  const cardRef = useRef()
  var cardText = 'Mais provavel de morrer de fome'

  const [x, setX] = useState()
  const [y, setY] = useState()
  useEffect(
    () => {
      const update = (e) => {
        setX(e.x)
        setY(e.y)
      }
      window.addEventListener('mousemove', update)
      window.addEventListener('touchmove', update)
      return () => {
        window.removeEventListener('mousemove', update)
        window.removeEventListener('touchmove', update)
      }
    },
    [setX, setY],
  )

  useFrame(() => {
    cardRef.current.rotation.y = -x / window.innerWidth + 0.5
    cardRef.current.rotation.x = -y / window.innerHeight + 0.5
  })

  return (
    <>
      <ambientLight intensity={1.5} />
      <mesh ref={cardRef} position={[0, 0, 1]}>
        <boxGeometry args={[3, 4, 0.2]} />
        <meshStandardMaterial map={colorMap} color={'#b609de'} />
        <Text family={'Roboto'} color={'#f2f3f5'} fontSize={0.5} maxWidth={2.6} textAlign="center" position={[0, 0.6, 0.135]}>{cardText}</Text>
      </mesh>
      <Rig />
    </>
  )
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(v.set(state.mouse.x / 2, state.mouse.y / 2, 7), 0.05)
  })
}
