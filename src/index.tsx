import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { HistoryProvider } from "./components/history/HistoryProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <HistoryProvider>
        <App />
      </HistoryProvider>
    </ThemeProvider>
  </BrowserRouter>
);
