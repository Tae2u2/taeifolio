"use client";
import { gsap } from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useRef } from "react";
import style from "./Contact.module.sass";
import { useGSAP } from "@gsap/react";

const MotionPath = () => {
  //register the plugin (just once)
  gsap.registerPlugin(MotionPathPlugin);
  const container = useRef(null);
  const targetRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(targetRef.current, {
        duration: 5,
        repeat: -1,
        repeatDelay: 2,
        yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#path",
          align: "#path",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
      });
    },
    { scope: container }
  );

  return (
    <div className={style.winter} ref={container}>
      <h1>UI</h1>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 700 600"
        id="svg"
        className={style.svg}
      >
        <path
          id="path"
          d="M 50 50 Q 150 50 200 300 Q 250 450 350 350 Q 550 200 650 550 "
        />
        <g id="rect" ref={targetRef}>
          <image href={"/snow.png"} width="80" height="80" />
        </g>
      </svg>
    </div>
  );
};

export default MotionPath;
