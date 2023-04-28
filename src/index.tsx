import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { HistoryProvider } from "./components/history/HistoryProvider";
import { ChatProvider } from "./components/chat/ChatProvider";
import { UiendPoints } from "./components/UiendPoints";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    {/* <UiendPoints> */}
      <ThemeProvider>
        <HistoryProvider>
          <ChatProvider>
            <App />
          </ChatProvider>
        </HistoryProvider>
      </ThemeProvider>
    {/* </UiendPoints> */}
  </BrowserRouter>
);
