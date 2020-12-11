import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import classes from "./Table.module.scss";

interface TableProps {
  className?: string;
}

export const Table: FC<TableProps> = ({
  className,
  children,
}): ReactElement => {
  const tableClasses = classNames(classes["table"], className);

  return <div className={tableClasses}>{children}</div>;
};
