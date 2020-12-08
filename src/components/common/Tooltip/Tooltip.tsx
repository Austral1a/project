import React, { FC, ReactElement } from "react";
import classes from "./Tooltip.module.scss";
import classNames from "classnames";

interface TooltipProps {
  text: string;
  className?: string;
}

export const Tooltip: FC<TooltipProps> = ({
  text,
  className,
}): ReactElement => {
  const customClasses = classNames(classes["tooltip"], className);

  return <div className={customClasses}>{text}</div>;
};
