import style from "@styles/Navigation.module.sass";

const DarkMode = ({
  isDark,
  handleDarkMode,
}: {
  isDark: boolean;
  handleDarkMode: () => void;
}) => {
  return (
    <div className={style.darkmode} onClick={() => handleDarkMode()}>
      <span
        className={isDark ? `${style.ball} ${style.dark}` : `${style.ball}`}
      >
        {isDark ? "🔅" : "🌙"}
      </span>
    </div>
  );
};

export default DarkMode;
