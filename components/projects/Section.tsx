import Image from "next/image";

import Button from "@components/button/Button";
import { ProjectState } from "@@types/propsTypes";

import style from "@styles/Project.module.sass";

const Section = ({
  data,
  handleLinkClick,
  handleGithubClick,
}: ProjectState) => {
  return (
    <div className={style.item}>
      <h3 className={style.title}>
        {data.name}
        <span>{data.title}</span>
      </h3>
      <div className={style.content_box}>
        <div className={style.demo}>
          <Image
            src={data.imageSrc}
            width={500}
            height={300}
            alt="project demo gif"
          />
        </div>
        <div className={style.explain}>
          <p>{data.explain}</p>
          <p>작업기간 : {data.period}</p>
          <h4 className={style.dev_title}>개발언어</h4>
          <p>{data.dev}</p>
        </div>
      </div>
      <div className={style.link}>
        <Button using={"github"} onClick={handleGithubClick} />
        {data.link !== "" && (
          <Button using={"link"} onClick={handleLinkClick} />
        )}
      </div>
    </div>
  );
};

export default Section;
