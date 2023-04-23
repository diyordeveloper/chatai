import React, { useContext } from "react";
import Layout from "../layout/Layout";
import "./style.css";
import Suggestions from "./Suggestions";
import SubmitText from "./SubmitText";
import NewChat from "./NewChat";
import { ChatContext } from "./ChatProvider";
function Chat() {
  const { newChatBolean } = useContext(ChatContext);
  return (
    <>
      <Layout>
        {newChatBolean ? <NewChat /> : <Suggestions />}
        <SubmitText />
      </Layout>
    </>
  );
}

export default Chat;
