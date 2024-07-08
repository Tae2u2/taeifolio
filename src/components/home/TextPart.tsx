"use client";
import { gsap } from "gsap";

import { useIntersection } from "@/hooks/useIntersection";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/TextPlugin";

const TextPart = () => {
  gsap.registerPlugin(TextPlugin);
  const textRef = useRef(null);
  const { isVisible } = useIntersection(textRef);

  var tl = gsap.timeline(),
    mySplitText = new SplitText("#quote", { type: "words,chars" }),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

  gsap.set("#quote", { perspective: 400 });

  tl.from(chars, {
    duration: 0.8,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.01,
  });

  // document.getElementById("animate").onclick = function () {
  //   tl.restart();
  // };

  useEffect(() => {
    if (isVisible) {
      tl.restart();
    }
  }, [isVisible]);

  return (
    <div id="quote">
      SplitText makes it easy to break apart the text in an HTML element so that
      each character, word, and/or line is wrapped in its own div tag.
    </div>
  );
};

export default TextPart;
