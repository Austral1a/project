import React, { FC } from "react";
import classNames from "classnames";
import classes from "./TableItem.module.scss";

interface TableItemProps {
  className?: string;
}

export const TableItem: FC<TableItemProps> = ({ className, children }) => {
  const tableItemClasses = classNames(classes["table__item"], className);

  return <div className={tableItemClasses}>{children}</div>;
};
