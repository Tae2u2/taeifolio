import Link from "next/link";
import { useBooleanState } from "../hooks/useBooleanState";
import Button from "./Button";
import style from "@styles/Navigation.module.sass";

const Navigation = () => {
  const { isTrue, setTrue, setFalse } = useBooleanState();

  return (
    <nav className={style.navigation}>
      <Button
        using={"menu"}
        onClick={() => (isTrue ? setFalse() : setTrue())}
      />
      {!isTrue && (
        <ul className={style.menu}>
          <Link href={"/"}>
            <li className={style.menu_list}>PROJECT</li>
          </Link>
          <Link href={"/skill"}>
            <li className={style.menu_list}>SKILL</li>
          </Link>
          <Link href={"/contact"}>
            <li className={style.menu_list}>CONTACT</li>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
