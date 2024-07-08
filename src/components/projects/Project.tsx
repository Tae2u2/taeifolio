import Section from "./Section";
import data from "./data/data.json";
import style from "./Project.module.sass";
import { ProjectDataState } from "@/types/projectTypes";
import { CSSProperties } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const ProjectLi = ({ item }: { item: ProjectDataState }) => {
  return (
    <li
      key={item.id}
      className={style.list_item}
      style={{ "--position": item.id } as CSSProperties}
    >
      <span>
        {item.id}. {item.name}
      </span>
      <Section key={item.id} data={item} />
    </li>
  );
};

const Project = () => {
  return (
    <ul className={style.project_list}>
      {data.map((item) => (
        <ProjectLi key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Project;
