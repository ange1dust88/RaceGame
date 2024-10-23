import { RigidBody } from '@react-three/rapier';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

function MovingWall({ pos, args, speed, color, startPosZ, endPosZ }) {
  const wallRef = useRef();
  const [directionZ, setDirectionZ] = useState(1); 
  const oscillationSpeed = 0.03; 

  useFrame(() => {
    if (wallRef.current) {
      const currentPos = wallRef.current.translation(); 
      let newPositionZ = currentPos.z + directionZ * speed * oscillationSpeed;


      if (newPositionZ >= endPosZ) {
        newPositionZ = endPosZ; 
        setDirectionZ(-1); 

      } else if (newPositionZ <= startPosZ) {
        newPositionZ = startPosZ; 
        setDirectionZ(1); 
      }

      wallRef.current.setNextKinematicTranslation({ 
        x: currentPos.x, 
        y: currentPos.y, 
        z: newPositionZ 
      });
      
    }
  });

  return (
    <RigidBody ref={wallRef} type="kinematicPosition" colliders="cuboid">
      <mesh position={pos} castShadow receiveShadow>
        <boxGeometry args={args} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
}

export default MovingWall;
