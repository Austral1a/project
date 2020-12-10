import React, { FC, ReactElement } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./AccordionItem.module.scss";

interface AccordionItemProps {
  className?: string;
  itemTitle: string;
  itemText: string;
  itemId: number;
  isItemOpen: boolean | undefined;
  onClick: () => void;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  className,
  itemTitle,
  itemText,
  onClick,
  isItemOpen,
}): ReactElement => {
  const customClasses = classNames(classes["accordion__item"], className);

  const customItemBodyClasses = classNames(
    classes["accordion__item-body"],
    isItemOpen
      ? classes["accordion__item-body--expanded"]
      : classes["accordion__item-body--shrinked"]
  );

  const accordionHeaderIcon = isItemOpen ? faChevronDown : faChevronRight;

  // TODO: add keyCode to open tab by enter
  return (
    <div className={customClasses}>
      <div
        tabIndex={0}
        aria-expanded={isItemOpen}
        role={"tab"}
        onClick={onClick}
        className={classes["accordion__item-header"]}
      >
        <FontAwesomeIcon
          className={classes["accordion__item-icon"]}
          icon={accordionHeaderIcon}
        />
        <h3 className={classes["accordion__item-title"]}>{itemTitle}</h3>
      </div>
      {isItemOpen && (
        <div
          role={"tabpanel"}
          aria-hidden={!isItemOpen}
          className={customItemBodyClasses}
        >
          {itemText}
        </div>
      )}
    </div>
  );
};
