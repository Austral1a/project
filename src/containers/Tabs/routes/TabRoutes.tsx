import React, { ComponentType, FC, lazy, Suspense } from "react";
import { Route } from "react-router";
import { Fallback } from "@components";

export const AgGridBAEmployeesList = lazy(() =>
  import("../components/AgGridBAList").then((module) => ({
    default: module.AgGridBAList,
  }))
);

export const AgGridQAEmployeesList = lazy(() =>
  import("../components/AgGridQAList").then((module) => ({
    default: module.AgGridQAList,
  }))
);

export const AgGridPMEmployeesList = lazy(() =>
  import("../components/AgGridPMList").then((module) => ({
    default: module.AgGridPMList,
  }))
);

export const AgGridProgrammersList = lazy(() =>
  import("../components/AgGridProgrammersList").then((module) => ({
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
      <Route exact path={routePath} component={component} />
    </Suspense>
  );
};
