import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import Footer from "../layout/Footer";
import PlusCircleLight from "../../assets/icons/light/PlusCircle.svg";
import PaperPlaneTilt from "../../assets/icons/light/PaperPlaneTilt.svg";
function SubmitText() {
  const [message, setMessage] = useState("");
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div
        className={`container Submit_dev ${darkMode ? "Submit_dev_dark" : ""}`}
      >
        <div className="chat_block">
          <div className="add_chat">
            <img src={PlusCircleLight} alt="Error!" />
            <span>New </span>
            <span>chat</span>
          </div>
          <div className="send_msg">
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Send a message..."
              className="msg_"
            />
            <div className="send_">
              <img src={PaperPlaneTilt} className="sendImg" alt="Error!" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SubmitText;
