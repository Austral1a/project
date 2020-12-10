import React, { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { RoutePath, translation } from "@helpers";
import { Tooltip } from "../common";
import { DropDownMenu } from "../common";
import { useHeaderManager } from "./hooks";

const dropDownMenuItems = [
  {
    title: translation.accordion,
  },
  {
    title: translation.item2,
  },
];

export const Header: FC = (): ReactElement => {
  const {
    onHeaderLogoHoverOver,
    onHeaderLogoHoverOut,
    onHeaderMenuToggle,
    onHeaderMenuClose,
    isHeaderMenuOpen,
    isLogoHovered,
  } = useHeaderManager();

  return (
    <header className={classes["header"]}>
      <Link className={classes["header__title"]} to={RoutePath.accordion}>
        Logo
      </Link>
      <FontAwesomeIcon
        className={classes["header__title-icon"]}
        icon={faStar}
        onMouseOver={onHeaderLogoHoverOver}
        onMouseOut={onHeaderLogoHoverOut}
        onClick={onHeaderMenuToggle}
      />
      {isHeaderMenuOpen && (
        <DropDownMenu
          onClick={onHeaderMenuClose}
          className={classes["header__drop-down-menu"]}
        >
          <>
            {dropDownMenuItems.map((item) => {
              return <h3 key={item.title}>{item.title}</h3>;
            })}
          </>
        </DropDownMenu>
      )}
      {!isHeaderMenuOpen && isLogoHovered && (
        <Tooltip
          className={classes["header__tooltip-menu"]}
          text={translation.headerTooltipText}
        />
      )}
    </header>
  );
};
