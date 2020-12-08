import React, { FC, ReactElement } from "react";
import classes from "./SidebarItem.module.scss";
import { NavLink } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SidebarItemProps {
  itemText: string;
  route: string;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  itemText,
  route,
}): ReactElement => {
  return (
    <NavLink
      activeClassName={classes["sidebar-content__item_selected"]}
      className={classes["sidebar-content__item"]}
      to={route}
    >
      <FontAwesomeIcon
        className={classes["sidebar-content__item-icon"]}
        icon={faStar}
      />
      <h3 className={classes["sidebar-content__item-text"]}>{itemText}</h3>
    </NavLink>
  );
};
