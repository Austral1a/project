import React, { FC, ReactElement, useEffect } from "react";
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
import { useDispatch } from "react-redux";
import { getEmployeesAction } from "@StoreEmployees";

export const accordionItems = [
  {
    title: "Business Analysts",
    Employees: BusinessAnalystsList,
  },
  {
    title: "Programmers",
    Employees: ProgrammersList,
  },
  {
    title: "Project Managers",
    Employees: ProjectManagersList,
  },
  {
    title: "Quality Specialists",
    Employees: QualityAssuranceList,
  },
];

export const AccordionContainer: FC = (): ReactElement => {
  const { isItemActive, onItemToggle } = useAccordionContainerManager();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployeesAction());
  }, [dispatch]);

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
