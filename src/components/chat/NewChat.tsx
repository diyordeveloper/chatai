import React, { useContext } from "react";
import { ThemeContext } from "../ThemeProvider";
import ThumbsDownLight from "../../assets/icons/light/Thumbs Down.svg";
import ThumbsUpLight from "../../assets/icons/light/Thumbs up.svg";

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
                    This is how the message looks when the bot is typing a resp
                  </span>
                  <div className="answer_code">
                    
                  </div>
                </div>
                <div className="blok_two">
                  <img src={ThumbsUpLight} className="like active_class" alt="Error!!!" />
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
