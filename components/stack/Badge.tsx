import { BadgeState } from "@@types/propsTypes";
import { useBooleanState } from "@hooks/useBooleanState";
import style from "@styles/Stack.module.sass";
import { useState } from "react";
import Details from "./Details";

const Badge = ({ shape, name }: BadgeState) => {
  const { isTrue, setTrue, setFalse } = useBooleanState(false);
  const [selectedSkillName, setSelectedSkillName] = useState("");
  const handleBadgeClick = () => {
    setSelectedSkillName(name);
    setTrue();
  };
  return (
    <>
      {shape === "one" && <div className={style.note}>{name}</div>}
      {shape === "square" && (
        <div className={style.badge} onClick={() => handleBadgeClick()}>
          {name}
        </div>
      )}
      {isTrue && (
        <Details title={selectedSkillName} onClickCancel={() => setFalse()} />
      )}
    </>
  );
};

export default Badge;
