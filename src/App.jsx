import { KeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import UI from "./components/UI";
import { useState } from "react";


//todo: loading screen collision lag fix
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
  { name: "jump", keys: ["Space"] },
];

function App() {
  const [timerStarted, setTimerStarted] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);  

  const handleFinishCollision = () => {
    setStopTimer(true); 
    console.log('Timer stopped');
  };

  return (
    <>
      <UI setTimerStarted={setTimerStarted} stopTimer={stopTimer} />
      <KeyboardControls map={keyboardMap}>
        <Canvas
          shadows
          camera={{ position: [3, 3, 3], near: 0.1, fov: 40 }}
          style={{ touchAction: "none" }}
        >
          <Experience timerStarted={timerStarted} onFinish={handleFinishCollision} />
        </Canvas>
      </KeyboardControls>
    </>
  );
}

export default App;
