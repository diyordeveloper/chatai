import React, { useState, useContext, useEffect, useRef } from "react";
import CloseIcon from "../../assets/icons/dark/X.svg";
import { ThemeContext } from "../ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
function Settings() {
  var navigate = useNavigate();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  var temperature_lowItem = localStorage.getItem("temperature_low");
  var topk_lowItem = localStorage.getItem("topk_low");
  var temperature_highItem = localStorage.getItem("temperature_high");
  var topk_highItem = localStorage.getItem("topk_high");

  const [temperature_low, setTemperature_Low] = useState(
    temperature_lowItem || "0.2"
  );
  const [topk_low, setTopK_Low] = useState(topk_lowItem || "40");
  const [temperature_high, setTemperature_High] = useState(
    temperature_highItem || "0.8"
  );
  const [topk_high, setTopK_High] = useState(topk_highItem || "40");
  function SaveChanges() {
    if (
      temperature_lowItem == null ||
      topk_lowItem == null ||
      temperature_highItem == null ||
      topk_highItem == null
    ) {
      localStorage.setItem("temperature_low", temperature_low);
      localStorage.setItem("topk_low", topk_low);
      localStorage.setItem("temperature_high", temperature_high);
      localStorage.setItem("topk_high", topk_high);
    } else {
      localStorage.removeItem("temperature_low");
      localStorage.removeItem("topk_low");
      localStorage.removeItem("temperature_high");
      localStorage.removeItem("topk_high");
      localStorage.setItem("temperature_low", temperature_low);
      localStorage.setItem("topk_low", topk_low);
      localStorage.setItem("temperature_high", temperature_high);
      localStorage.setItem("topk_high", topk_high);
    }
    navigate(-1);
  }
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleKeyPress(event: KeyboardEvent): void {
      if (event.key === "Enter") {
        buttonRef.current?.click();
      }
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      <>
        <div className={`container  header_ ${darkMode ? "h_dark" : ""}`}>
          <span className="title_">Settings</span>
          <div>
            <img
              src={CloseIcon}
              onClick={SaveChanges}
              className="close_ "
              style={{ cursor: "pointer" }}
              alt="Error!"
            />
          </div>
        </div>
        <div className={`container body_dev ${darkMode ? "b_dark" : ""}`}>
          <div className="mode_row">
            <span className="txt_lg">Dark Mode</span>
            <div
              className={`toggle-switch ${darkMode ? "off" : "on"}`}
              onClick={toggleTheme}
            >
              <div className="toggle-switch-slider"></div>
            </div>
          </div>
          <div className="low_temp">
            <span className="txt_lg">Low-temperature</span>
            <div className="hr_"></div>
            <div className="row_">
              <span className="txt_sm">Temperature</span>
              <input
                type="text"
                className="num"
                onChange={(e) => setTemperature_Low(e.target.value)}
                value={temperature_low}
                maxLength={3}
              />
            </div>
            <div className="row_">
              <span className="txt_sm">Top_k</span>
              <input
                type="text"
                className="num"
                onChange={(e) => setTopK_Low(e.target.value)}
                maxLength={2}
                value={topk_low}
              />
            </div>
          </div>
          <div className="high_temp">
            <span className="txt_lg">High-temperature</span>
            <div className="hr_"></div>
            <div className="row_">
              <span className="txt_sm">Temperature</span>
              <input
                type="text"
                className="num"
                onChange={(e) => setTemperature_High(e.target.value)}
                maxLength={3}
                value={temperature_high}
              />
            </div>
            <div className="row_">
              <span className="txt_sm">Top_k</span>
              <input
                type="text"
                className="num"
                onChange={(e) => setTopK_High(e.target.value)}
                maxLength={2}
                value={topk_high}
              />
            </div>
          </div>
          <button className="btn_update" ref={buttonRef} onClick={SaveChanges}>
            Save settings
          </button>
        </div>
      </>
    </>
  );
}

export default Settings;
