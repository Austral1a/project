import React, { FC, ReactElement } from "react";
//@ts-ignore
import classes from './SidebarItem.module.scss'
import { Link } from "react-router-dom";
import {faStar} from "@fortawesome/free-solid-svg-icons/faStar";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface SidebarItemProps {
  itemText: string;
  route: string;
  onSidebarClose: () => void;
}

export const SidebarItem: FC<SidebarItemProps> = ({
  itemText,
  route,
  onSidebarClose,
}): ReactElement => {

  return (
    <div className={classes["sidebar-content__item"]}>
      <FontAwesomeIcon className={classes['sidebar-content__item-icon']} icon={faStar} />
      <Link onClick={onSidebarClose} to={route}>
        {itemText}
      </Link>
    </div>
  );
};
