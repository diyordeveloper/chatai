import React, { useContext } from "react";

import { ThemeContext } from "../ThemeProvider";
function Footer() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div className="footer_">
      <p className="text-center" onClick={toggleTheme}>
        powered by{" "}
        <a href="https://bot.co" target="_blank">
          bot.co
        </a>
      </p>
    </div>
  );
}

export default Footer;
