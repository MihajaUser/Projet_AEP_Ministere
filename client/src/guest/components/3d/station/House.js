/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/house.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, -3.05]} scale={0.02}>
        <mesh geometry={nodes.Old_House_2_3D_Models_1.geometry} material={materials.Standard_2} />
        <mesh geometry={nodes.Old_House_2_3D_Models_2.geometry} material={materials.Standard_3} />
        <mesh geometry={nodes.Old_House_2_3D_Models_3.geometry} material={materials.Standard_1} />
      </group>
    </group>
  )
}

useGLTF.preload('/house.glb')
