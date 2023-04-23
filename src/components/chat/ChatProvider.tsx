import React, { ReactNode, createContext, useState, useEffect } from "react";

interface ChatContextProps {
  submitText: string;
  newChatBolean: any;
  generateRes: any;
  NewChat: () => void;
  setSubmitText: (e: any) => void;
  SendMesssage: (e: any) => void;
  handleKeyPress: (e: any) => void;
}
export const ChatContext = createContext<ChatContextProps>({
  submitText: "",
  newChatBolean: false,
  generateRes: false,
  NewChat: () => {},
  setSubmitText: (e: any) => {},
  SendMesssage: () => {},
  handleKeyPress: () => {},
});
type Props = {
  children: ReactNode;
};
export const ChatProvider = ({ children }: Props) => {
  const [submitText, setSubmitText] = useState("");
  const [newChatBolean, setNewChatBolean] = useState(false);
  const [generateRes, setGenerateRes] = useState(false);

  function SendMesssage() {
    if (submitText === "") {
      console.log("text not found :(((");
    } else {
      setNewChatBolean(true);
      setGenerateRes(true);
      setSubmitText("");
    }
  }
  function handleKeyPress(event: any) {
    if (event.key === "Enter" && submitText.trim() !== "") {
      // send message
      // console.log("Sending message:", submitText);
      setNewChatBolean(true);
      setGenerateRes(true);
      setSubmitText("");
    } else {
      console.log("text not found :(((");
    }
  }
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
    handleKeyPress,
  };

  return (
    <ChatContext.Provider value={chatDetall}>{children}</ChatContext.Provider>
  );
};
