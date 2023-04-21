import React, { useContext } from "react";
import styled from "styled-components";
import Router from "./Router";
import { ThemeContext } from "./components/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
// style
import "./assets/style/global.css";
import "./assets/style/all.css";

function App() {
  const { COLORS, darkMode } = useContext(ThemeContext);
  const Theme = styled.body`
    background: ${COLORS.bgColor};
    color: ${COLORS.text} !important;
  `;
  return (
    <>
      <Theme>
        <div className={`app ${darkMode ? "app_dark" : ""}`}>
          <Router />
        </div>
      </Theme>
    </>
  );
}

export default App;
