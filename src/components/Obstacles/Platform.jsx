import { RigidBody } from '@react-three/rapier';
import React from 'react';

function Platform({ pos, args, color }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={pos} receiveShadow>
        <boxGeometry args={args} />
        <meshStandardMaterial color={color} /> 
      </mesh>
    </RigidBody>
  );
}

export default Platform;
