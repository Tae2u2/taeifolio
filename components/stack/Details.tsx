import Button from "@components/Button";
import style from "@styles/Stack.module.sass";

const Details = ({
  title,
  onClickCancel,
}: {
  title: string;
  onClickCancel: () => void;
}) => {
  return (
    <div className={style.detail_wrapper}>
      <div className={style.detail_modal}>
        <Button using="cancel" onClick={onClickCancel} />
        <h2>{title}</h2>
        <p>설명</p>
      </div>
    </div>
  );
};

export default Details;
