import React, { ComponentType, FC, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import { RoutePath, TabRoute } from "@helpers";
import { Fallback } from "@components";

export const AgGridBAEmployeesList = lazy(() =>
  import("../../../components/shared/AgGridBAList").then((module) => ({
    default: module.AgGridBAList,
  }))
);

export const AgGridQAEmployeesList = lazy(() =>
  import("../../../components/shared/AgGridQAList").then((module) => ({
    default: module.AgGridQAList,
  }))
);

export const AgGridPMEmployeesList = lazy(() =>
  import("../../../components/shared/AgGridPMList").then((module) => ({
    default: module.AgGridPMList,
  }))
);

export const AgGridProgrammersList = lazy(() =>
  import("../../../components/shared/AgGridProgrammersList").then((module) => ({
    default: module.AgGridProgrammersList,
  }))
);

interface TabRoutesProps {
  routePath: string;
  component: ComponentType;
}

export const TabRoutes: FC<TabRoutesProps> = ({ routePath, component }) => {
  return (
    <Suspense fallback={<Fallback />}>
      <Route path={routePath} component={component} />
    </Suspense>
  );
};

export const RedirectToTab1: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route exact path={RoutePath.tabs}>
          <Redirect strict from={RoutePath.tabs} to={TabRoute.tab1} />
        </Route>
      </Switch>
    </Suspense>
  );
};
