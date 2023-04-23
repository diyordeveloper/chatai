import React, { ReactNode, createContext, useState, useEffect } from "react";
interface HistoryProviderProps {
  folders: any;
  items: any;
  changeFolderName: any;
  changeItemFolderName: any;
  changeItemName: any;
  draging: any;
  isHovered: any;
  AddFolder: () => void;
  DeleteFolderSuccess: (e: any) => void;
  ChangeNameSuccessFolder: (e: any) => void;
  setChangeFolderName: (e: any) => void;
  setchangeItemFolderName: (e: any) => void;
  DeleteFolderItemSuccess: (e: any, index: any) => void;
  ChangeFolderItemSuccess: (e: any, index: any) => void;
  setChangeItemName: (e: any) => void;
  ChangeItemSuccess: (e: any) => void;
  DeleteItemSuccess: (e: any) => void;
  // Drag/Drop Folder Item
  dragStartHandler: (e: any, index: any) => void;
  dragEndHandler: (e: any) => void;
  dragOverHandler: (e: any) => void;
  dropHandler: (e: any, index: any) => void;
  dragLeaveHandler: (e: any) => void;
  handleDragEnter: (e: any, index: any) => void;
  handleDragOver: (e: any) => void;
  ChangeFolderClick: (e: any, index: any) => void;
}
export const HistoryContext = createContext<HistoryProviderProps>({
  folders: [],
  items: [],
  changeFolderName: "",
  changeItemFolderName: "",
  changeItemName: "",
  draging: "",
  isHovered: null,
  AddFolder: () => {},
  DeleteFolderSuccess: (e: any) => {},
  ChangeNameSuccessFolder: (e: any) => {},
  setChangeFolderName: (e: any) => {},
  setchangeItemFolderName: (e: any) => {},
  DeleteFolderItemSuccess: (e: any, index: any) => {},
  ChangeFolderItemSuccess: (e: any, index: any) => {},
  setChangeItemName: (e: any) => {},
  ChangeItemSuccess: (e: any) => {},
  DeleteItemSuccess: (e: any) => {},
  // Drag/Drop Folder Item
  dragStartHandler: (e: any, index: any) => {},
  dragEndHandler: (e: any) => {},
  dragOverHandler: (e: any) => {},
  dropHandler: (e: any, index: any) => {},
  dragLeaveHandler: (e: any) => {},
  handleDragEnter: (e: any, index: any) => {},
  handleDragOver: (e: any) => {},
  ChangeFolderClick: (e: any, index: any) => {},
});
type Props = {
  children: ReactNode;
};
export const HistoryProvider = ({ children }: Props) => {
  const itemsData: any = [
    {
      id: 11,
      you: "one",
      bot: "This is what a short response from the chatbot looks like",
      timestamp: "2023-04-23 12:34:04",
    },
    {
      id: 11,
      you: "one",
      bot: "This is what a short response from the chatbot looks like",
      timestamp: "2023-04-23 12:34:04",
    },
  ];
  const foldersData: any = [
    {
      id: Math.random(),
      f_title: "A Folder Name This is what a short request from user",
      items: [
        {
          id: Math.random(),
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
    {
      id: Math.random(),
      f_title: "A Folder Name This is what a short request from user",
      items: [
        {
          id: Math.random(),
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
    {
      id: Math.random(),
      f_title: "A Folder Name This is what a short request from user",
      items: [
        {
          id: Math.random(),
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
    {
      id: Math.random(),
      f_title: "History",
      items: [
        {
          id: Math.random(),
          you: "one",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
        {
          id: Math.random(),
          you: "two",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
        {
          id: Math.random(),
          you: "three",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
  ];

  const [folders, setFolders] = useState(foldersData);
  const [items, setItems] = useState(itemsData);
  // ------------- Folders CRUD
  const [changeFolderName, setChangeFolderName] = useState<any>("");
  //   add folder
  function AddFolder() {
    var arr = {
      id: Math.random(),
      f_title: `Chat Ai questions folder ${folders.length + 1}`,
      items: [],
    };
    setFolders([arr, ...folders]);
    console.log(folders);
  }
  //   remove folder
  function DeleteFolderSuccess(id: any) {
    alert("Delete Folder");
    const deleteFolder = folders.filter((person: any) => person.id !== id);
    setFolders(deleteFolder);
  }
  // Edit folder
  function ChangeNameSuccessFolder(e: any) {
    var EditFolder = folders.map((folder: any) =>
      folder.id === e.id ? { ...folder, f_title: changeFolderName } : folder
    );
    setFolders(EditFolder);
  }
  // Folder => Item Crud ----
  const [changeItemFolderName, setchangeItemFolderName] = useState<any>("");
  function DeleteFolderItemSuccess(folderIndex: any, ItemIndex: any) {
    alert("Delete Folder Item");
    // const updatedItems = folders[folderIndex].items.filter(
    //   (person: any) => person.id !== ItemIndex
    // );
    // console.log(updatedItems);
    // setFolders(updatedItems);
  }
  // Edit
  function ChangeFolderItemSuccess(indexFolder: any, Item: any) {
    console.log(indexFolder, Item);
    // var EditFolderItem = folders[indexFolder].items.map((folder: any) =>
    //   folder.id === Item.id ? { ...folder, you: changeItemFolderName } : folder
    // );
    // setFolders((prev:any) => ({...prev, EditFolderItem}))
  }
  // Feedback Item Crud
  const [changeItemName, setChangeItemName] = useState<any>("");
  function ChangeItemSuccess(id: any) {
    var EditItem = items.map((items: any) =>
      items.id === id.id ? { ...items, you: changeItemName } : items
    );
    console.log(EditItem);

    setItems(EditItem);
  }
  function DeleteItemSuccess(ItemIndex: any) {
    alert("Delete Item");
    const deleteItem = items.filter((person: any) => person.id !== ItemIndex);
    setItems(deleteItem);
  }

  // DragDrop Item  Folder ------
  const [draging, setDraging] = useState<any>(false);
  const [currentFeedItem, setCurrentFeedItem] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(null);

  function dragStartHandler(e: React.DragEvent<HTMLDivElement>, item: any) {
    setCurrentFeedItem(item);
    e.currentTarget.classList.add("dragging");
    // e.currentTarget.style.background = "red";
    console.log("Enter Folder");
  }

  function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
    // e.currentTarget.style.background = "#00040f";
    e.currentTarget.classList.remove("dragging");
    console.log("Enter Folder 2");
  }

  function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    // e.currentTarget.style.background = "red";
    // e.currentTarget.style.cursor = "grabbing";
    // e.dataTransfer.dropEffect = "move";
    // e.currentTarget.classList.add("dragging-over");
    e.currentTarget.classList.add("drag-over");
    setDraging(true);
    // e.currentTarget.style.background = "#00040f";
    console.log("Enter Folder 3");
  }
  function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
    // e.currentTarget.style.background = "#00040f";
    e.currentTarget.classList.remove("drag-over");
    setDraging(false);
    setIsHovered(null);
  }
  function dropHandler(e: React.DragEvent<HTMLDivElement>, item: any) {
    e.preventDefault();
    if (currentFeedItem) {
      folders.map((itm: any) => {
        itm.items = itm.items.filter(
          (person: any) => person.id !== currentFeedItem.id
        );
      });
      item.items.push(currentFeedItem);
      setFolders([...folders]);
      e.currentTarget.classList.remove("drag-over");
    }
    setIsHovered(null);
  }
  // Folder Change Menu
  function handleDragEnter(e: any, index: any) {
    e.preventDefault();
    setIsHovered(index);
  }
  function handleDragOver(e: any) {
    e.preventDefault();
  }
  function ChangeFolderClick(e: any, itm: any) {
    var folder = e;
    var item = itm;

    folders.map((itm: any) => {
      itm.items = itm.items.filter((person: any) => person.id !== item.id);
    });
    folder.items.push(item);
    setFolders([...folders]); 
  }

  const history: HistoryProviderProps = {
    folders,
    changeFolderName,
    items,
    changeItemFolderName,
    changeItemName,
    draging,
    isHovered,
    AddFolder,
    DeleteFolderSuccess,
    ChangeNameSuccessFolder,
    setChangeFolderName,
    setchangeItemFolderName,
    DeleteFolderItemSuccess,
    ChangeFolderItemSuccess,
    setChangeItemName,
    ChangeItemSuccess,
    DeleteItemSuccess,
    //Drag/Drop Folder Item
    dragStartHandler,
    dragEndHandler,
    dragOverHandler,
    dragLeaveHandler,
    dropHandler,
    handleDragEnter,
    handleDragOver,
    ChangeFolderClick,
  };

  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
};
