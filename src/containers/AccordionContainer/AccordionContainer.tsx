import React, { FC, ReactElement } from "react";
import { Accordion, AccordionItem } from "../../components/common/Accordion";
import classes from "./Accordion.module.scss";
import { translation } from "@helpers";
import { useAccordionContainerManager } from "./hooks";

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
  const { findActiveId, onItemToggle } = useAccordionContainerManager();

  return (
    <Accordion className={classes["accordion"]}>
      {accordionItems.map((item, id) => {
        return (
          <AccordionItem
            isItemOpen={findActiveId(id)}
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
