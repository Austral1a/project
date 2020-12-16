import React, { FC, ReactChild, ReactElement } from "react";
import { translation } from "@helpers";
import { Tab } from "@components";
import classes from "./Tabs.module.scss";

const {
  tabsItems: { tab1, tab2, tab3 },
} = translation;

export interface TabValues {
  title: string;
  content: ReactChild;
}

const tabValues: TabValues[] = [
  { title: tab1.title, content: tab1.content },
  { title: tab2.title, content: tab2.content },
  { title: tab3.title, content: tab3.content },
];

export const Tabs: FC = (): ReactElement => {
  return (
    <div className={classes["tabs-page"]}>
      <div className={classes["tabs-page__title"]}>
        <h2>{translation.tabs}</h2>
      </div>
      <Tab
        tabContainerClasses={classes["tabs-page__tab"]}
        tabValues={tabValues}
      />
    </div>
  );
};
