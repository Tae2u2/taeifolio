import Link from "next/link";
import style from "./Project.module.sass";

const ListItem = ({ item }: { item: any }) => {
  return (
    <li key={item.id} className={style.edu_item}>
      <Link href={`/project/${item.id}`}>
        {item.properties.Tags.multi_select.map((tag: any) => (
          <span key={tag.id}>{tag.name}</span>
        ))}
        {"  "}
        {item.properties.Learn.rich_text[0].plain_text} ({" "}
        {item.properties.Period.rich_text[0].plain_text} )
        <br />
        {item.properties.Name.title[0].plain_text}
      </Link>
    </li>
  );
};

export default ListItem;
