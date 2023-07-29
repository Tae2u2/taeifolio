import style from "@styles/Stack.module.sass";

export interface BadgeState {
  name: string;
  shape: string | "square" | "one";
  sort: boolean;
}

const Badge = ({ shape, name, sort }: BadgeState) => {
  return (
    <>
      {shape === "one" && (
        <div className={sort ? `${style.sort}` : `${style.note}`}>{name}</div>
      )}
      {shape === "square" && (
        <div className={sort ? `${style.sort}` : `${style.badge}`}>{name}</div>
      )}
    </>
  );
};

export default Badge;
