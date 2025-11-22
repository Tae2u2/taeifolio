import Link from "next/link";
import style from "./Navigation.module.sass";

const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <ul className={style.menu}>
        <Link href={"#main-zone"}>
          <li className={style.menu_list}>HOME</li>
        </Link>
        <Link href={"#project-zone"}>
          <li className={style.menu_list}>PROJECT</li>
        </Link>
        <Link href={"#thank-zone"}>
          <li className={style.menu_list}>Thank U</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
