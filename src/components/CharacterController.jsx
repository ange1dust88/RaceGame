import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef, useState, useEffect } from "react";
import { MathUtils, Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { Character } from "./Character";

// Function to normalize and linearly interpolate angles
const lerpAngle = (start, end, t) => {
  const normalizeAngle = (angle) => {
    while (angle > Math.PI) angle -= 2 * Math.PI;
    while (angle < -Math.PI) angle += 2 * Math.PI;
    return angle;
  };

  start = normalizeAngle(start);
  end = normalizeAngle(end);

  if (Math.abs(end - start) > Math.PI) {
    if (end > start) {
      start += 2 * Math.PI;
    } else {
      end += 2 * Math.PI;
    }
  }

  return normalizeAngle(start + (end - start) * t);
};

export const CharacterController = ({ pos = [0, 1, 0], timerStarted, onFinish }) => {
  // Replace Leva controls with hardcoded values
  const WALK_SPEED = 0.8;
  const RUN_SPEED = 1.6;
  const ROTATION_SPEED = degToRad(0.5);
  const JUMP_FORCE = 5;

  const rb = useRef();
  const container = useRef();
  const character = useRef();

  const [animation, setAnimation] = useState("idle");
  const [isGrounded, setIsGrounded] = useState(true);
  const characterRotationTarget = useRef(0);
  const rotationTarget = useRef(0);
  const cameraTarget = useRef();
  const cameraPosition = useRef();
  const cameraWorldPosition = useRef(new Vector3());
  const cameraLookAtWorldPosition = useRef(new Vector3());
  const cameraLookAt = useRef(new Vector3());
  const [, get] = useKeyboardControls();

  useFrame(({ camera }) => {
    if (!timerStarted || !rb.current) {
      return;
    }

    const vel = rb.current.linvel();

    const movement = {
      x: 0,
      z: 0,
    };

    if (get().forward) movement.z = 1;
    if (get().backward) movement.z = -1;
    if (get().left) movement.x = 1;
    if (get().right) movement.x = -1;

    let speed = get().run ? RUN_SPEED : WALK_SPEED;

    if (movement.x !== 0) {
      rotationTarget.current += ROTATION_SPEED * movement.x;
    }

    if (movement.x !== 0 || movement.z !== 0) {
      characterRotationTarget.current = Math.atan2(movement.x, movement.z);
      vel.x =
        Math.sin(rotationTarget.current + characterRotationTarget.current) *
        speed;
      vel.z =
        Math.cos(rotationTarget.current + characterRotationTarget.current) *
        speed;

      setAnimation(speed === RUN_SPEED ? "run" : "walk");
    } else {
      setAnimation(isGrounded ? "idle" : "fall");
    }

    // Jumping logic
    if (isGrounded && get().jump) {
      vel.y = JUMP_FORCE;
      setIsGrounded(false);
      setAnimation("jump");
    }

    // Falling animation logic
    if (!isGrounded && vel.y < 0) {
      setAnimation("fall");
    }

    character.current.rotation.y = lerpAngle(
      character.current.rotation.y,
      characterRotationTarget.current,
      0.1
    );

    rb.current.setLinvel(vel, true);

    container.current.rotation.y = MathUtils.lerp(
      container.current.rotation.y,
      rotationTarget.current,
      0.1
    );

    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 0.1);

    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current);
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1);
      camera.lookAt(cameraLookAt.current);
    }
  });

  // Collision handling
  const onCollisionEnter = (other) => {
    if (other.rigidBodyObject && other.rigidBodyObject.userData.isGround) {
      setIsGrounded(true);

      if (rb.current.linvel().y < 0) {
        setAnimation("idle");
      }
    }

    if (other.rigidBodyObject.userData.isFinish) {
      console.log("Collided with Finish!");
      onFinish();
    }
  };

  const onCollisionExit = (other) => {
    if (other.rigidBodyObject && other.rigidBodyObject.userData.isGround) {
      setIsGrounded(false);
      setAnimation("fall");
    }
  };

  // Ground check
  useEffect(() => {
    const checkGrounded = () => {
      if (rb.current) {
        const vel = rb.current.linvel();
        if (Math.abs(vel.y) < 0.01) {
          setIsGrounded(true);
        }
      }
    };
    const interval = setInterval(checkGrounded, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <RigidBody
      colliders={false}
      lockRotations
      ref={rb}
      onCollisionEnter={onCollisionEnter}
      onCollisionExit={onCollisionExit}
      position={pos}
    >
      <group ref={container}>
        <group ref={cameraTarget} position-z={1.5} />
        <group ref={cameraPosition} position-y={2.5} position-z={-4} />
        <group ref={character}>
          <Character scale={0.18} animation={animation} />
        </group>
      </group>
      <CapsuleCollider args={[0.08, 0.15]} position={[0, 0.2, 0]} />
    </RigidBody>
  );
};
