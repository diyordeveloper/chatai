import React, { ReactNode, createContext, useState, useEffect } from "react";
interface HistoryProviderProps {
  folders: any;
  items: any;
  changeFolderName: any;
  changeItemFolderName: any;
  changeItemName: any;
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
}
export const HistoryContext = createContext<HistoryProviderProps>({
  folders: [],
  items: [],
  changeFolderName: "",
  changeItemFolderName: "",
  changeItemName: "",
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
});
type Props = {
  children: ReactNode;
};
export const HistoryProvider = ({ children }: Props) => {
  const foldersData: any = [
    {
      id: 1,
      f_title: "A Folder Name This is what a short request from user",
      items: [
        {
          id: 2,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
        {
          id: 212,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
        {
          id: 3,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
    {
      id: 4,
      f_title: "A Folder Name",
      items: [
        {
          id: 5,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
        {
          id: 6,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
    {
      id: 7,
      f_title: "A Folder Name",
      items: [
        {
          id: 8,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
        {
          id: 9,
          you: "This is what a short request from user",
          bot: "This is what a short response from the chatbot looks like",
          timestamp: "2023-04-23 12:34:04",
        },
      ],
    },
  ];
  const itemsData: any = [
    {
      id: 11,
      you: "This is what a short request from user",
      bot: "This is what a short response from the chatbot looks like",
      timestamp: "2023-04-23 12:34:04",
    },
    {
      id: 12,
      you: "This is what a short request from user",
      bot: "This is what a short response from the chatbot looks like",
      timestamp: "2023-04-23 12:34:04",
    },
  ];
  const [folders, setFoldersData] = useState(foldersData);
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
    setFoldersData([arr, ...folders]);
    console.log(folders);
  }
  //   remove folder
  function DeleteFolderSuccess(id: any) {
    alert("Delete Folder");
    const deleteFolder = folders.filter((person: any) => person.id !== id);
    setFoldersData(deleteFolder);
  }
  // Edit folder
  function ChangeNameSuccessFolder(e: any) {
    var EditFolder = folders.map((folder: any) =>
      folder.id === e.id ? { ...folder, f_title: changeFolderName } : folder
    );
    setFoldersData(EditFolder);
  }
  // Folder => Item Crud ----
  const [changeItemFolderName, setchangeItemFolderName] = useState<any>("");
  function DeleteFolderItemSuccess(folderIndex: any, ItemIndex: any) {
    alert("Delete Folder Item");
    // const updatedItems = folders[folderIndex].items.filter(
    //   (person: any) => person.id !== ItemIndex
    // );
    // console.log(updatedItems);
    // setFoldersData(updatedItems);
  }
  // Edit
  function ChangeFolderItemSuccess(indexFolder: any, Item: any) {
    console.log(indexFolder, Item);
    // var EditFolderItem = folders[indexFolder].items.map((folder: any) =>
    //   folder.id === Item.id ? { ...folder, you: changeItemFolderName } : folder
    // );
    // setFoldersData((prev:any) => ({...prev, EditFolderItem}))
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

  const history: HistoryProviderProps = {
    folders,
    changeFolderName,
    items,
    changeItemFolderName,
    changeItemName,
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
  };

  return (
    <HistoryContext.Provider value={history}>
      {children}
    </HistoryContext.Provider>
  );
};
