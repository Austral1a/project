import React, { FC } from "react";
import classNames from "classnames";
import classes from "./TableItem.module.scss";

interface TableHeaderProps {
  className?: string;
}

export const TableHeader: FC<TableHeaderProps> = ({ className, children }) => {
  const tableHeaderClasses = classNames(classes["table__header"], className);

  return <div className={tableHeaderClasses}>{children}</div>;
};
