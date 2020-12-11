import React, { FC, ReactElement, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import classes from "./AccordionItem.module.scss";

interface AccordionItemProps {
  className?: string;
  itemTitle: string;
  itemContent: any;
  itemId: number;
  isItemOpen: boolean;
  onItemToggle: () => void;
}

export const AccordionItem: FC<AccordionItemProps> = ({
  className,
  itemTitle,
  itemContent,
  onItemToggle,
  isItemOpen,
}): ReactElement => {
  const accordionItemClasses = classNames(
    classes["accordion__item"],
    isItemOpen && classes["accordion__item--active"],
    className
  );

  const itemBodyClasses = classNames(
    classes["accordion__item-body"],
    isItemOpen && classes["accordion__item-body--expanded"]
  );

  const onEnterPress = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "Enter") {
        onItemToggle();
      }
    },
    [onItemToggle]
  );

  return (
    <div className={accordionItemClasses}>
      <div
        tabIndex={0}
        aria-expanded={isItemOpen}
        role="tab"
        onClick={onItemToggle}
        onKeyPress={onEnterPress}
        className={classes["accordion__item-header"]}
      >
        <FontAwesomeIcon
          className={classes["accordion__item-icon"]}
          icon={faChevronRight}
        />
        <h3 className={classes["accordion__item-title"]}>{itemTitle}</h3>
      </div>
      <div
        className={itemBodyClasses}
        role="tabpanel"
        aria-hidden={!isItemOpen}
      >
        {isItemOpen && itemContent}
      </div>
    </div>
  );
};
