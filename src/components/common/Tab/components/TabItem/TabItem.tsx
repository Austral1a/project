import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import classes from "./TabItem.module.scss";

interface TabItemProps {
  className?: string;
  onClick: () => void;
}

export const TabItem: FC<TabItemProps> = ({
  className,
  onClick,
  children,
}): ReactElement => {
  const tabItemClasses = classNames(classes["tab__title"], className);

  return (
    <h2 onClick={onClick} className={tabItemClasses}>
      {children}
    </h2>
  );
};
