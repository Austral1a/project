import React, { FC, ReactElement } from "react";
import { RoutePath, translation } from "@helpers";
import { SidebarItem } from "@components";
import { Routes } from "./routes";
import { useSidebarManager } from "./hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import classes from "./Sidebar.module.scss";

const sidebarItems = [
  {
    title: translation.accordion,
    route: RoutePath.accordion,
  },
  {
    title: translation.tabs,
    route: RoutePath.tabs,
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
    !isSidebarOpen ? classes["sidebar--closed"] : classes["sidebar"]
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
      <div className={classes["main__content"]}>
        <Routes />
      </div>
    </>
  );
};
