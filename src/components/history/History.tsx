import React, { useState, useContext } from "react";
import Layout from "../layout/Layout";
import AddNewFolter from "./AddNewFolter";
import { HistoryContext } from "./HistoryProvider";
import Footer from "../layout/Footer";
import Empty from "./Empty";
import Folders from "./Folders";
import "./style.css";
import "./folders.css";
function History() {
  const { folders, items } = useContext(HistoryContext);

  return (
    <>
      <Layout>
        <AddNewFolter />
        {items.length === 0 ? <Empty /> : <Folders />}

        <div className="ftr">
          <Footer />
        </div>
      </Layout>
    </>
  );
}

export default History;
