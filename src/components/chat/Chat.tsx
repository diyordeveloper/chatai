import React from "react";
import Layout from "../layout/Layout";
import Select from "./Select";
import "./style.css";
import Suggestions from "./Suggestions";
import SubmitText from "./SubmitText";
function Chat() {
  return (
    <>
      <Layout>
        <Select />
        <Suggestions />
        <SubmitText />
      </Layout>
    </>
  );
}

export default Chat;
