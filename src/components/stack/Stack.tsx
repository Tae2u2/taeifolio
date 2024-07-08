"use client";

import data from "./data/data.json";
import Badge from "./Badge";

import style from "./Stack.module.sass";
import { useIntersection } from "@/hooks/useIntersection";
import { useRef } from "react";

export interface BadgeState {
  name: string;
  shape: string | "ribbon" | "square" | "one";
}

const Stack = () => {
  const stackList: BadgeState[] = data;
  const targetRef = useRef(null);
  const { isVisible } = useIntersection(targetRef);

  return (
    <div className={style.stack_wrapper}>
      <div className={style.greet_card}>
        <h4>My Stack !!</h4>
        <p>
          프로젝트에서 기능 구현 경험이 있고,
          <br />
          공식문서에서 제공하는 기본 코드 이상을 활용한 적이 있는 기술들 입니다.
        </p>
      </div>
      <div
        ref={targetRef}
        className={
          isVisible ? `${style.show} ${style.item_flex}` : style.item_flex
        }
      >
        {stackList.map((item) => (
          <Badge key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
