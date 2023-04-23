import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import ThumbsDownLight from "../../assets/icons/light/Thumbs Down.svg";
import ThumbsUpLight from "../../assets/icons/light/Thumbs up.svg";
import CopyLight from "../../assets/icons/light/Copy.svg";

import "./NewChatStyle.css";
function NewChat() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={`new_chat  ${darkMode ? "new_chat_dark" : ""}`}>
        <div className="chat_ chat_you">
          <div className="container">
            <div className="content_">
              <span className="name_">You:</span>
              <span className="question">Some Request</span>
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
                    Here's an example of a simple Python code that displays the
                    string "Hello, World!" on the screen:
                  </span>
                  <div className="answer_code">
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
                  </div>
                </div>
                <div className="blok_two">
                  <img
                    src={ThumbsUpLight}
                    className="like "
                    // className="active_class"
                    alt="Error!!!"
                  />
                  <img
                    src={ThumbsDownLight}
                    className="dislike"
                    alt="Error!!!"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* default ---- */}
      </div>
    </>
  );
}

export default NewChat;
