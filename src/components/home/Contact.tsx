import Image from "next/image";
import style from "./Contact.module.sass";
import Link from "next/link";
import { TfiGithub, TfiNotepad } from "react-icons/tfi";

const Contact = () => {
  return (
    <>
      <h1 className={style.big_title}>FRONTEND DEV.</h1>
      <div id="main_zone" className={style.contact_box}>
        <div className={style.top_part}>
          <Link href={"https://velog.io/@bubble0912/posts"} target={"_blank"}>
            <TfiNotepad />
          </Link>
          <Link href={"https://github.com/Tae2u2"} target={"_blank"}>
            <TfiGithub />
          </Link>
        </div>
        <div className={style.info}>
          <p className={style.greeting}>
            💙프론트엔드 개발자 강태이입니다. <br />
            💛NextJS, React를 다루고 있습니다.
            <br />
            🩷UI/UX에 우선순위를 두고 있고,
            <br />
            💚새로운 기술을 탐색하는 것을 좋아합니다.
          </p>

          <address>
            <p className={style.myInfo}>kangnimell@gmail.com</p>
          </address>
        </div>
      </div>
    </>
  );
};

export default Contact;
