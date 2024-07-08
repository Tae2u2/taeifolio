import { BadgeState } from "./Stack";
import style from "./Stack.module.sass";

const Badge = ({ item }: { item: BadgeState }) => {
  return <div className={`${style[item.shape]}`}>{item.name}</div>;
};

export default Badge;
