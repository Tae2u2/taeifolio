import data from "./data/data.json";
import { useBooleanState } from "@hooks/useBooleanState";
import Badge from "./Badge";
import Button from "@components/Button";

import style from "@styles/Stack.module.sass";

const Stack = () => {
  const stackList: { name: string; shape: string }[] = data;
  const {
    isTrue: isSort,
    setTrue: setSort,
    setFalse: setUnSort,
  } = useBooleanState();

  return (
    <div
      className={isSort ? `${style.sort_wrapper}` : `${style.stack_wrapper}`}
    >
      {stackList.map((item) => (
        <Badge
          key={item.name}
          shape={item.shape}
          name={item.name}
          sort={isSort}
        />
      ))}
      <div className={style.sort_button}>
        <Button
          using="text"
          text={isSort ? "되돌리기" : "정렬하기"}
          onClick={() => (isSort ? setUnSort() : setSort())}
        />
      </div>
    </div>
  );
};

export default Stack;
