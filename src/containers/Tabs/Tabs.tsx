import React, { FC, ReactChild, ReactElement } from "react";
import { TabRoute, translation } from "@helpers";
import { Tab } from "@components";
import classes from "./Tabs.module.scss";
import { TabRoutes } from "./routes";

const {
  tabsItems: { tab1, tab2, tab3 },
} = translation;

export interface TabValues {
  title: string;
  content: ReactChild;
}

const tabValues: { title: string; route: string }[] = [
  { title: tab1.title, route: TabRoute.tab1 },
  { title: tab2.title, route: TabRoute.tab2 },
  { title: tab3.title, route: TabRoute.tab3 },
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
        tabRoutes={<TabRoutes />}
      />
    </div>
  );
};
