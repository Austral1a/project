import React, { FC, ReactElement } from "react";
import { Sidebar, SidebarItem, useSidebarManager } from "./Components";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutePath } from "./helpers";
//@ts-ignore
import classes from "./styles/Main.module.scss";
import { Routes } from "./Components/Sidebar/routes/SibebarRoutes";

export const Main: FC = (): ReactElement => {
  const {
    onSidebarToggle,
    onSidebarClose,
    isSidebarOpen,
  } = useSidebarManager();
  // TODO: add typings-for-css-modules-loader

  return (
    <Router>
      <div className={classes["main"]}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={onSidebarToggle}
        >
          <>
            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.item1}
              itemText={"Item1"}
            />
            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.item2}
              itemText={"Item2"}
            />
            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.item3}
              itemText={"Item3"}
            />

            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.settings}
              itemText={"Settings"}
            />
          </>
        </Sidebar>
        <Routes />
      </div>
    </Router>
  );
};
