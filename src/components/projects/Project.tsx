import Section from "./Section";
import data from "./data/data.json";
import style from "./Project.module.sass";
import { ProjectDataState } from "@/types/projectTypes";

const ProjectLi = ({ item }: { item: ProjectDataState }) => {
  return (
    <li key={item.id} className={style.list_item}>
      <span>
        {item.id}. {item.name}
      </span>
      <Section key={item.id} data={item} />
    </li>
  );
};

const Project = () => {
  return (
    <>
      {data.map((item) => (
        <ProjectLi key={item.id} item={item} />
      ))}
    </>
  );
};

export default Project;
