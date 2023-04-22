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
import { HistoryContext } from "./HistoryProvider";
function Folder({ folder, index }: any) {
  const {
    DeleteFolderSuccess,
    ChangeNameSuccessFolder,
    setChangeFolderName,
    dragOverHandler,
    dropHandler,draging
  } = useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(1);
  const [bgActive, setBgActive] = useState(1);
  const [changeFolderNameBoolean, setChangeFolderNameBoolean] = useState(true);
  const [deleteFolder, setDeleteFolder] = useState(true);
  function ChangeNameFolder() {
    setChangeFolderNameBoolean((prev) => !prev);
    setBgActive(-1);
  }
  //   Change Folder Name (:
  function ChangeNameFolderSuccess(e: any) {
    alert("Change Success Save");
    ChangeNameSuccessFolder(e);
    setChangeFolderNameBoolean((prev) => !prev);
    setBgActive(-1);
  }
  function DeleteFolder() {
    setDeleteFolder((prev) => !prev);
    setBgActive(-1);
  }
  //   Delete Folder (:
  function DeleteSuccess(e: any) {
    DeleteFolderSuccess(e);
    setDeleteFolder((prev) => !prev);
    setActiveIndex(-1);
    setBgActive(-1);
  }

  const OpenFile = (index: any) => {
    if (changeFolderNameBoolean === false || deleteFolder === false) {
      console.log("Change or Delete Folder!!!");
    } else {
      if (activeIndex === index) {
        setBgActive(-1);
        return setActiveIndex(-1);
      }
      setActiveIndex(index);
      setBgActive(index);
    }
  };

  return (
    <>
      <div
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, folder)}
        className={`accordion ${darkMode ? "accordion_dark" : ""}  `}
        key={index}
      >
        <div
          className={`accordion_header 
          ${draging ? "drag_header":""}
          ${
            bgActive === folder.id ? "accordion_header_active" : ""
          } `}
        >
          <div className="box_" onClick={() => OpenFile(folder.id)}>
            {deleteFolder ? (
              <>
                {changeFolderNameBoolean ? (
                  <img
                    src={VectorLight}
                    className={`vector_icon ${
                      activeIndex === folder.id
                        ? "vector_icon_rotate"
                        : "vector_icon_rotate_clear"
                    }`}
                    alt="Error..."
                  />
                ) : null}
              </>
            ) : (
              <>
                <img src={TrashLight} className="trash_icon" alt="Error..." />
                <span className="delete_txt">Delete</span>
              </>
            )}
            {deleteFolder ? (
              <img
                src={darkMode ? FolderSimpleFillDark : FolderSimpleFillLight}
                className="file_icon"
                alt="Error..."
              />
            ) : null}
            <div className="f_title">
              {changeFolderNameBoolean ? (
                <>
                  {window.screen.width <= 576 ? (
                    <>
                      {deleteFolder ? (
                        <>
                          {folder.f_title.length > 20 ? (
                            <span>{folder.f_title.substring(0, 20)}...</span>
                          ) : (
                            <span>{folder.f_title}</span>
                          )}
                        </>
                      ) : (
                        <>
                          {folder.f_title.length > 20 ? (
                            <span>
                              "{folder.f_title.substring(0, 20)}..." ?
                            </span>
                          ) : (
                            <span>"{folder.f_title}" ?</span>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {deleteFolder ? (
                        <span>{folder.f_title}</span>
                      ) : (
                        <span>"{folder.f_title}" ?</span>
                      )}
                    </>
                  )}
                </>
              ) : (
                <input
                  type="text"
                  defaultValue={folder.f_title}
                  onChange={(e) => setChangeFolderName(e.target.value)}
                  className="f_title_range"
                />
              )}
            </div>
          </div>
          <div className="box_">
            {deleteFolder ? (
              <>
                {changeFolderNameBoolean ? (
                  <>
                    <button onClick={ChangeNameFolder} className="btn_crd">
                      <img src={PencilLight} alt="Error..." />
                    </button>
                    <button onClick={DeleteFolder} className="btn_crd">
                      <img src={TrashLight} alt="Error..." />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => ChangeNameFolderSuccess(folder)}
                      className="btn_crd"
                    >
                      <img src={CheckLight} alt="Error..." />
                    </button>
                    <button onClick={ChangeNameFolder} className="btn_crd">
                      <img src={XLight} alt="Error..." />
                    </button>
                  </>
                )}
              </>
            ) : null}
            {deleteFolder ? null : (
              <>
                <button
                  onClick={() => DeleteSuccess(folder.id)}
                  className="btn_crd"
                >
                  <img src={CheckLight} alt="Error..." />
                </button>
                <button onClick={DeleteFolder} className="btn_crd">
                  <img src={XLight} alt="Error..." />
                </button>
              </>
            )}
          </div>
        </div>
        <div
          className={`accordion_body ${
            activeIndex === folder.id ? "accordion_body_active" : ""
          }`}
        >
          {folder.items.map((item: any, idx: any) => (
            <ItemFolder folderIndex={index} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Folder;
