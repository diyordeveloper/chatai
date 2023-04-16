import React, { useContext } from "react";
import styled from "styled-components";
import Router from "./Router";
import { ThemeContext } from "./components/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
// style
import "./assets/style/global.css";
import "./assets/style/all.css";

function App() {
  const { COLORS } = useContext(ThemeContext);
  const Theme = styled.body`
    background: ${COLORS.bgColor};
    color: ${COLORS.text};
  `;
  return (
    <>
      <Theme>
        <div className="app">
          <Router />
        </div>
      </Theme>
    </>
  );
}

export default App;
