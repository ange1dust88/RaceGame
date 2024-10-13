import { RigidBody } from '@react-three/rapier';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MovingWall({ pos, args, speed, color}) {
  const wallRef = useRef();
  const direction = useRef(1); 
  const range = 0.6; 
  const oscillationSpeed = 0.03; 

  useFrame(() => {
    if (wallRef.current) {
      const currentPos = wallRef.current.translation(); 
      const newPositionX = currentPos.x + direction.current * speed * oscillationSpeed;

    
      if (newPositionX > pos[0] + range) {
        direction.current = -1; 
      } else if (newPositionX < pos[0] - range) {
        direction.current = 1; 
      }
      wallRef.current.setNextKinematicTranslation({ x: newPositionX, y: currentPos.y, z: currentPos.z });
    }
  });

  return (
    <RigidBody ref={wallRef} type="kinematicPosition" colliders="cuboid">
      <mesh position={pos} castShadow receiveShadow>
        <boxGeometry args={args} />
        <meshStandardMaterial color = {color}/>
      </mesh>
    </RigidBody>
  );
}

export default MovingWall;
