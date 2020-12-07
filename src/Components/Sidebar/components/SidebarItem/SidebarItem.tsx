import React, { FC, ReactElement } from "react";
//@ts-ignore
import classes from "./SidebarItem.module.scss";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  itemText: string;
  itemIcon: string;
  route: string;
  onSidebarClose: () => void;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  itemText,
  itemIcon,
  route,
  onSidebarClose,
}): ReactElement => {
  return (
    <div className={classes["sidebar-content__item"]}>
      <span>
        <img src={itemIcon} alt="item-icon" />
      </span>
      <Link onClick={onSidebarClose} to={route}>
        {itemText}
      </Link>
    </div>
  );
};
