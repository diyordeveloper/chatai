import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./components/chat/Chat";
import History from "./components/history/History";
import Settings from "./components/settings/Settings";
import DisabledHistoryChat from "./components/history/DisabledHistoryChat";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/history">
          <Route path="/history" element={<History />} />
          <Route path="/history/:you" element={<DisabledHistoryChat />} />
        </Route>
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
}

export default Router;
