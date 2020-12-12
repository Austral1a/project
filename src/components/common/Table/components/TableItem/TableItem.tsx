import React, { FC } from "react";
import classNames from "classnames";
import classes from "./TableItem.module.scss";

export interface Employee {
  firstName: string;
  lastName: string;
  birthday: string;
  email: string;
}

interface TableItemProps {
  className?: string;
}

export const TableItem: FC<TableItemProps> = ({ className, children }) => {
  const tableItemClasses = classNames(classes["table__item"], className);

  return <div className={tableItemClasses}>{children}</div>;
};
