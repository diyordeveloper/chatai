import React, { useContext } from "react";
import { ReactComponent as ChatDotsDark } from "../../assets/icons/dark/ChatDots.svg";
import { ReactComponent as ClockCounterClockwiseDark } from "../../assets/icons/dark/ClockCounterClockwise.svg";
import { ReactComponent as GearSixDark } from "../../assets/icons/dark/GearSix.svg";
import { ReactComponent as ChatDotsLight } from "../../assets/icons/light/ChatDots.svg";
import { ReactComponent as ClockCounterClockwiseLight } from "../../assets/icons/light/ClockCounterClockwise.svg";
import PlusCircleLight from "../../assets/icons/light/PlusCircle.svg";
import { NavLink, useLocation } from "react-router-dom";
import { ThemeContext } from "../ThemeProvider";
import { ChatContext } from "../chat/ChatProvider";

function Header() {
  const { NewChat } = useContext(ChatContext);

  const { darkMode } = useContext(ThemeContext);
  var location = useLocation();
  var pathname = location.pathname;

  return (
    <div className={` headerr_ ${darkMode ? "headerr_dark" : ""}`}>
      <div className={`container`}>
        <div className={`navbar_ ${darkMode ? "nav_dark" : "nav_light"}`}>
          <div className="tables_">
            <NavLink
              to={"/"}
              className={`table_btn ${darkMode ? "dark_btn" : "light_btn"}`}
            >
              {/* <img
                src={pathname === "/" ? ChatDotsLight : ChatDotsDark}
                alt="Error"
              /> */}
              {pathname === "/" ? <ChatDotsLight /> : <ChatDotsDark />}
              <span>Chat</span>
            </NavLink>
            <NavLink
              to={"/history"}
              className={`table_btn ${darkMode ? "dark_btn" : "light_btn"}`}
            >
              {/* <img
                src={
                  pathname === "/history" || pathname === "/history/1"
                    ? ClockCounterClockwiseLight
                    : ClockCounterClockwiseDark
                }
                alt="Error"
              /> */}
              {pathname === "/history" || pathname === "/history/1" ? (
                <ClockCounterClockwiseLight />
              ) : (
                <ClockCounterClockwiseDark />
              )}

              <span>History</span>
            </NavLink>
            <div className="add_chat_dev">
              <NavLink
                onClick={NewChat}
                to={"/"}
                className={`add_new_chat ${
                  darkMode ? "dark_btn" : "light_btn"
                }`}
              >
                <img src={PlusCircleLight} alt="Error" />
                <span className="sp_">New chat</span> 
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
              {/* <img src={GearSixDark} alt="Error" /> */} 
               <> <GearSixDark /> </>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
