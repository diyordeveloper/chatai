import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import FolderSimpleFillDark from "../../assets/icons/dark/FolderSimpleFill.svg";
import FolderSimpleFillLight from "../../assets/icons/light/FolderSimpleFill.svg";
import VectorLight from "../../assets/icons/light/Vector.svg";
import TrashLight from "../../assets/icons/light/Trash.svg";
import TrashLightHover from "../../assets/icons/light/TrashHover.svg";
import TrashHoverDark from "../../assets/icons/light/TrashHoverDark.svg";
import PencilLight from "../../assets/icons/light/Pencil.svg";
import PencilLightHover from "../../assets/icons/light/PencilHover.svg";
import PencilHoverDark from "../../assets/icons/light/PencilHoverDark.svg";
import XLight from "../../assets/icons/light/X.svg";
import XHoverLight from "../../assets/icons/light/X Hover.svg";
import XHoverDark from "../../assets/icons/light/X HoverDark.svg";
import CheckLight from "../../assets/icons/light/Check.svg";
import CheckLightHover from "../../assets/icons/light/CheckHover.svg";
import CheckHoverDark from "../../assets/icons/light/CheckHoverDark.svg";
import FolderSimplePlusLight from "../../assets/icons/light/FolderSimplePlus.svg";
import ItemFolder from "./ItemFolder";
import FeedbackItem from "./FeedbackItem";
import { HistoryContext } from "./HistoryProvider";
function Folder({ folder, key }: any) {
  const {
    DeleteFolderSuccess,
    ChangeNameSuccessFolder,
    setChangeFolderName,
    dragOverHandler,
    dropHandler,
    draging,
    isHovered,
    handleDragEnter,
    handleDragOver,
  } = useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);
  const [activeIndex, setActiveIndex] = useState(1);
  const [bgActive, setBgActive] = useState(1);
  const [changeFolderNameBoolean, setChangeFolderNameBoolean] = useState(true);
  const [deleteFolder, setDeleteFolder] = useState(true);
  function ChangeNameFolder() {
    setChangeFolderNameBoolean((prev) => !prev);
    setBgActive(-1);
    setHoveredX(false);
    setHoveredCheck(false);
    setHoveredTrash(false);
    setHoveredPencil(false);
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
    setHoveredX(false);
    setHoveredCheck(false);
    setHoveredTrash(false);
    setHoveredPencil(false);
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
  const [hoveredX, setHoveredX] = useState(false);
  const [hoveredCheck, setHoveredCheck] = useState(false);
  const [hoveredTrash, setHoveredTrash] = useState(false);
  const [hoveredPencil, setHoveredPencil] = useState(false);
  return (
    <>
      <div
        key={key}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, folder)}
        onDragEnter={(e) => handleDragEnter(e, folder.id)}
        className={`accordion ${darkMode ? "accordion_dark" : ""}  `}
      >
        <div
          className={`accordion_header  
          ${bgActive === folder.id ? "accordion_header_active" : ""}
          ${
            isHovered === folder.id
              ? `${darkMode ? "isHoveredActiveDark" : "isHoveredActive"}`
              : ""
          }
  `}
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
                    <button
                      onClick={ChangeNameFolder}
                      onMouseEnter={() => setHoveredPencil(true)}
                      onMouseLeave={() => setHoveredPencil(false)}
                      className="btn_crd"
                    >
                      {darkMode ? (
                        <img
                          src={hoveredPencil ? PencilHoverDark : PencilLight}
                          alt="Error..."
                        />
                      ) : (
                        <img
                          src={hoveredPencil ? PencilLightHover : PencilLight}
                          alt="Error..."
                        />
                      )}
                    </button>
                    <button
                      onClick={DeleteFolder}
                      onMouseEnter={() => setHoveredTrash(true)}
                      onMouseLeave={() => setHoveredTrash(false)}
                      className="btn_crd"
                    >
                      {darkMode ? (
                        <img
                          src={hoveredTrash ? TrashHoverDark : TrashLight}
                          alt="Error..."
                        />
                      ) : (
                        <img
                          src={hoveredTrash ? TrashLightHover : TrashLight}
                          alt="Error..."
                        />
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => ChangeNameFolderSuccess(folder)}
                      className="btn_crd"
                      onMouseEnter={() => setHoveredCheck(true)}
                      onMouseLeave={() => setHoveredCheck(false)}
                    >
                      {darkMode ? (
                        <img
                          src={hoveredCheck ? CheckHoverDark : CheckLight}
                          alt="Error..."
                        />
                      ) : (
                        <img
                          src={hoveredCheck ? CheckLightHover : CheckLight}
                          alt="Error..."
                        />
                      )}
                    </button>
                    <button
                      onClick={ChangeNameFolder}
                      onMouseEnter={() => setHoveredX(true)}
                      onMouseLeave={() => setHoveredX(false)}
                      className="btn_crd X"
                    >
                      {darkMode ? (
                        <img
                          src={hoveredX ? XHoverDark : XLight}
                          alt="Error..."
                        />
                      ) : (
                        <img
                          src={hoveredX ? XHoverLight : XLight}
                          alt="Error..."
                        />
                      )}
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
                  onMouseEnter={() => setHoveredCheck(true)}
                  onMouseLeave={() => setHoveredCheck(false)}
                >
                  {darkMode ? (
                    <img
                      src={hoveredCheck ? CheckHoverDark : CheckLight}
                      alt="Error..."
                    />
                  ) : (
                    <img
                      src={hoveredCheck ? CheckLightHover : CheckLight}
                      alt="Error..."
                    />
                  )}
                </button>
                <button
                  onClick={DeleteFolder}
                  onMouseEnter={() => setHoveredX(true)}
                  onMouseLeave={() => setHoveredX(false)}
                  className="btn_crd X"
                >
                  {darkMode ? (
                    <img src={hoveredX ? XHoverDark : XLight} alt="Error..." />
                  ) : (
                    <img src={hoveredX ? XHoverLight : XLight} alt="Error..." />
                  )}
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
            <ItemFolder folderIndex={key} item={item} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Folder;
