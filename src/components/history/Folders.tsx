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
  const { folders, items } = useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`container folder_screen ${darkMode ? "folder_dark" : ""}`}
      >
        {folders.map((folder: any, index: any) => (
          <Folder folder={folder} index={index} />
        ))}
        <div className="Feedback_items">
          {items.map((item: any, index: any) => (
            <FeedbackItem item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Folders;
