import { useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useControls } from "leva";
import { useRef, useState, useEffect } from "react";
import { MathUtils, Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils.js";
import { Character } from "./Character";

const normalizeAngle = (angle) => {
  while (angle > Math.PI) angle -= 2 * Math.PI;
  while (angle < -Math.PI) angle += 2 * Math.PI;
  return angle;
};

const lerpAngle = (start, end, t) => {
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

export const CharacterController = () => {
  const { WALK_SPEED, RUN_SPEED, ROTATION_SPEED, JUMP_FORCE } = useControls(
    "Character Control",
    {
      WALK_SPEED: { value: 0.8, min: 0.1, max: 4, step: 0.1 },
      RUN_SPEED: { value: 1.6, min: 0.2, max: 12, step: 0.1 },
      ROTATION_SPEED: {
        value: degToRad(0.5),
        min: degToRad(0.1),
        max: degToRad(5),
        step: degToRad(0.1),
      },
      JUMP_FORCE: { value: 5, min: 1, max: 10, step: 0.1 },
    }
  );

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
    if (rb.current) {
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

        if (speed === RUN_SPEED) {
          setAnimation("run");
        } else {
          setAnimation("walk");
        }
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
    }

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

  // Collision event handlers for detecting ground contact
  const onCollisionEnter = (other) => {
    if (other.rigidBodyObject && other.rigidBodyObject.userData.isGround) {
      setIsGrounded(true);
      // If landing after falling, change to idle or landing animation
      if (rb.current.linvel().y < 0) {
        setAnimation("land"); // Use a landing animation if you have one
      } else {
        setAnimation("idle");
      }
    }
  };

  const onCollisionExit = (other) => {
    if (other.rigidBodyObject && other.rigidBodyObject.userData.isGround) {
      setIsGrounded(false);
      setAnimation("fall"); // Trigger fall animation if character leaves ground
    }
  };

  // Optional fallback check for grounded state based on Y velocity
  useEffect(() => {
    const checkGrounded = () => {
      if (rb.current) {
        const vel = rb.current.linvel();
        if (Math.abs(vel.y) < 0.01) {
          setIsGrounded(true);
        }
      }
    };
    const interval = setInterval(checkGrounded, 100); // Check every 100ms
    return () => clearInterval(interval);
  }, []);

  return (
    <RigidBody
      colliders={false}
      lockRotations
      ref={rb}
      onCollisionEnter={onCollisionEnter}
      onCollisionExit={onCollisionExit}
    >
      <group ref={container}>
        <group ref={cameraTarget} position-z={1.5} />
        <group ref={cameraPosition} position-y={4} position-z={-4} />
        <group ref={character}>
          <Character scale={0.18} animation={animation} />
        </group>
      </group>
      <CapsuleCollider args={[0.08, 0.15]} position={[0, 0.2, 0]} />
    </RigidBody>
  );
};
