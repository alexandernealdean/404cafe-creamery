/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: lets (https://sketchfab.com/ntrtd)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/icecream-ba181cb7bdf74ceb855557ad0e2a1dd4
title: Icecream
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/icecream.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.62, 0.09, 0.58]} rotation={[0.02, -0.43, 0.07]} scale={[0.57, 0.57, 0.82]}>
          <mesh geometry={nodes.Torus001_0.geometry} material={materials.ice_cream} />
          <mesh geometry={nodes.Torus001_1.geometry} material={materials.material} />
          <mesh geometry={nodes.Torus001_2.geometry} material={materials.material_1} />
          <mesh geometry={nodes.Torus001_3.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Torus001_4.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Torus001_5.geometry} material={materials.material_4} />
          <mesh geometry={nodes.Torus001_6.geometry} material={materials.material_6} />
        </group>
        <group position={[3.19, -6.14, -.001]} rotation={[-3.07, -0.41, -1.17]} scale={[0.05, 0.05, 0.14]}>
          <mesh geometry={nodes['��������������003_0'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['��������������003_1'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['��������������003_2'].geometry} material={materials.material_4} />
        </group>
        <group position={[-0.9, -6.08, 1.97]} rotation={[2.81, 0.66, -2.63]} scale={[0.07, 0.07, 0.18]}>
          <mesh geometry={nodes['��������������004_0'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['��������������004_1'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['��������������004_2'].geometry} material={materials.material_4} />
        </group>
        <group position={[5.99, 1.87, -0.31]} rotation={[2.8, -0.48, -2.67]} scale={[0.05, 0.05, 0.12]}>
          <mesh geometry={nodes['��������������000_0'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['��������������000_1'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['��������������000_2'].geometry} material={materials.material_4} />
        </group>
        <group position={[-6.28, 2.62, -0.31]} rotation={[-2.59, -0.17, -0.7]} scale={[0.05, 0.05, 0.12]}>
          <mesh geometry={nodes['��������������002_0'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['��������������002_1'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['��������������002_2'].geometry} material={materials.material_4} />
        </group>
        <group position={[3.54, 6.03, 2.36]} rotation={[0.73, 0.17, 2.78]} scale={0.28}>
          <mesh geometry={nodes.Icosphere001_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Icosphere001_1.geometry} material={materials.material_1} />
        </group>
        <group position={[-1.77, -5.06, -0.98]} rotation={[0.52, 0.07, 0.95]} scale={0.56}>
          <mesh geometry={nodes.Icosphere004_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Icosphere004_1.geometry} material={materials.material_1} />
        </group>
        <group position={[-2.7, -0.78, -3.13]} rotation={[-0.49, 0.56, 1.81]} scale={0.6}>
          <mesh geometry={nodes.Icosphere005_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Icosphere005_1.geometry} material={materials.material_1} />
        </group>
        <group position={[-2.24, 6.48, 4.51]} rotation={[3.09, -0.72, -0.08]} scale={[0.04, 0.04, 0.11]}>
          <mesh geometry={nodes['��������������001_0'].geometry} material={materials.material_2} />
          <mesh geometry={nodes['��������������001_1'].geometry} material={materials.material_3} />
          <mesh geometry={nodes['��������������001_2'].geometry} material={materials.material_4} />
        </group>
        <group position={[-5.59, 9.35, -2.42]} rotation={[-0.49, 0.56, 1.81]} scale={0.6}>
          <mesh geometry={nodes.Icosphere000_0.geometry} material={materials.material} />
          <mesh geometry={nodes.Icosphere000_1.geometry} material={materials.material_1} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/icecream.gltf')
