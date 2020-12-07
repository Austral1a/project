import React, { FC, ReactChild, ReactElement } from "react";
//@ts-ignore
import classes from "./Sidebar.module.scss";
import classNames from "classnames";

interface SidebarProps {
  children?: ReactChild;
  burgerIcon: string;
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export const Sidebar: FC<SidebarProps> = ({
  burgerIcon,
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
          <span onClick={onSidebarToggle}>
            <img
              className={classes["sidebar-content__burger"]}
              src={burgerIcon}
              alt="open-sidebar"
            />
          </span>
          <div className={classes["sidebar-content__items"]}>{children}</div>
        </div>
      </div>
    </div>
  );
};
