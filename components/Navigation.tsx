import Link from "next/link";
import { useBooleanState } from "../hooks/useBooleanState";
import Button from "./Button";
import style from "@styles/Navigation.module.sass";

const Navigation = () => {
  const { isTrue, setTrue, setFalse } = useBooleanState();

  return (
    <div className={style.navigation}>
      <Button
        using={"menu"}
        onClick={() => (isTrue ? setFalse() : setTrue())}
        onMouseEnter={() => setTrue()}
      />
      {isTrue && (
        <ul className={style.menu} onMouseLeave={() => setFalse()}>
          <li className={style.menu_list}>
            <Link href={"/"}>PROJECT</Link>
          </li>
          <li className={style.menu_list}>
            <Link href={"/skill"}>SKILL</Link>
          </li>
          <li className={style.menu_list}>
            <Link href={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navigation;
