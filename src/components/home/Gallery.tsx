"use client";

import { useEffect, useRef, useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import style from "./Gallery.module.css";
import slideData from "./data/data.json";

const Gallery = () => {
  const itemRef = useRef<HTMLDivElement[] | null[] | Node[]>([]);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(1);

  const onPrev = () => {
    setCurrentIndex((curr) => (curr === 1 ? 5 : curr - 1));
    if (slideRef.current) {
      slideRef.current.prepend(itemRef.current[currentIndex] as Node);
    }
  };

  const onNext = () => {
    setCurrentIndex((curr) => (curr === 5 ? 1 : curr + 1));

    if (slideRef.current) {
      slideRef.current.appendChild(itemRef.current[currentIndex] as Node);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.slide} ref={slideRef}>
        {slideData.map((item) => (
          <div
            key={item.id}
            className={style.item}
            ref={(el) => (itemRef.current[item.id] = el)}
            style={{
              backgroundImage: `url(/slide/slide_${item.id}.jpg);`,
            }}
          >
            <div className={style.content}>
              <div className={style.name}>{item.title}</div>
              <div className={style.des}>{item.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className={style.gallery_button}>
        <button className={style.prev} onClick={onPrev}>
          <GoArrowLeft />
        </button>
        <button className={style.next} onClick={onNext}>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
