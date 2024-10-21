import { RigidBody } from '@react-three/rapier';
import React from 'react';

function Glass({ pos, args }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={pos} receiveShadow castShadow>
        <boxGeometry args={args} />
        <meshStandardMaterial 
          color={'white'} 
          transparent={true} 
          opacity={0} 
        />
      </mesh>
    </RigidBody>
  );
}

export default Glass;
