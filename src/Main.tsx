import React, { FC, ReactElement } from "react";
import { Sidebar, SidebarItem, useSidebarManager } from "./Components/Sidebar";
import { burgerIcon, sidebarItemIcon } from "./assets/images";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RoutePath } from "./helpers";
//@ts-ignore
import classes from "./styles/Main.module.scss";
import { Item1, Item2, Item3, Settings } from "./Sidebar";

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
        <Route path={RoutePath.item1} component={Item1} />
        <Route path={RoutePath.item2} component={Item2} />
        <Route path={RoutePath.item3} component={Item3} />
        <Route path={RoutePath.settings} component={Settings} />
      </div>
    </Router>
  );
};
