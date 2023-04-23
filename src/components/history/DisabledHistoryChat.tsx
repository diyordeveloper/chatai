import React, { useContext, useState } from "react";
import Layout from "../layout/Layout";

import { ThemeContext } from "../ThemeProvider";
import ThumbsDownLight from "../../assets/icons/light/Thumbs Down.svg";
import ThumbsUpLight from "../../assets/icons/light/Thumbs up.svg";
import CopyLight from "../../assets/icons/light/Copy.svg";
import PaperPlaneTilt from "../../assets/icons/light/PaperPlaneTilt.svg";
import PaperPlaneTiltDark from "../../assets/icons/dark/PaperPlaneTilt.svg";
import "./DisabledHistory.css";
import Footer from "../layout/Footer";
function DisabledHistoryChat() {
  const { darkMode } = useContext(ThemeContext);
  const [toggleState, setToggleState] = useState(-1);
  const toggleTab = (index: any) => {
    setToggleState(index);
  };
  return (
    <>
      <Layout>
        <div className={`new_chat  ${darkMode ? "new_chat_dark" : ""}`}>
          <div className="chat_ chat_you">
            <div className="container">
              <div className="content_">
                <span className="name_">You:</span>
                <span className="question">
                  This is what a short request from user
                </span>
              </div>
            </div>
          </div>
          <div className="chat_ chat_bot">
            <div className="container">
              <div className="content_">
                <span className="name_">Bot:</span>
                <div className="bot_block">
                  <div className="blok_one">
                    <span className="answer_text">
                      This is what a short response from the chatbot looks like
                    </span>
                    {/* <div className="answer_code">
                      <div className="answer_head">
                        <span className="code_title">python</span>
                        <div className="copy_">
                          <img src={CopyLight} alt="Error!!!" />
                          <span>Copy code</span>
                        </div>
                      </div>
                      <div className="answer_body">
                        <span className="code_row">
                          <span className="orange_">print</span>{" "}
                          <span className="qavs">(</span>
                          <span className="green_">“Hello, World!”</span>
                          <span className="qavs">)</span>
                        </span>
                      </div>
                    </div> */}
                  </div>
                  <div className="blok_two">
                    <img
                      src={ThumbsUpLight} 
                      className={`like ${
                        toggleState === 1 ? "active_class" : ""
                      }`}
                      onClick={() => toggleTab(1)}  
                      alt="Error!!!"
                    />
                    <img
                      src={ThumbsDownLight}
                      className={`dislike ${
                        toggleState === 2 ? " active_class" : ""
                      }`}
                      onClick={() => toggleTab(2)}
                      alt="Error!!!"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`Submit_dev ${darkMode ? "Submit_dev_dark" : ""}`}>
          <div className="submit_">
            <div className={`container `}>
              <div className="chat_block">
                <div className="send_msg send_msg_ofline">
                  <input
                    type="text"
                    placeholder="Conversation ended"
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
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default DisabledHistoryChat;
