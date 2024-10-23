import { Environment, OrthographicCamera, Sky } from "@react-three/drei";
import { useRef } from "react";
import { Physics } from "@react-three/rapier";
import { CharacterController } from "./CharacterController";
import Map from "./Map";
import SkyBox from "./Skybox.jsx";

export const Experience = ({ timerStarted, onFinish }) => {
  const shadowCameraRef = useRef();

  return (
    <>
      <Environment preset="city" />
      <SkyBox />
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

      <Physics>
        <CharacterController pos={[0, 0.5, -1.5]} timerStarted={timerStarted} onFinish = {onFinish} />
        <Map/>
      </Physics>
    </>
  );
};
