import React, { FC, ReactElement } from "react";
import { Accordion, AccordionItem } from "@components";
import { useAccordionContainerManager } from "./hooks";
import { translation } from "@helpers";
import classes from "./AccordionContainer.module.scss";

export const accordionItems = [
  {
    title: "section1",
    text: translation.accordionText,
  },
  {
    title: "section2",
    text: translation.accordionText,
  },
  {
    title: "section3",
    text: translation.accordionText,
  },
  {
    title: "section4",
    text: translation.accordionText,
  },
];

export const AccordionContainer: FC = (): ReactElement => {
  const { isItemActive, onItemToggle } = useAccordionContainerManager();

  return (
    <Accordion className={classes["accordion"]}>
      {accordionItems.map((item, id) => {
        return (
          <AccordionItem
            isItemOpen={isItemActive(id)}
            itemId={id}
            key={item.title}
            itemTitle={item.title}
            itemText={item.text}
            onItemToggle={() => onItemToggle(id)}
          />
        );
      })}
    </Accordion>
  );
};
