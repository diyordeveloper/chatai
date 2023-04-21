import React, { ReactNode, createContext, useState, useEffect } from "react";

interface ChatContextProps {
  submitText: any;
  newChatBolean: any;
  generateRes: any;
  NewChat: () => void;
  setSubmitText: (e: any) => void;
  SendMesssage: (e: any) => void;
}
export const ChatContext = createContext<ChatContextProps>({
  submitText: "",
  newChatBolean: false,
  generateRes: false,
  NewChat: () => {},
  setSubmitText: (e: any) => {},
  SendMesssage: () => {},
});
type Props = {
  children: ReactNode;
};
export const ChatProvider = ({ children }: Props) => {
  var chatRoom = [
    {
      you: "hello !",
    },
  ];

  const [submitText, setSubmitText] = useState("");
  const [newChatBolean, setNewChatBolean] = useState(false);
  const [generateRes, setGenerateRes] = useState(false);

  function SendMesssage() {
    if (submitText === "") {
      console.log("hey ");
    } else {
      setNewChatBolean(true);
      setGenerateRes(true);
      setSubmitText("");
    }
  }
  useEffect(() => {
    const keyDownHandler = (event: any) => {
      if (event.key === "Enter") {
        event.preventDefault();
        SendMesssage();
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);
  function NewChat() {
    setSubmitText("");
    setNewChatBolean(false);
    setGenerateRes(false);
  }
  const chatDetall: ChatContextProps = {
    submitText,
    newChatBolean,
    generateRes,
    NewChat,
    setSubmitText,
    SendMesssage,
  };

  return (
    <ChatContext.Provider value={chatDetall}>{children}</ChatContext.Provider>
  );
};
