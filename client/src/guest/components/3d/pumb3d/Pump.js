import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pump.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -1.08, -312.81]} scale={[4.95, 9.15, 9.15]}>
        <mesh geometry={nodes.pump002_1.geometry} material={materials['M_brushed.001']} />
        <mesh geometry={nodes.pump002_2.geometry} material={materials['Boards.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/pump.glb')
