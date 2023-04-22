import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../ThemeProvider";
import FolderSimpleFillDark from "../../assets/icons/dark/FolderSimpleFill.svg";
import FolderSimpleFillLight from "../../assets/icons/light/FolderSimpleFill.svg";
import VectorLight from "../../assets/icons/light/Vector.svg";
import TrashLight from "../../assets/icons/light/Trash.svg";
import PencilLight from "../../assets/icons/light/Pencil.svg";
import XLight from "../../assets/icons/light/X.svg";
import CheckLight from "../../assets/icons/light/Check.svg";
import FolderSimplePlusLight from "../../assets/icons/light/FolderSimplePlus.svg";
import { HistoryContext } from "./HistoryProvider";

function FeedbackItem({ item, index }: any) {
  let modalRef = useRef<HTMLDivElement>(null);
  const {
    ChangeItemSuccess,
    DeleteItemSuccess,
    setChangeItemName,
    folders,
    dragStartHandler,
    dragEndHandler,dragLeaveHandler
  } = useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);
  const [bgActive, setBgActive] = useState(false);
  const [addChangeItem, setAddChangeItem] = useState(false);
  const [changeFolderName, setChangeFolderName] = useState(true);
  const [deleteFolder, setDeleteFolder] = useState(true);
  function ChangeNameFolder() {
    setChangeFolderName((prev) => !prev);
    setBgActive((prev) => !prev);
  }
  function DeleteFolder() {
    setDeleteFolder((prev) => !prev);
    setBgActive((prev) => !prev);
  }
  function ItemAddChange() {
    setAddChangeItem((prev) => !prev);
  }

  //   Change Folder Name (:
  function ChangeNameFolderSuccess(e: any) {
    ChangeItemSuccess(e);
    setChangeFolderName((prev) => !prev);
    setBgActive((prev) => !prev);
  }
  //   Delete Folder (:
  function DeleteSuccess(e: any) {
    DeleteItemSuccess(e);
    setDeleteFolder((prev) => !prev);
    setBgActive((prev) => !prev);
  }
  useEffect(() => {
    let handler = (event: any) => {
      // @ts-ignore
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setAddChangeItem(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [addChangeItem]);

  return (
    <>
      <div
      
        draggable
        onDragStart={(e) => dragStartHandler(e, item)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        className={`item ${bgActive ? "item_active" : ""}`}
      >
        <div className="itm_box">
          <div className="times">
            <span className="time">{item.timestamp.substr(0, 10)}</span>
            <span className="time">{item.timestamp.substr(-8)}</span>
          </div>
          {changeFolderName ? (
            <>
              {window.screen.width <= 576 ? (
                <>
                  {item.you.length > 15 ? (
                    <span>{item.you.substring(0, 15)}...</span>
                  ) : (
                    <span className="itm_title_">{item.you}</span>
                  )}
                </>
              ) : (
                <>
                  <span className="itm_title_">{item.you}</span>
                </>
              )}
            </>
          ) : (
            <input
              type="text"
              defaultValue={item.you}
              onChange={(e) => setChangeItemName(e.target.value)}
              className="f_title_range"
            />
          )}
        </div>
        <div className="itm_box">
          <>
            {deleteFolder ? (
              <>
                {changeFolderName ? (
                  <>
                    <div className="menu_folders">
                      <button onClick={ItemAddChange} className="btn_crd">
                        <img src={FolderSimplePlusLight} alt="Error..." />
                      </button>
                      {addChangeItem ? (
                        <ul
                          className="menu_"
                          // @ts-ignore
                          ref={modalRef}
                        >
                          {folders.map((fold: any, indx: any) => (
                            <li key={indx}>
                              <img src={FolderSimpleFillLight} alt="Error!!!" />
                              {fold.f_title.length > 20 ? (
                                <span>{fold.f_title.substring(0, 20)}...</span>
                              ) : (
                                <span>{fold.f_title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>

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
                      onClick={() => ChangeNameFolderSuccess(item)}
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
                  onClick={() => DeleteSuccess(item.id)}
                  className="btn_crd"
                >
                  <img src={CheckLight} alt="Error..." />
                </button>
                <button onClick={DeleteFolder} className="btn_crd">
                  <img src={XLight} alt="Error..." />
                </button>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}

export default FeedbackItem;
