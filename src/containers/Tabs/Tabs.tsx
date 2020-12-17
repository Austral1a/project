import React, { FC, ReactElement, useEffect } from "react";
import { TabRoute, translation } from "@helpers";
import { Tab, TabValues } from "@components";
import classes from "./Tabs.module.scss";
import {
  TabRoutes,
  AgGridBAEmployeesList,
  AgGridQAEmployeesList,
  AgGridPMEmployeesList,
  AgGridProgrammersList,
  RedirectToTab1,
} from "./routes";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getBAEmployeesAction,
  getPMEmployeesAction,
  getProgrammersEmployeesAction,
  getQAEmployeesAction,
} from "@StoreEmployees";

const {
  tabsItems: { tab1, tab2, tab3, tab4 },
} = translation;

const tabValues: TabValues[] = [
  {
    title: <Link to={TabRoute.tab1}>{tab1.title}</Link>,
    content: (
      <TabRoutes routePath={TabRoute.tab1} component={AgGridBAEmployeesList} />
    ),
  },
  {
    title: <Link to={TabRoute.tab2}>{tab2.title}</Link>,
    content: (
      <TabRoutes routePath={TabRoute.tab2} component={AgGridQAEmployeesList} />
    ),
  },
  {
    title: <Link to={TabRoute.tab3}>{tab3.title}</Link>,
    content: (
      <TabRoutes routePath={TabRoute.tab3} component={AgGridPMEmployeesList} />
    ),
  },
  {
    title: <Link to={TabRoute.tab4}>{tab4.title}</Link>,
    content: (
      <TabRoutes routePath={TabRoute.tab4} component={AgGridProgrammersList} />
    ),
  },
];

const getEmployeesActions = [
  getQAEmployeesAction(),
  getBAEmployeesAction(),
  getPMEmployeesAction(),
  getProgrammersEmployeesAction(),
];

export const Tabs: FC = (): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    getEmployeesActions.forEach((getEmployeeAction) => {
      dispatch(getEmployeeAction);
    });
  }, [dispatch]);

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
