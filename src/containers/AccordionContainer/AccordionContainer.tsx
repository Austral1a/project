import React, { FC, ReactElement } from "react";
import { Accordion, AccordionItem } from "@components";
import { useAccordionContainerManager } from "./hooks";
import { translation } from "@helpers";
import classes from "./AccordionContainer.module.scss";
import {
  BusinessAnalystsList,
  ProgrammersList,
  ProjectManagersList,
  QualityAssuranceList,
} from "./components";

export const accordionItems = [
  {
    title: translation.accordionItems.ba,
    Employees: BusinessAnalystsList,
  },
  {
    title: translation.accordionItems.programmers,
    Employees: ProgrammersList,
  },
  {
    title: translation.accordionItems.pm,
    Employees: ProjectManagersList,
  },
  {
    title: translation.accordionItems.qa,
    Employees: QualityAssuranceList,
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
              itemContent={<item.Employees />}
              onItemToggle={() => onItemToggle(id)}
            />
          );
        })}
      </Accordion>
    </div>
  );
};
