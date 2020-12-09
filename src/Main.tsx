import React, { FC, ReactElement } from "react";
import { Sidebar, useSidebarManager } from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./styles/Main.module.scss";

export const Main: FC = (): ReactElement => {
  const {
    onSidebarToggle,
    onSidebarClose,
    isSidebarOpen,
  } = useSidebarManager();

  return (
    <Router>
      <div className={classes["main"]}>
        <Sidebar
          onSidebarClose={onSidebarClose}
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={onSidebarToggle}
        />
      </div>
    </Router>
  );
};
