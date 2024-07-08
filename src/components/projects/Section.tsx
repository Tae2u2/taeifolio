import { ProjectDataState } from "@/types/projectTypes";
import style from "./Project.module.sass";
import Link from "next/link";
import { TfiLink } from "react-icons/tfi";

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
        {data.Link !== "" && (
          <Link href={data.Link} target="_blank" className={style.link}>
            <TfiLink />
          </Link>
        )}
      </div>
    </section>
  );
};

export default Section;
