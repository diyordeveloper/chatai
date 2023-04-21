import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import Footer from "../layout/Footer";
import PlusCircleLight from "../../assets/icons/light/PlusCircle.svg";
import PaperPlaneTilt from "../../assets/icons/light/PaperPlaneTilt.svg";
import ArrowsClockwiseDark from "../../assets/icons/dark/ArrowsClockwise.svg";
import StopLight from "../../assets/icons/light/Stop.svg";
import { ChatContext } from "./ChatProvider";
function SubmitText() {
  const { submitText, setSubmitText, SendMesssage, NewChat, generateRes } =
    useContext(ChatContext);
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={`Submit_dev ${darkMode ? "Submit_dev_dark" : ""}`}>
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

        <div className="submit_">
          <div className={`container `}>
            <div className="chat_block">
              <div className="add_chat">
                <img src={PlusCircleLight} alt="Error!" />
                <span>New </span>
                <span>chat</span>
              </div>
              <div className="send_msg">
                <input
                  type="text"
                  onChange={(e) => setSubmitText(e.target.value)}
                  value={submitText}
                  placeholder="Send a message..."
                  className="msg_"
                />
                <div className="send_" onClick={SendMesssage}>
                  <img src={PaperPlaneTilt} className="sendImg" alt="Error!" />
                </div>
              </div>
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
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default SubmitText;
