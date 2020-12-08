import React, { FC, ReactElement } from "react";
import classes from "./Sidebar.module.scss";
import classNames from "classnames";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoutePath, translation } from "@helpers";
import { SidebarItem } from "./components/SidebarItem";
interface SidebarProps {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
  onSidebarClose: () => void;
}

const sidebarItems = {
  item1: {
    title: translation.item1,
    route: RoutePath.item1,
  },
  item2: {
    title: translation.item2,
    route: RoutePath.item2,
  },
  item3: {
    title: translation.item3,
    route: RoutePath.item3,
  },
  settings: {
    title: translation.settings,
    route: RoutePath.settings,
  },
};

export const Sidebar: FC<SidebarProps> = ({
  onSidebarToggle,
  isSidebarOpen,
  onSidebarClose,
}): ReactElement => {
  const customClasses = classNames(!isSidebarOpen && classes["sidebar_closed"]);

  return (
    <div className={customClasses}>
      <div className={classes["sidebar-overlay"]}>
        <div className={classes["sidebar-content"]}>
          <FontAwesomeIcon
            onClick={onSidebarToggle}
            className={classes["sidebar-content__burger"]}
            icon={faBars}
          />
          <div className={classes["sidebar-content__items"]}>
            {Object.values(sidebarItems).map((item) => {
              return <SidebarItem route={item.route} itemText={item.title} />;
            })}
          </div>
        </div>
        <div
          onClick={onSidebarClose}
          className={classes["sidebar__background"]}
        />
      </div>
    </div>
  );
};
