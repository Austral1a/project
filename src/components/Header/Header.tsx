import React, { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { RoutePath, translation } from "@helpers";
import { Tooltip } from "../common";
import { DropDownMenu } from "../common";
import { useHeaderManager } from "./hooks";

const dropDownMenuItems = {
  item1: {
    title: translation.item1,
  },
  item2: {
    title: translation.item2,
  },
};

export const Header: FC = (): ReactElement => {
  const {
    onMouseOver,
    onMouseOut,
    onMenuToggle,
    onMenuClose,
    isMenuOpen,
    isLogoHovered,
  } = useHeaderManager();

  return (
    <header className={classes["header"]}>
      <Link className={classes["header__title"]} to={RoutePath.item1}>
        Logo
      </Link>
      <FontAwesomeIcon
        className={classes["header__title-icon"]}
        icon={faStar}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onMenuToggle}
      />
      {isMenuOpen && (
        <DropDownMenu className={classes["header__drop-down-menu"]}>
          <>
            {Object.values(dropDownMenuItems).map((item) => {
              return (
                <h3 onClick={onMenuClose} key={item.title}>
                  {item.title}
                </h3>
              );
            })}
          </>
        </DropDownMenu>
      )}
      {!isMenuOpen && isLogoHovered && (
        <Tooltip
          className={classes["header__tooltip-menu"]}
          text={translation.headerTooltipText}
        />
      )}
    </header>
  );
};
