import React, { useContext } from "react";
import ChatDotsDark from "../../assets/icons/dark/ChatDots.svg";
import ClockCounterClockwiseDark from "../../assets/icons/dark/ClockCounterClockwise.svg";
import GearSixDark from "../../assets/icons/dark/GearSix.svg";
import ChatDotsLight from "../../assets/icons/light/ChatDots.svg";
import ClockCounterClockwiseLight from "../../assets/icons/light/ClockCounterClockwise.svg";
import PlusCircleLight from "../../assets/icons/light/PlusCircle.svg";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";

function Header() {
  const { darkMode } = useContext(ThemeContext);
  var location = useLocation();
  var pathname = location.pathname;

  return (
    <>
      <div className="container ">
        <div className={`navbar_ ${darkMode ? "nav_dark" : "nav_light"}`}>
          <div className="tables_">
            <NavLink
              to={"/"}
              className={`table_btn ${darkMode ? "dark_btn" : "light_btn"}`}
            >
              <img
                src={pathname === "/" ? ChatDotsLight : ChatDotsDark}
                alt="Error"
              />
              <span>Chat</span>
            </NavLink>
            <NavLink
              to={"/history"}
              className={`table_btn ${darkMode ? "dark_btn" : "light_btn"}`}
            >
              <img
                src={
                  pathname === "/history"
                    ? ClockCounterClockwiseLight
                    : ClockCounterClockwiseDark
                }
                alt="Error"
              />
              <span>History</span>
            </NavLink>
            <div className="add_chat_dev">
            <NavLink
              to={"/"}
              className={`add_new_chat ${darkMode ? "dark_btn" : "light_btn"}`}
            >
              <img src={PlusCircleLight} alt="Error" />
              <span>New </span><span>chat</span>
            </NavLink>
            </div>
          </div>
          <div className="btns_">
            <NavLink
              to={"/settings"}
              className={`stng_btn ${
                darkMode ? "stng_btn_dark" : "stng_btn_light"
              }`}
            >
              <img src={GearSixDark} alt="Error" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;