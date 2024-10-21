import { RigidBody } from '@react-three/rapier';
import React from 'react';
import * as THREE from 'three';

function InclinedPlane({ position, xRotation, yRotation, width, depth, color }) {

  const xRadians = THREE.MathUtils.degToRad(xRotation);
  const yRadians = THREE.MathUtils.degToRad(yRotation);

  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh
        position={position}
        rotation={[-xRadians, yRadians, 0]} 
        castShadow
        receiveShadow
      >
        <boxGeometry args={[width, 1, depth]} /> 
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
}

export default InclinedPlane;
