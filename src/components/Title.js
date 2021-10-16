import { Fragment, useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext, ThemeModes } from "../store/theme-context";
const Title = () => {
  const themeCtx = useContext(ThemeContext);

  let content;
  if (themeCtx.mode === ThemeModes.Dark) {
    content = (
      <Fragment>
        <h3>Light</h3> <FaSun />
      </Fragment>
    );
  } else {
    content = (
      <Fragment>
        <h3>Dark</h3> <FaMoon />
      </Fragment>
    );
  }

  return (
    <div className={`flex justify-between`}>
      <h3 className="m-2 dark:text-white text-black font-bold">devfinder</h3>
      <button
        className="m-2 dark:text-white text-black flex items-center gap-4 uppercase text-xs tracking-widest"
        onClick={themeCtx.toggleTheme}
      >
        {content}
      </button>
    </div>
  );
};

export default Title;
