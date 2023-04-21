import React, { useState, useContext } from "react";
import CloseIcon from "../../assets/icons/dark/X.svg";
import { ThemeContext } from "../ThemeProvider";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
function Settings() {
  var navigate = useNavigate();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [temperature_low, setTemperature_Low] = useState("0.2");
  const [topk_low, setTopK_Low] = useState("40");
  const [temperature_high, setTemperature_High] = useState("0.8");
  const [topk_high, setTopK_High] = useState("40");
  function SaveChanges() {
    navigate(-1);
  }
  return (
    <>
      <>
        <div className={`container header_ ${darkMode ? "h_dark" : ""}`}>
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
        </div>
        <div className="container footer_dev">
          <button className="btn_update" onClick={SaveChanges}>
            Save settings
          </button>
        </div>
      </>
    </>
  );
}

export default Settings;
