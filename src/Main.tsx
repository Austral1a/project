import React, { FC, ReactElement } from "react";
import { Sidebar, SidebarItem, useSidebarManager } from "./Components/Sidebar";
import { burgerIcon, sidebarItemIcon } from "./assets/images";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
  // TODO: create folder routes in Sidebar
  // TODO: add typings-for-css-modules-loader
  // TODO: font awesome rather than assets
  // TODO: SidebarItem is not must, just render Item1, Item2 ...
  return (
    <Router>
      <div className={classes["main"]}>
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={onSidebarToggle}
          burgerIcon={burgerIcon}
        >
          <>
            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.item1}
              itemIcon={sidebarItemIcon}
              itemText={"Item1"}
            />
            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.item2}
              itemIcon={sidebarItemIcon}
              itemText={"Item2"}
            />
            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.item3}
              itemIcon={sidebarItemIcon}
              itemText={"Item3"}
            />

            <SidebarItem
              onSidebarClose={onSidebarClose}
              route={RoutePath.settings}
              itemIcon={sidebarItemIcon}
              itemText={"Settings"}
            />
          </>
        </Sidebar>
        <Routes />
      </div>
    </Router>
  );
};
