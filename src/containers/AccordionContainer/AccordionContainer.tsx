import React, { FC, ReactElement } from "react";
import { Accordion, AccordionItem } from "@components";
import { useAccordionContainerManager } from "./hooks";
import { translation } from "@helpers";
import classes from "./AccordionContainer.module.scss";
import { BusinessAnalysts } from "./components/BAList";

export const accordionItems = [
  {
    title: "Business Analysts",
    Content: BusinessAnalysts,
  },
  {
    title: "Programmers",
    Content: BusinessAnalysts,
  },
  {
    title: "Project Managers",
    Content: BusinessAnalysts,
  },
  {
    title: "Quality Specialists",
    Content: BusinessAnalysts,
  },
];

export const AccordionContainer: FC = (): ReactElement => {
  const { isItemActive, onItemToggle } = useAccordionContainerManager();

  return (
    <div className={classes["accordion-page"]}>
      <h2 className={classes["accordion-page__title"]}>
        {translation.accordion}
      </h2>
      <Accordion className={classes["accordion-page__accordion"]}>
        {accordionItems.map((item, id) => {
          return (
            <AccordionItem
              isItemOpen={isItemActive(id)}
              itemId={id}
              key={item.title}
              itemTitle={item.title}
              itemContent={<item.Content />}
              onItemToggle={() => onItemToggle(id)}
            />
          );
        })}
      </Accordion>
    </div>
  );
};
