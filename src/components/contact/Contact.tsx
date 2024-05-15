"use client";

import Image from "next/image";
import Button from "@/components/Button";
import style from "./Contact.module.sass";
import Link from "next/link";
import { TfiGithub } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className={style.contact_box}>
      <div className={style.top_part}>
        <h4>ㄴr 太2는 ㄱr끔,,,꿈☆을 꾼다..S2…]((o_ _)&quot;彡☆</h4>
        <Link href={"https://github.com/roeehql"} target={"_blank"}>
          <TfiGithub />
        </Link>
      </div>
      <div className={style.info}>
        <Image
          src={"/tae_i.jpg"}
          className={style.photo}
          width={200}
          height={200}
          alt=""
        />
        <p className={style.greeting}>
          💜안녕하세요. 강태이입니다. <br />
          💛NextJS를 다루고 있습니다.
          <br />
          🩷UI/UX에 관심을 두고 있고,
          <br />
          💚새로운 기술을 탐색하는 것을 좋아합니다.
        </p>
        <div className={style.history}>
          <h4 className={style.title}>자격증</h4>
          <p>
            정보처리기사 <small>2021.08</small>
            <br />
            데이터분석 준전문가 <small>2020.09</small>
          </p>
          <h4 className={style.title}>학력</h4>
          <p>숭실대학교 기독교학과 졸업</p>
          <p>숭실사이버대학교 시각디자인학과 중퇴</p>
        </div>
        <address>
          <p className={style.myInfo}>kangnimell@gmail.com</p>
          <p className={style.myInfo}>010-9349-0913</p>
        </address>
      </div>
    </div>
  );
};

export default Contact;
