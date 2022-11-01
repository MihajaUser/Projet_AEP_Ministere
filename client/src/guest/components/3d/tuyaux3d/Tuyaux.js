import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/tuyaux.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cap_1.geometry} material={materials.Cap_1} position={[-10.08, 0.5, -0.08]} scale={2.56} />
      <mesh geometry={nodes.H_2.geometry} material={materials.H_2} position={[15.62, 0.64, 0.01]} scale={2.56} />
      <mesh geometry={nodes.I__2.geometry} material={materials['I _2']} position={[-14.49, 0.48, 0.03]} scale={2.56} />
      <mesh geometry={nodes.I__3.geometry} material={materials['I _3']} position={[4.03, 0.63, -0.02]} scale={2.56} />
      <mesh geometry={nodes.Support_3.geometry} material={materials.Support_3} position={[-14.7, -0.58, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Wellhead_1.geometry} material={materials.Wellhead_1} position={[-6.62, 1.22, 0.01]} scale={2.56} />
      <mesh geometry={nodes.Support_3001.geometry} material={materials['Support_3.001']} position={[-14.7, -0.58, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Cap_1001.geometry} material={materials['Cap_1.001']} position={[-3.4, 0.64, -0.12]} scale={2.56} />
      <mesh geometry={nodes.Cap_1002.geometry} material={materials['Cap_1.002']} position={[11.21, 0.66, -0.04]} scale={2.56} />
      <mesh geometry={nodes.Support_3003.geometry} material={materials.base} position={[-6.58, -0.48, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Support_3002.geometry} material={materials['Support_3.002']} position={[-6.58, -0.48, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Support_3005.geometry} material={materials['Support_3.005']} position={[5.33, -0.43, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Support_3004.geometry} material={materials['Support_3.004']} position={[5.33, -0.43, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Support_3007.geometry} material={materials['Support_3.007']} position={[16.91, -0.43, 0.04]} scale={2.56} />
      <mesh geometry={nodes.Support_3006.geometry} material={materials['Support_3.006']} position={[16.91, -0.43, 0.04]} scale={2.56} />
    </group>
  )
}

useGLTF.preload('/tuyaux.glb')
