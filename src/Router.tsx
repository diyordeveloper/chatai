import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import History from "./components/history/History";
import Settings from "./components/settings/Settings";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default Router;
