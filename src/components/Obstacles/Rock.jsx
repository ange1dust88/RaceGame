import { RigidBody } from '@react-three/rapier';
import React, { useState, useEffect } from 'react';

function Rock({ pos, time }) {
  const [visible, setVisible] = useState(true);  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); 
    }, time * 1000);  

    return () => clearTimeout(timer);
  }, [time]);

  if (!visible) return null;

  return (
    <RigidBody 
      colliders="ball" 
      mass={1000}  
      type="dynamic" 
    >
      <mesh position={pos} castShadow receiveShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </RigidBody>
  );
}

export default Rock;
