import { RigidBody } from '@react-three/rapier';
import React, { useRef, useState } from 'react';

function BreakingBlocks({ pos, size, breakable, color }) {
  const [isFalling, setFalling] = useState(false);
  const blockRef = useRef();

  const handleCollisionEnter = () => {
    if (breakable) {
      setFalling(true);
    }
  };

  return (
    <RigidBody
      ref={blockRef}
      colliders="hull"
      type={isFalling ? "dynamic" : "fixed"} 
      onCollisionEnter={handleCollisionEnter} 
    >
      <mesh position={pos} receiveShadow castShadow>
        <cylinderGeometry args={size} />
        <meshStandardMaterial
          color="skyblue"        
          transparent={true}    
          opacity={0.3}          
          roughness={0}          
          metalness={0.1}       
          reflectivity={1}     
        />
      </mesh>
    </RigidBody>
  );
}

export default BreakingBlocks;
