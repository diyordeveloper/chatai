import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import FolderSimpleFillDark from "../../assets/icons/dark/FolderSimpleFill.svg";
import FolderSimpleFillLight from "../../assets/icons/light/FolderSimpleFill.svg";
import VectorLight from "../../assets/icons/light/Vector.svg";
import TrashLight from "../../assets/icons/light/Trash.svg";
import PencilLight from "../../assets/icons/light/Pencil.svg";
import XLight from "../../assets/icons/light/X.svg";
import CheckLight from "../../assets/icons/light/Check.svg";
import FolderSimplePlusLight from "../../assets/icons/light/FolderSimplePlus.svg";
import ItemFolder from "./ItemFolder";
import FeedbackItem from "./FeedbackItem";
import Folder from "./Folder";
import { HistoryContext } from "./HistoryProvider";

function Folders() {
  const { folders, dragOverHandler, dropHandler, handleDragEnter } =
    useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);
  const lastIndex = folders.length - 1;

  return (
    <>
      <div
        className={`container folder_screen ${darkMode ? "folder_dark" : ""}`}
      >
        {folders.slice(0, -1).map((folder: any, key: any) => (
          <Folder folder={folder} key={key} />
        ))}
        <div
          className="Feedback_items"
          style={{
            height: `${folders[lastIndex].items.length === 0 ? "50px" : ""}`,
          }}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, folders[lastIndex])}
          onDragEnter={(e) => handleDragEnter(e, folders[lastIndex].id)}
        >
          {folders[lastIndex].items.map((item: any, key: any) => (
            <FeedbackItem item={item} key={key} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Folders;
