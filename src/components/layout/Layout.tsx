import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./style.css";
type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
