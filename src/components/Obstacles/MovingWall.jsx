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

      // Проверка границ и изменение направления
      if (newPositionZ >= endPosZ) {
        newPositionZ = endPosZ; // Устанавливаем на максимальное значение
        setDirectionZ(-1); // Меняем направление
        console.log(`Changing direction to -1 at ${newPositionZ}`);
      } else if (newPositionZ <= startPosZ) {
        newPositionZ = startPosZ; // Устанавливаем на минимальное значение
        setDirectionZ(1); // Меняем направление
        console.log(`Changing direction to 1 at ${newPositionZ}`);
      }

      // Обновление позиции
      wallRef.current.setNextKinematicTranslation({ 
        x: currentPos.x, 
        y: currentPos.y, 
        z: newPositionZ 
      });
      
      // Логирование текущего положения и нового положения
      console.log(`Current Position Z: ${currentPos.z}, New Position Z: ${newPositionZ}, Direction: ${directionZ}`);
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
