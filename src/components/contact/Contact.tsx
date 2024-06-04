import Image from "next/image";
import style from "./Contact.module.sass";
import Link from "next/link";
import { TfiGithub } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className={style.contact_box}>
      <div className={style.top_part}>
        <Link href={"https://github.com/roeehql"} target={"_blank"}>
          <TfiGithub />
        </Link>
        <Link
          href={
            "https://tae2u2.notion.site/08317161fe4c4767b6001683268af948?pvs=4"
          }
          target="_blank"
        >
          N
        </Link>
      </div>
      <div className={style.info}>
        <Image
          src={"/tae_i.jpg"}
          className={style.photo}
          width={200}
          height={200}
          alt=""
          priority
        />
        <p className={style.greeting}>
          💜안녕하세요 !!
          <br />
          💙프론트엔드 개발자 강태이입니다. <br />
          💛NextJS를 다루고 있습니다.
          <br />
          🩷UI/UX에 관심을 두고 있고,
          <br />
          💚새로운 기술을 탐색하는 것을 좋아합니다.
        </p>

        <address>
          <p className={style.myInfo}>kangnimell@gmail.com</p>
          <p className={style.myInfo}>010-9349-0913</p>
        </address>
      </div>
    </div>
  );
};

export default Contact;
