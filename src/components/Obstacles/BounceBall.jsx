import { RigidBody } from '@react-three/rapier';
import React from 'react';

function BounceBall({ size, color, pos, bouncePower }) {
  return (
    <>
      <RigidBody
        position={pos}
        restitution={bouncePower} 
        friction={0}
        type="fixed"
        colliders ="hull"
      >
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[size, 32, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" position={[pos[0], pos[1] - size - 0.1, pos[2]]} friction={0.5}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[size*1.5, 0.3, size*1.5]} /> 
          <meshStandardMaterial color="gray" />
        </mesh>
      </RigidBody>
    </>
  );
}

export default BounceBall;
