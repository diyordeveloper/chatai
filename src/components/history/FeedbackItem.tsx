import React, { useContext, useEffect, useRef, useState } from "react";
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
import FolderSimplePlusLightHover from "../../assets/icons/light/FolderSimplePlusHover.svg";
import FolderSimplePlusDarkHover from "../../assets/icons/dark/FolderSimplePlusHover.svg";
import FolderSimplePlusActive from "../../assets/icons/dark/FolderSimplePlusActive.svg";
import { HistoryContext } from "./HistoryProvider";
import { useNavigate } from "react-router-dom";

function FeedbackItem({ item, key }: any) {
  var navigation = useNavigate();

  let modalRef = useRef<HTMLDivElement>(null);
  const {
    ChangeItemSuccess,
    DeleteItemSuccess,
    setChangeItemName,
    folders,
    dragStartHandler,
    dragEndHandler,
    dragLeaveHandler,
    handleDragOver,
  } = useContext(HistoryContext);
  const { darkMode } = useContext(ThemeContext);
  const [bgActive, setBgActive] = useState(false);
  const [addChangeItem, setAddChangeItem] = useState(false);
  const [changeFolderName, setChangeFolderName] = useState(true);
  const [deleteFolder, setDeleteFolder] = useState(true);
  function ChangeNameFolder() {
    setChangeFolderName((prev) => !prev);
    setBgActive((prev) => !prev);
    setHoveredFolder(false);
    setHoveredX(false);
    setHoveredCheck(false);
    setHoveredTrash(false);
    setHoveredPencil(false);
  }
  function DeleteFolder() {
    setDeleteFolder((prev) => !prev);
    setBgActive((prev) => !prev);
    setHoveredFolder(false);
    setHoveredX(false);
    setHoveredCheck(false);
    setHoveredTrash(false);
    setHoveredPencil(false);
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

  //
  const [hoveredFolder, setHoveredFolder] = useState(false);
  const [hoveredX, setHoveredX] = useState(false);
  const [hoveredCheck, setHoveredCheck] = useState(false);
  const [hoveredTrash, setHoveredTrash] = useState(false);
  const [hoveredPencil, setHoveredPencil] = useState(false);
  function OpenItem(e: any) {
    navigation(`/history/1`);
  }
  return (
    <>
      <div
        key={key}
        draggable
        onDragStart={(e) => dragStartHandler(e, item)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => handleDragOver(e)}
        className={`item ${bgActive || addChangeItem ? "item_active" : ""}`}
        // onClick={() => OpenItem(item.you)}
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
                      <button
                        onClick={ItemAddChange}
                        className="btn_crd"
                        onMouseEnter={() => setHoveredFolder(true)}
                        onMouseLeave={() => setHoveredFolder(false)}
                      >
                        {darkMode ? (
                          <>
                            {addChangeItem ? (
                              <img
                                src={FolderSimplePlusLightHover}
                                alt="Error..."
                              />
                            ) : (
                              <img
                                src={
                                  hoveredFolder
                                    ? FolderSimplePlusLightHover
                                    : FolderSimplePlusLight
                                }
                                alt="Error..."
                              />
                            )}
                          </>
                        ) : (
                          <>
                            {addChangeItem ? (
                              <img
                                src={FolderSimplePlusActive}
                                alt="Error..."
                              />
                            ) : (
                              <img
                                src={
                                  hoveredFolder
                                    ? FolderSimplePlusDarkHover
                                    : FolderSimplePlusLight
                                }
                                alt="Error..."
                              />
                            )}
                          </>
                        )}
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
                      onClick={() => ChangeNameFolderSuccess(item)}
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
                      className="btn_crd"
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
                  onClick={() => DeleteSuccess(item.id)}
                  onMouseEnter={() => setHoveredCheck(true)}
                  onMouseLeave={() => setHoveredCheck(false)}
                  className="btn_crd"
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
                  className="btn_crd"
                >
                  {darkMode ? (
                    <img src={hoveredX ? XHoverDark : XLight} alt="Error..." />
                  ) : (
                    <img src={hoveredX ? XHoverLight : XLight} alt="Error..." />
                  )}
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
