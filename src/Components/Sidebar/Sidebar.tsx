import React, { FC, ReactChild, ReactElement } from "react";
//@ts-ignore
import classes from "./Sidebar.module.scss";
import classNames from "classnames";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface SidebarProps {
  children?: ReactChild;
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export const Sidebar: FC<SidebarProps> = ({
  children,
  onSidebarToggle,
  isSidebarOpen,
}): ReactElement => {

  const customClasses = classNames(
    classes["sidebar"],
    !isSidebarOpen && classes["sidebar_closed"]
  );

  return (
    <div className={customClasses}>
      <div className={classes["sidebar-overlay"]}>
        <div className={classes["sidebar-content"]}>
          <FontAwesomeIcon onClick={onSidebarToggle} className={classes["sidebar-content__burger"]} icon={faBars} />
          <div className={classes["sidebar-content__items"]}>{children}</div>
        </div>
      </div>
    </div>
  );
};
