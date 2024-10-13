import { RigidBody, quat } from '@react-three/rapier';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Spin({ size, color, pos, bouncePower, rotSpeed}) {
  const spinRef = useRef(); 

  useFrame((_state, delta) => {
    if (spinRef.current) {
      const curRotation = quat(spinRef.current.rotation());
      const incrementRotation = new THREE.Quaternion().setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        delta * rotSpeed
      );

      curRotation.multiply(incrementRotation);
      spinRef.current.setNextKinematicRotation(curRotation);
    }
  });
  
  return (
    <>
      <RigidBody
        ref={spinRef} 
        position={pos}
        restitution={bouncePower}
        friction={0}
        type="kinematicPosition" 
        colliders="hull"
      >
        <mesh
          castShadow
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <cylinderGeometry args={[0.1, 0.1, size, 32]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </RigidBody>

      {/* Center part */}
      <RigidBody type="fixed" colliders ="hull" position={[pos[0], pos[1], pos[2]]} friction={0.5}>
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.15, 0.15, 0.5, 32]} />
          <meshStandardMaterial color="dimgray" />
        </mesh>
      </RigidBody>

      {/* Platform */}
      <RigidBody
        type="fixed"
        position={[pos[0], pos[1] - 0.3, pos[2]]}
        friction={0.5}
        colliders="hull"
      >
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[size / 2, size / 2, 0.2, 32]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Spin;
