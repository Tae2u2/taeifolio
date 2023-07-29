import Image from "next/image";
import Button from "@components/Button";
import style from "@styles/Contact.module.sass";

const Contact = () => {
  const handleGithubClick = () => {
    window.open("https://github.com/roeehql");
  };
  const handleNotionClick = () => {
    window.open(
      "https://www.notion.so/React-9b699297ec5c4e7a93a9a0d7d9e26f69?pvs=4"
    );
  };
  return (
    <div className={style.contact_box}>
      <div className={style.owner}>
        <div className={style.photo}>
          <Image src={"/tae_i.jpg"} width={200} height={200} alt="" />
        </div>
        <div className={style.info}>
          <p className={style.greeting}>
            안녕하세요. 강태이입니다. <br />
            React를 주로 학습했습니다.
            <br />
            UI/UX에 흥미를 두고 있고,
            <br />
            적극적이고, 무던한 성격으로
            <br />
            어디서나 잘 적응합니다.
          </p>
          <p className={style.myInfo}>kangnimell@gmail.com</p>
          <p className={style.myInfo}>010-9349-0913</p>
        </div>
      </div>
      <div>
        <div className={style.history}>
          <h4 className={style.title}>자격증</h4>
          <p>
            정보처리기사 <small>2021.08</small>
          </p>
          <h4 className={style.title}>학력</h4>
          <p>숭실대학교 기독교학과 졸업</p>
          <p>숭실사이버대학교 시각디자인학과 중퇴</p>
          <h4 className={style.title}>학습</h4>
          <p>노션에 학습과정이 정리되어 있습니다.</p>
        </div>
        <p className={style.hidden}>
          Github버튼과 Notion 버튼을 누르시면 새 창이 열립니다.
        </p>
        <Button using={"text"} text="Github" onClick={handleGithubClick} />
        <Button using={"text"} text="Notion" onClick={handleNotionClick} />
      </div>
    </div>
  );
};

export default Contact;
