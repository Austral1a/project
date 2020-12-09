import React, { FC, ReactElement, useCallback, useState } from "react";
import { Accordion, AccordionItem } from "../../components/common/Accordion";
import classes from "./Accordion.module.scss";
import { translation } from "@helpers";

const accordionItems = [
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

export const AccordionCustom: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activateTab = useCallback(
    (index: number) => {
      const tab = activeTab === index ? -1 : index;
      setActiveTab(tab);
    },
    [activeTab]
  );

  return (
    <Accordion className={classes["accordion"]}>
      {accordionItems.map((item, id) => {
        return (
          <AccordionItem
            key={item.title}
            className={classes["accordion__item"]}
            itemTitle={item.title}
            itemText={item.text}
            onClick={() => activateTab(id)}
          />
        );
      })}
    </Accordion>
  );
};
