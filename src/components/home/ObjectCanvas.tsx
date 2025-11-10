"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Object } from "./Object";
import * as THREE from "three";

const ObjectCanvas = () => {
  const treeRef = useRef<THREE.Group>(null);
  return (
    <div
      style={{
        position: "absolute",
        top: "38px",
        left: "8%",
        width: "450px",
        height: "600px",
        zIndex: -2,
      }}
    >
      <Canvas camera={{ position: [0, 10, 20], fov: 60, near: 1, far: 1000 }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, 10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <Object ref={treeRef} url={"/object/tree.glb"} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ObjectCanvas;
