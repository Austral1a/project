import React, { FC, ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "@helpers";
import { Tooltip } from "../shared/Tooltip";

// TODO: add tooltip; add drop-down menu
export const Header: FC = (): ReactElement => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // TODO: extract into hook
  const onMouseOver = () => {
    setIsLogoHovered(true);
  };

  const onMouseOut = () => {
    setIsLogoHovered(false);
  };

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
      />
      {isLogoHovered && (
        <Tooltip className={classes["header__tooltip-menu"]} text="Menu" />
      )}
    </header>
  );
};
