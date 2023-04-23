import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
function Footer() {
  const { toggleTheme, darkMode } = useContext(ThemeContext);

  return (
    <div className="footer_">
      <p
        className="text-center"
        // onClick={toggleTheme}
      >
        <span className={darkMode ? "foter_text" : ""}>powered by</span>{" "}
        <a href="https://bot.co" target="_blank">
          bot.co
        </a>
      </p>
    </div>
  );
}

export default Footer;
