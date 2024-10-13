import { RigidBody } from '@react-three/rapier'
import React from 'react'

function Rock( {pos} ) {
  return (
    <RigidBody colliders = "ball" >
        <mesh position={pos} castShadow receiveShadow>
            <sphereGeometry args = {[1,32,32]}/>
            <meshStandardMaterial  
            color = "gray"/>
        </mesh>
    </RigidBody>
  )
}

export default Rock
