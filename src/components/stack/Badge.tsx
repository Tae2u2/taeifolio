import { BadgeState } from "./Stack";
import style from "./Stack.module.sass";

const Badge = ({ shape, name }: BadgeState) => {
  return <div className={`${style[shape]}`}>{name}</div>;
};

export default Badge;
