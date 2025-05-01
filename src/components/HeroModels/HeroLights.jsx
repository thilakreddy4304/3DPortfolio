import React from 'react'
import * as THREE from 'three'

const HeroLights = () => {
  return (
      <>
      <spotLight
        intensity={100}
        angle={0.15}
        penumbra={0.2}
        position={[2, 5, 6]}
        color="white"
      />
      <spotLight
        intensity={40}
        angle={0.3}
        penumbra={0.5}
        position={[4, 5, 4]}
        color="#4cc9f0"
      />
      <spotLight
        intensity={60}
        angle={0.4}
        penumbra={1}
        position={[-3, 5, 5]}
        color="#9d4edd"
      />

      <primitive
        object={new THREE.RectAreaLight('#A259FF', 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      <pointLight
        intensity={10}
        position={[0, 1, 0]}
        color="#7209b7"
      />
      <pointLight
        intensity={10}
        position={[1, 2, -2]}
        color="#0d00a4"
      />
      </>
  )
}

export default HeroLights
