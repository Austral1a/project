import React, { ComponentType, FC, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import { RoutePath, TabRoute } from "@helpers";
import { Fallback } from "@components";

export const LazyTab1 = lazy(() =>
  import("../../../containers/Tabs/components/Tab1").then((module) => ({
    default: module.Tab1,
  }))
);

export const LazyTab2 = lazy(() =>
  import("../../../containers/Tabs/components/Tab2").then((module) => ({
    default: module.Tab2,
  }))
);

export const LazyTab3 = lazy(() =>
  import("../../../containers/Tabs/components/Tab3").then((module) => ({
    default: module.Tab3,
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
