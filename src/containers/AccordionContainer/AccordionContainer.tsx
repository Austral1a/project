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

const {
  accordionItems: { pm, programmers, ba, qa },
} = translation;

export const accordionItems = [
  {
    title: ba,
    Employees: BusinessAnalystsList,
  },
  {
    title: programmers,
    Employees: ProgrammersList,
  },
  {
    title: pm,
    Employees: ProjectManagersList,
  },
  {
    title: qa,
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
              itemContent={isItemActive(id) && <item.Employees />}
              onItemToggle={() => onItemToggle(id)}
            />
          );
        })}
      </Accordion>
    </div>
  );
};
