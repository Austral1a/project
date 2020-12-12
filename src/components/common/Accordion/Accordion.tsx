import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import classes from "./Accordion.module.scss";

interface AccordionProps {
  className?: string;
}

export const Accordion: FC<AccordionProps> = ({
  className,
  children,
}): ReactElement => {
  const customClasses = classNames(classes["accordion"], className);

  return (
    <div role={"tablist"} className={customClasses}>
      {children}
    </div>
  );
};
