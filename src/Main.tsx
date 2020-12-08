import React, { FC, ReactElement } from "react";
import { Sidebar, useSidebarManager } from "./сomponents/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./styles/Main.module.scss";
import { Routes } from "./сomponents/Sidebar/routes/SibebarRoutes";

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
        <Routes />
      </div>
    </Router>
  );
};
