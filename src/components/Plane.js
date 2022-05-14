import React from 'react'
import { usePlane } from '@react-three/cannon'

export default function Plane() {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI/2, 0, 0],
        position: [0, -200, 0]
    }))
  return (
    <mesh ref={ref} rotation={[-Math.PI/2, 0, 0]} position={[0, -200, 0]}>
    <planeBufferGeometry attach="geometry" args={[5000, 5000]}/>
    <meshLambertMaterial attach="material" color="grey"/>
    </mesh>
  )
}
