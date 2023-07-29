import { useEffect, useState } from "react";
import Section from "./Section";
import data from "./data/data.json";
import { ProjectDataState } from "@@types/projectTypes";
import { useBooleanState } from "@hooks/useBooleanState";
import style from "@styles/Project.module.sass";
import Button from "@components/Button";

const Project = () => {
  const [currentState, setCurrentState] = useState(1);
  const [selectedData, setSelectedData] = useState<ProjectDataState[]>();
  const [timer, setTimer] = useState(10);
  const {
    isTrue: isStop,
    setTrue: setIsStopTrue,
    setFalse: setIsStopFalse,
  } = useBooleanState();

  const handleLiClick = (id: number) => {
    setIsStopTrue();
    setCurrentState(id);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (isStop) {
        clearInterval(timer);
        setTimer(10);
      } else setTimer((current) => (current === 1 ? 10 : current - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [isStop]);

  useEffect(() => {
    const play = setInterval(() => {
      if (isStop) clearInterval(play);
      else setCurrentState((current) => (current === 4 ? 1 : current + 1));
    }, 10000);
    return () => clearInterval(play);
  }, [isStop]);

  useEffect(() => {
    const projectData = data.filter((item) => item.id === currentState);
    setSelectedData(projectData);
  }, [currentState]);

  return (
    <div className={style.project_wrapper}>
      <div className={style.list_box}>
        <div className={style.auto_slider}>
          <Button
            using={"text"}
            onClick={isStop ? setIsStopFalse : setIsStopTrue}
            text={isStop ? "▶" : "■"}
          />
          <progress id="progress" max={10} value={timer}>
            {timer}
          </progress>
        </div>
        <ol>
          {data.map((item) => (
            <li
              key={item.id}
              className={
                currentState === item.id
                  ? `${style.list_item} ${style.selected}`
                  : `${style.list_item}`
              }
              onClick={() => handleLiClick(item.id)}
            >
              {item.id}. {item.name}
            </li>
          ))}
        </ol>
      </div>
      {selectedData?.map((item) => (
        <Section key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Project;
