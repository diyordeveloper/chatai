import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../ThemeProvider";
import Footer from "../layout/Footer";
import PlusCircleLight from "../../assets/icons/light/PlusCircle.svg";
import PaperPlaneTilt from "../../assets/icons/light/PaperPlaneTilt.svg";
import PaperPlaneTiltDark from "../../assets/icons/dark/PaperPlaneTilt.svg";
import PaperPlaneTiltActive from "../../assets/icons/light/PaperPlaneTiltActive.svg";
import ArrowsClockwiseDark from "../../assets/icons/dark/ArrowsClockwise.svg";
import StopLight from "../../assets/icons/light/Stop.svg";
import { ChatContext } from "./ChatProvider";
function SubmitText() {
  const {
    submitText,
    setSubmitText,
    SendMesssage,
    NewChat,
    generateRes,
    handleKeyPress,
  } = useContext(ChatContext);
  const { darkMode } = useContext(ThemeContext);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isFocused, setIsFocused] = useState(false);
  const [hoveredPilot, setHoveredPilot] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const [hoveredInput, setHoveredInput] = useState<any>(false);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <>
      <div className={`Submit_dev ${darkMode ? "Submit_dev_dark" : ""}`}>
        {isOnline ? (
          <>
            {generateRes ? (
              <div className="generate_btns_">
                {true ? (
                  <div className="btn_gnrt">
                    <img src={ArrowsClockwiseDark} alt="Error!!" />
                    <span>Regenerate Response</span>
                  </div>
                ) : (
                  <div className="btn_gnrt">
                    <img src={StopLight} alt="Error!!" />
                    <span>Stop generating</span>
                  </div>
                )}
              </div>
            ) : null}
          </>
        ) : null}

        <div className="submit_">
          <div className={`container `}>
            <div className="chat_block">
              <div className="add_chat" onClick={NewChat}>
                <img src={PlusCircleLight} alt="Error!" />
                <span>New </span>
                <span>chat</span>
              </div>
              {isOnline ? (
                <div
                  className="send_msg"
                  onMouseEnter={() => setHoveredInput(true)}
                  onMouseLeave={() => setHoveredInput(false)}
                >
                  <input
                    type="text"
                    value={submitText}
                    onChange={(e) => setSubmitText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    placeholder="Send a message..."
                    className={`msg_ ${hoveredInput ? "msg_Active" : ""}`}
                  />
                  <div
                    className={`send_ ${isFocused ? "send_focus" : ""} ${
                      hoveredInput ? "send_focus" : ""
                    }`}
                    onClick={SendMesssage}
                  >
                    <img
                      onMouseEnter={() => setHoveredPilot(true)}
                      onMouseLeave={() => setHoveredPilot(false)}
                      src={
                        submitText != ""
                          ? isFocused
                            ? hoveredPilot
                              ? PaperPlaneTiltActive
                              : darkMode
                              ? PaperPlaneTiltDark
                              : PaperPlaneTilt
                            : darkMode
                            ? PaperPlaneTiltDark
                            : PaperPlaneTilt
                          : darkMode
                          ? PaperPlaneTiltDark
                          : PaperPlaneTilt
                      }
                      className={`sendImg ${
                        submitText != ""
                          ? isFocused
                            ? "sendImgActive"
                            : ""
                          : ""
                      } `}
                      alt="Error!"
                    />
                  </div>
                </div>
              ) : (
                <div className="send_msg send_msg_ofline">
                  <input
                    type="text"
                    placeholder="No connection to the webservice"
                    className="msg_ msg_ofline"
                    disabled
                  />
                  <div className="send_ ">
                    <img
                      src={darkMode ? PaperPlaneTiltDark : PaperPlaneTilt}
                      className="sendImg"
                      alt="Error!"
                    />
                  </div>
                </div>
              )}
              <>
                {isOnline ? (
                  <>
                    {generateRes ? (
                      <div className="render_btns">
                        {true ? (
                          <div className="render_btn">
                            <img src={ArrowsClockwiseDark} alt="Error!" />
                          </div>
                        ) : (
                          <div className="stop_btn ">
                            <img src={StopLight} alt="Error!" />
                          </div>
                        )}
                      </div>
                    ) : null}
                  </>
                ) : null}
              </>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitText;
