import { RigidBody } from '@react-three/rapier';
import React from 'react';

function Platform({ pos, args }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={pos} receiveShadow>
        <boxGeometry args={args} />
        <meshStandardMaterial color="springgreen" /> 
      </mesh>
    </RigidBody>
  );
}

export default Platform;
