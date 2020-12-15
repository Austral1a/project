import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import classes from "./TabItem.module.scss";

interface TabItemProps {
  className?: string;
  isTabActive: boolean;
  onClick: () => void;
}

export const TabItem: FC<TabItemProps> = ({
  className,
  isTabActive,
  onClick,
  children,
}): ReactElement => {
  const tabItemClasses = classNames(
    classes["tab__title"],
    isTabActive
      ? classes["tab__title--active"]
      : classes["tab__title--inactive"],
    className
  );

  return (
    <h2 onClick={onClick} className={tabItemClasses}>
      {children}
    </h2>
  );
};
