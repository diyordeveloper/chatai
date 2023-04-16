import React from "react";
import ChatDotsDark from "../../assets/icons/dark/ChatDots.svg";
import ClockCounterClockwiseDark from "../../assets/icons/dark/ClockCounterClockwise.svg";
import GearSixDark from "../../assets/icons/dark/GearSix.svg";
import ChatDotsLight from "../../assets/icons/light/ChatDots.svg";
import ClockCounterClockwiseLight from "../../assets/icons/light/ClockCounterClockwise.svg";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  var location = useLocation();
  var pathname = location.pathname;

  return (
    <>
      <div className="container ">
        <div className="navbar_">
          <div className="tables_">
            <NavLink to={"/"} className="table_btn  ">
              <img
                src={pathname == "/" ? ChatDotsLight : ChatDotsDark}
                alt="Error"
              />
              <span>Chat</span>
            </NavLink>
            <NavLink to={"/history"} className="table_btn">
              <img
                src={
                  pathname == "/history"
                    ? ClockCounterClockwiseLight
                    : ClockCounterClockwiseDark
                }
                alt="Error"
              />
              <span>History</span>
            </NavLink>
          </div>
          <div className="btns_">
            <div className="stng_btn">
              <img src={GearSixDark} alt="Error" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
