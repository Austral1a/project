import React, { FC, ReactElement, useCallback, useState } from "react";
import classNames from "classnames";
import { useAccordionItemManager } from "./hooks";
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
  onClick: (...v: any) => void;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  className,
  itemTitle,
  itemText,
  onClick,
}): ReactElement => {
  const {
    isItemOpen,
    onItemExpand,
    onItemShrink,
    onItemToggle,
  } = useAccordionItemManager();

  const customClasses = classNames(classes["accordion__item"], className);

  const customItemBodyClasses = classNames(
    classes["accordion__item-body"],
    isItemOpen
      ? classes["accordion__item-body--expanded"]
      : classes["accordion__item-body--shrinked"]
  );

  const accordionHeaderIcon = isItemOpen ? faChevronDown : faChevronRight;
  return (
    <div aria-expanded={isItemOpen} className={customClasses}>
      <div
        onClick={() => {
          onClick();
          onItemToggle();
        }}
        className={classes["accordion__item-header"]}
      >
        <FontAwesomeIcon
          className={classes["accordion__item-icon"]}
          icon={accordionHeaderIcon}
        />
        <h3 className={classes["accordion__item-title"]}>{itemTitle}</h3>
      </div>
      {isItemOpen && (
        <div aria-hidden={!isItemOpen} className={customItemBodyClasses}>
          {itemText}
        </div>
      )}
    </div>
  );
};
