import React, { FC, ReactElement } from "react";
import classes from "./Sidebar.module.scss";
import classNames from "classnames";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoutePath, translation } from "@helpers";
import { SidebarItem } from "./components";
import { Routes } from "./routes";
import { useSidebarManager } from "./hooks";

const sidebarItems = [
  {
    title: translation.item1,
    route: RoutePath.item1,
  },
  {
    title: translation.item2,
    route: RoutePath.item2,
  },
  {
    title: translation.item3,
    route: RoutePath.item3,
  },
  {
    title: translation.settings,
    route: RoutePath.settings,
  },
];

export const Sidebar: FC = (): ReactElement => {
  const {
    onSidebarToggle,
    onSidebarClose,
    isSidebarOpen,
  } = useSidebarManager();

  const customClasses = classNames(
    !isSidebarOpen && classes["sidebar--closed"]
  );

  return (
    <>
      <div className={customClasses}>
        <div className={classes["sidebar-overlay"]}>
          <div className={classes["sidebar-content"]}>
            <FontAwesomeIcon
              onClick={onSidebarToggle}
              className={classes["sidebar-content__burger"]}
              icon={faBars}
            />
            <div className={classes["sidebar-content__items"]}>
              {sidebarItems.map((item) => {
                return (
                  <SidebarItem
                    key={item.title}
                    route={item.route}
                    itemText={item.title}
                  />
                );
              })}
            </div>
          </div>
          <div
            onClick={onSidebarClose}
            className={classes["sidebar-background"]}
          />
        </div>
      </div>
      <Routes />
    </>
  );
};
