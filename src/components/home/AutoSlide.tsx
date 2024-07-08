import Image from "next/image";
import { CSSProperties } from "react";
import style from "./AutoSlide.module.css";

const AutoSlide = () => {
  const slideLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={style.banner}>
      <div
        className={style.slider}
        style={{ "--quantity": 10 } as CSSProperties}
      >
        {slideLength.map((index) => (
          <div
            key={index}
            className={style.item}
            style={{ "--position": index } as CSSProperties}
          >
            <Image
              src={`/rotate/woo${index}.jpg`}
              alt=""
              width={200}
              height={250}
            />
          </div>
        ))}
      </div>
      <div className={style.content}>
        <h1 data-content="WOOTAN">WOOTAN</h1>
        <div className={style.author}>
          <h2>감사합니다</h2>
          <p>
            마지막으로 우리집 귀염둥이 자랑합니다. 우탄님이랑 건강하고 행복하게
            오래오래 사는 것이 인간 태이의 소망입니다. 감사합니다 !
          </p>
        </div>
        <div className={style.model}></div>
      </div>
    </div>
  );
};

export default AutoSlide;
