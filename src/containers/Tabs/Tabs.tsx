import React, { FC, ReactElement } from "react";
import { TabRoute, translation } from "@helpers";
import { Tab, TabValues } from "@components";
import classes from "./Tabs.module.scss";
import {
  TabRoutes,
  LazyTab1,
  LazyTab2,
  LazyTab3,
  RedirectToTab1,
} from "./routes";
import { Link } from "react-router-dom";

const {
  tabsItems: { tab1, tab2, tab3 },
} = translation;

const tabValues: TabValues[] = [
  {
    title: <Link to={TabRoute.tab1}>{tab1.title}</Link>,
    content: <TabRoutes routePath={TabRoute.tab1} component={LazyTab1} />,
  },
  {
    title: <Link to={TabRoute.tab2}>{tab2.title}</Link>,
    content: <TabRoutes routePath={TabRoute.tab2} component={LazyTab2} />,
  },
  {
    title: <Link to={TabRoute.tab3}>{tab3.title}</Link>,
    content: <TabRoutes routePath={TabRoute.tab3} component={LazyTab3} />,
  },
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
      <RedirectToTab1 />
    </div>
  );
};
