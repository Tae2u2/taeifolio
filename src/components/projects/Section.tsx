import Image from "next/image";
import Button from "@/components/Button";
import { ProjectDataState } from "@/types/projectTypes";
import style from "./Project.module.sass";

const Section = ({ data }: { data: ProjectDataState }) => {
  const handleLinkClick = (link: string) => {
    window.open(link);
  };

  return (
    <section className={style.item} aria-labelledby={data.title}>
      <h3 className={style.title}>
        {data.name}
        <span>{data.title}</span>
        <div className={style.link}>
          <Button
            using={"github"}
            onClick={() => handleLinkClick(data.github)}
          />
          {data.link !== "" && (
            <Button using={"link"} onClick={() => handleLinkClick(data.link)} />
          )}
        </div>
      </h3>
      <div className={style.content_box}>
        <div className={style.demo}>
          <Image
            src={data.imageSrc}
            width={400}
            height={500}
            alt="프로젝트 UI화면의 일부를 보여줌"
          />
        </div>
        <div className={style.explain}>
          <p>{data.explain}</p>
          <p>작업기간 : {data.period}</p>
          <h4 className={style.dev_title}>개발언어</h4>
          <p>{data.dev}</p>
        </div>
      </div>
    </section>
  );
};

export default Section;
