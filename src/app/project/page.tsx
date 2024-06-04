import dynamic from "next/dynamic";
import { getList } from "@/components/projects/api/notion";

import ListItem from "@/components/projects/ListItem";
import style from "@/components/projects/Project.module.sass";

const Project = dynamic(() => import("@/components/projects/Project"));

const ProjectPage = () => {
  const getItemList = async () => {
    "use server";
    return await getList();
  };

  return (
    <div>
      <h1 className={style.edu_title}>프로젝트 및 학습내역</h1>
      <ul className={style.edu_list}>
        <Project />
      </ul>
      <ul className={style.edu_list}>
        {/**@ts-ignore */}
        {getItemList().then((result) =>
          result.map((item) => {
            return <ListItem key={item.id} item={item} />;
          })
        )}
      </ul>
    </div>
  );
};

export default ProjectPage;
