import React, {FC, ReactChild, ReactElement} from "react";
import classNames from "classnames";
import classes from './DropDownMenu.module.scss'

interface DropDownMenuProps {
  children: ReactChild;
  className?: string;
}

export const DropDownMenu: FC<DropDownMenuProps> = ({children, className}): ReactElement => {

  const customClasses = classNames(classes["drop-down"], className)

  return (
      <div className={customClasses}>
        {children}
      </div>
  )
};
