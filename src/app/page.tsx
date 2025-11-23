import dynamic from "next/dynamic";
import Stack from "@/components/stack/Stack";
import style from "@/components/projects/Project.module.sass";
import NotionList from "@/components/projects/ListItem";
import SideProject from "@/components/projects/SideProject";

const Contact = dynamic(() => import("@/components/home/Contact"));
const Project = dynamic(() => import("@/components/projects/Project"));
const AutoSlide = dynamic(() => import("@/components/home/AutoSlide"));

export default function Home() {
  return (
    <main>
      <Contact />
      <Stack />
      <div id="project-zone" className={style.project_container}>
        <h1 className={style.edu_title}>PROJECT</h1>
        <Project />
      </div>
      <SideProject />
      <NotionList />
      <AutoSlide />
    </main>
  );
}
