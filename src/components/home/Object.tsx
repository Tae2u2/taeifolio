import { useRef, useEffect, forwardRef } from "react";
import { Clone, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface ObjectProps {
  url: string;
  onPositionChange?: (position: THREE.Vector3) => void;
  visible?: boolean;
}

export const Object = forwardRef<THREE.Group, ObjectProps>(
  ({ url, onPositionChange, visible = true }, ref) => {
    const { scene } = useGLTF(url);
    const objectRef = useRef<THREE.Group>(null!);
    const velocityRef = useRef(new THREE.Vector3(0, 0, 0));

    useEffect(() => {
      if (objectRef.current) {
        if (typeof ref === "function") {
          ref(objectRef.current);
        } else if (ref) {
          ref.current = objectRef.current;
        }
      }
    }, [ref]);

    useFrame((state, delta) => {
      if (!objectRef.current) return;

      const object = objectRef.current;
      const velocity = velocityRef.current;

      const direction = new THREE.Vector3(0, 0, -1);
      direction.applyQuaternion(object.quaternion);

      object.position.add(velocity.clone().multiplyScalar(delta * 60));

      if (object.position.y < 0) {
        object.position.y = 0;
        velocity.y = 0;
      }

      object.rotation.y += delta * 0.2;

      if (onPositionChange) {
        onPositionChange(object.position.clone());
      }
    });

    return (
      <group ref={objectRef} visible={visible}>
        <Clone object={scene} scale={0.5} />
      </group>
    );
  }
);

Object.displayName = "Object";
