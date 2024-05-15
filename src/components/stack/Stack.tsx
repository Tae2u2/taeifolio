"use client";

import data from "./data/data.json";
import Badge from "./Badge";

import style from "./Stack.module.sass";

export interface BadgeState {
  name: string;
  shape: string | "ribbon" | "square" | "one";
}

const Stack = () => {
  const stackList: BadgeState[] = data;

  return (
    <div className={style.stack_wrapper}>
      <div className={style.item_flex}>
        {stackList.map((item) => (
          <Badge key={item.name} shape={item.shape} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Stack;
