import React, { FC, ReactChild, ReactElement } from "react";
import classNames from "classnames";
import classes from "./DropDownMenu.module.scss";

interface DropDownMenuProps {
  children: ReactChild;
  className?: string;
  onClick?: () => void;
}

export const DropDownMenu: FC<DropDownMenuProps> = ({
  children,
  onClick,
  className,
}): ReactElement => {
  const customClasses = classNames(classes["drop-down"], className);

  return (
    <div onClick={onClick} className={customClasses}>
      {children}
    </div>
  );
};
