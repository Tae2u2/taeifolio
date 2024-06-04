import { getRenderPage } from "@/components/projects/api/notion";
import style from "@/components/projects/Project.module.sass";
import Link from "next/link";

async function getRenderData({ params }: { params: { slug: string } }) {
  return getRenderPage(params.slug);
}

const ProjectContentPage = async ({ params }: { params: { slug: string } }) => {
  const renderData = await getRenderData({ params });
  const textArr = Object.values(renderData.block)
    .map((block) => block.value.properties)
    .filter((title) => !!title)
    .map((title) => title.title)
    .flat()
    .map((textItem) => textItem[0])
    .flat();

  return (
    <div className={style.detail_container}>
      <div className={style.notion_link}>
        <Link href={`${process.env.NEXT_PUBLIC_NOTION_DB_URL}`} target="_blank">
          [추천] 노션으로 이동해서 보기
        </Link>
        <p>
          *아래 글은 notion api로 받아온 block에 문자열만 추출해서 출력한 것으로
          가독성이 매우 나쁩니다.
        </p>
      </div>
      <Link href={"/project"} className={style.notion_link}>
        목록으로 돌아가기
      </Link>
      <div className={style.text_wrapper}>
        {textArr.map((text, i) => (
          <p key={`${text}-${i}`}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectContentPage;
