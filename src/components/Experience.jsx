import { Environment, OrthographicCamera, Sky } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { useRef } from "react";
import { CharacterController } from "./CharacterController";
import Map from "./Map";
// todo
// camera movement
// music (idk)
// skybox
// collectables + timer 
// game rules  
// UI
//
export const Experience = () => {
  const shadowCameraRef = useRef();

  return (
    <>
      <Environment preset= "city"/>

      <directionalLight
        intensity={1} 
        castShadow
        position={[-15, 10, 15]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00005}
      >
        <OrthographicCamera
          left={-22}
          right={15}
          top={10}
          bottom={-20}
          ref={shadowCameraRef}
          attach={"shadow-camera"}
        />
      </directionalLight>

      <Sky distance={4500} sunPosition={[0.5, 1, 0.5]} />

      <Physics debug>
        <CharacterController  pos = {[0, 1.4, 43]}/> {/*{[1, 21, 70.5]} END */}
        <Map />
      </Physics>
    </>
  );
};
