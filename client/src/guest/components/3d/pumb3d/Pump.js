import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pump.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pump001.geometry} material={materials['M_brushed.001']} position={[-734.87, -25.06, 128.28]} rotation={[-3.11, 1.42, 3.11]} scale={[27.24, 21.78, 21.78]} />
    </group>
  )
}

useGLTF.preload('/pump.glb')
