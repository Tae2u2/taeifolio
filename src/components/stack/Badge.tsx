import { BadgeState } from "./Stack";
import style from "./Stack.module.sass";

const Badge = ({ shape, name }: BadgeState) => {
  return (
    <>
      {shape === "square" && <div className={style.square}>{name}</div>}
      {shape === "ribbon" && (
        <div className={style.ribbon}>
          <i>{name}</i>
        </div>
      )}
      {shape === "one" && <div className={style.one}>{name}</div>}
    </>
  );
};

export default Badge;
