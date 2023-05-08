import React, { useContext } from "react";
import styled from "styled-components";
import Router from "./Router";
import { ThemeContext } from "./components/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "./assets/style/global.css";
import "./assets/style/all.css";

function App() {
  const { COLORS, darkMode } = useContext(ThemeContext);
  // const Theme = styled.body`
  //   background: ${COLORS.bgColor};
  //   color: ${COLORS.text} !important;
  // `;
  return (
    <>
      <>
        <div
          style={{ background: `${COLORS.bgColor}`, color: `${COLORS.text} ` }}
          className={`app ${darkMode ? "app_dark" : ""}`}
        >
          <Router />
        </div>
      </>
    </>
  );
}

export default App;
