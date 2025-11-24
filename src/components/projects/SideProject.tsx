import Image from "next/image";
import style from "./Project.module.sass";
import { ProjectLi } from "./Project";

const SideProject = () => {
  const data = [
    {
      id: 1,
      name: "어드민 UI",
      title: "관리자 페이지 UI 컴포넌트 라이브러리",
      explain:
        "대시보드, 리스트, 필터가 적용된 캠화면, 달력 등 그룹웨어에 적용했던 UI들을 적용해두었습니다.",
      period: "2025.11",
      dev: "NextJS Typescript TailwindCSS CLAUDE API",
      Link: "",
      img: "/project/admin.png",
    },
    {
      id: 2,
      name: "최애족보",
      title: "역대 최애들의 공통점을 AI로 분석하는 서비스",
      explain: "CLAUDE API 활용, 로컬기반 이미지 출력",
      period: "2025.10",
      dev: "NextJS Typescript TailwindCSS CLAUDE API",
      Link: "https://your-bias-family.vercel.app/",
      img: "/project/bias.png",
    },
  ];
  return (
    <div>
      <h1 className={style.edu_title}>SIDE PROJECT</h1>
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
                    height={item.id === 1 ? 1200 : 1600}
                  />
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default SideProject;
