import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import classes from "./TabItem.module.scss";

interface TabItemProps {
  className?: string;
  onClick: () => void;
  dataTabName: string;
}

export const TabItem: FC<TabItemProps> = ({
  className,
  onClick,
  children,
  dataTabName,
}): ReactElement => {
  const tabItemClasses = classNames(classes["tab__title"], className);

  return (
    <h2 data-tabName={dataTabName} onClick={onClick} className={tabItemClasses}>
      {children}
    </h2>
  );
};
