"use client";

import Section from "./Section";
import data from "./data/data.json";
import style from "./Project.module.sass";
import { ProjectDataState } from "@/types/projectTypes";
import { CSSProperties } from "react";

import Image from "next/image";

const ProjectLi = ({ item }: { item: ProjectDataState }) => {
  return (
    <li
      key={item.id}
      className={style.list_item}
      style={{ "--position": item.id } as CSSProperties}
    >
      <button type="button" className={style.title_btn}>
        {item.id}. {item.name}
      </button>
      <Section key={item.id} data={item} />
    </li>
  );
};

const Project = () => {
  return (
    <ul className={style.project_list}>
      {data.map((item) => (
        <>
          <ProjectLi key={item.id} item={item} />
          {item.img && (
            <li
              key={item.id + "_img"}
              className={style.list_item + " " + style.img_item}
            >
              <div className={style.img_box}>
                <Image
                  src={item.img as string}
                  alt={item.name}
                  width={400}
                  height={item.id === 4 ? 900 : 2400}
                />
              </div>
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export default Project;
