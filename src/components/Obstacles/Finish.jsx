import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Finish = ({ pos }) => {
  const finishRef = useRef();

  // Optional: Adding a slight animation to rotate the finish line for visual effect
  useFrame(() => {
    if (finishRef.current) {
      finishRef.current.rotation.y += 0.01; // Slow rotation for the diamond-like object
    }
  });

  return (
    <RigidBody
      colliders="trimesh"
      position={pos}
      type="fixed"
      userData={{ isFinish: true }}
    >
      <mesh ref={finishRef}>
        {/* Icosahedron geometry to give a faceted, diamond-like shape */}
        <icosahedronGeometry args={[1, 1]} />
        <MeshReflectorMaterial
          resolution={1024}
          roughness={0.1} 
          color="#b9f2ff" // A light blue for diamond-like color
          metalness={0.5} // High metalness for a reflective surface
          mirror={0.8} // Strong mirror-like reflection
        />
      </mesh>
    </RigidBody>
  );
};

export default Finish;
