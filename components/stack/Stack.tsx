import Badge from "./Badge";
import data from "./data/data.json";
import { BadgeState } from "@@types/propsTypes";

import style from "@styles/Stack.module.sass";

const Stack = () => {
  const stackList: BadgeState[] = data;
  return (
    <div className={style.stack_wrapper}>
      {stackList.map((item) => (
        <Badge key={item.name} shape={item.shape} name={item.name} />
      ))}
    </div>
  );
};

export default Stack;
