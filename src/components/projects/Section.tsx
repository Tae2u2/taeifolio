import { ProjectDataState } from "@/types/projectTypes";
import style from "./Project.module.sass";
import Link from "next/link";
import { TfiGithub } from "react-icons/tfi";

const Section = ({ data }: { data: ProjectDataState }) => {
  return (
    <section className={style.item} aria-labelledby={data.title}>
      <h3 className={style.title}>
        {data.name}
        <small>{data.title}</small>
      </h3>
      <div className={style.content_box}>
        <p>
          작업기간 : {data.period}
          <br />
          {data.dev}
          <br />
          {data.explain}
        </p>
        <Link href={data.github} target="_blank" className={style.link}>
          <TfiGithub />
        </Link>
      </div>
    </section>
  );
};

export default Section;
