import React, { useContext } from "react";
import FolderSimplePlusLight from "../../assets/icons/light/FolderSimplePlus.svg";
import { ThemeContext } from "../ThemeProvider";
import { HistoryContext } from "./HistoryProvider";
function AddNewFolter() {
  const { darkMode } = useContext(ThemeContext);
  const { AddFolder } = useContext(HistoryContext);

  return (
    <>
      <div className="container">
        <button
          onClick={AddFolder}
          className={`add_new_btn ${darkMode ? "add_new_btn_dark" : ""}`}
        >
          <img src={FolderSimplePlusLight} alt="Error!!!" />
          <span>Add new folder</span>
        </button>
      </div>
    </>
  );
}

export default AddNewFolter;
