import { ButtonState } from "@@types/propsTypes";

import {
  TfiAlignJustify,
  TfiClose,
  TfiArrowTopRight,
  TfiGithub,
} from "react-icons/tfi";
import style from "@styles/Button.module.sass";

const Button = ({ using, text, onClick, onMouseEnter }: ButtonState) => {
  return (
    <>
      {using === "menu" && (
        <button
          className={style.menu_button}
          onClick={onClick}
          onMouseEnter={onMouseEnter}
        >
          <TfiAlignJustify />
        </button>
      )}
      {using === "cancel" && (
        <button className={style.cancel_button} onClick={onClick}>
          <TfiClose />
        </button>
      )}
      {using === "link" && (
        <button className={style.link_button} onClick={onClick}>
          <TfiArrowTopRight />
        </button>
      )}
      {using === "github" && (
        <button className={style.link_button} onClick={onClick}>
          <TfiGithub />
        </button>
      )}
      {using === "text" && (
        <button className={style.text_button} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
