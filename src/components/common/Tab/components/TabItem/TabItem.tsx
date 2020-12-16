import React, { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import classes from "./TabItem.module.scss";

interface TabItemProps {
  className?: string;
  onClick: () => void;
  routePath: string;
}

export const TabItem: FC<TabItemProps> = ({
  className,
  onClick,
  children,
  routePath,
}): ReactElement => {
  const tabItemClasses = classNames(classes["tab__title"], className);

  return (
    <h2 onClick={onClick} className={tabItemClasses}>
      <Link to={routePath}>{children}</Link>
    </h2>
  );
};
