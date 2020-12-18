import React, { FC, ReactElement, useEffect, useMemo } from "react";
import { tabRoutes, translation } from "@helpers";
import { Tab, TabValues } from "@components";
import classes from "./Tabs.module.scss";
import {
  TabRoutes,
  AgGridBAEmployeesList,
  AgGridQAEmployeesList,
  AgGridPMEmployeesList,
  AgGridProgrammersList,
  RedirectToBusinessAnalystsTab,
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
  tabsItems: {
    businessAnalysts,
    programmers,
    projectManagers,
    qualityAssurance,
  },
} = translation;

const tabValues: TabValues[] = [
  {
    title: (
      <Link to={tabRoutes.businessAnalysts}>{businessAnalysts.title}</Link>
    ),
    content: (
      <TabRoutes
        routePath={tabRoutes.businessAnalysts}
        component={AgGridBAEmployeesList}
      />
    ),
  },
  {
    title: (
      <Link to={tabRoutes.qualityAssurance}>{qualityAssurance.title}</Link>
    ),
    content: (
      <TabRoutes
        routePath={tabRoutes.qualityAssurance}
        component={AgGridQAEmployeesList}
      />
    ),
  },
  {
    title: <Link to={tabRoutes.projectManagers}>{projectManagers.title}</Link>,
    content: (
      <TabRoutes
        routePath={tabRoutes.projectManagers}
        component={AgGridPMEmployeesList}
      />
    ),
  },
  {
    title: <Link to={tabRoutes.programmers}>{programmers.title}</Link>,
    content: (
      <TabRoutes
        routePath={tabRoutes.programmers}
        component={AgGridProgrammersList}
      />
    ),
  },
];

export const Tabs: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const getEmployeesActions = useMemo(
    () => [
      dispatch(getQAEmployeesAction()),
      dispatch(getBAEmployeesAction()),
      dispatch(getPMEmployeesAction()),
      dispatch(getProgrammersEmployeesAction()),
    ],
    [dispatch]
  );

  useEffect(() => {
    getEmployeesActions.forEach((getEmployeeAction) => getEmployeeAction);
  }, [getEmployeesActions]);

  return (
    <div className={classes["tabs-page"]}>
      <div className={classes["tabs-page__title"]}>
        <h2>{translation.tabs}</h2>
      </div>
      <Tab
        tabContainerClasses={classes["tabs-page__tab"]}
        tabValues={tabValues}
      />
      <RedirectToBusinessAnalystsTab />
    </div>
  );
};
