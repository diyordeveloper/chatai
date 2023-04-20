import React, { useContext } from "react";
import ClockCounterClockwiseDark from "../../assets/icons/dark/ClockCounterClockwise.svg";
import { ThemeContext } from "../ThemeProvider";

function Empty() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className="container">
        <div className={`empty_ ${darkMode ? "empty_dark" : ""}`}>
          <div className="em_center_">
            <img src={ClockCounterClockwiseDark} alt="Error!!!" />
            <span>There's no history yet</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Empty;
