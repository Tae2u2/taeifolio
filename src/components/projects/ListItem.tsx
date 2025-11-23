import Link from "next/link";
import { getList } from "./api/notion";
import style from "./Project.module.sass";

export default async function NotionList() {
  const list = await getList();
  return (
    <>
      <h1 className={style.edu_title}>기록 </h1>
      <Link
        href="https://tae2u2.notion.site/dadd7573594e4c419975a828b2e4e744?v=20c8ca62374d4e46874fe77ae059ba7e"
        target="_blank"
        rel="noopener noreferrer"
        className={style.notion_url}
      >
        Notion페이지로 이동
      </Link>
      <ul className={style.edu_list}>
        {list?.map((item: any) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

const ListItem = ({ item }: { item: any }) => {
  return (
    <li className={style.edu_item}>
      {item.properties.name.title[0]?.plain_text}
    </li>
  );
};
