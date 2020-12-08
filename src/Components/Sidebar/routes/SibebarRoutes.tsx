import React, { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { RoutePath } from "../../../helpers";

const Item1 = lazy(() =>
  import("../components/Item1").then((module) => ({
    default: module.Item1,
  }))
);

const Item2 = lazy(() =>
  import("../components/Item2").then((module) => ({
    default: module.Item2,
  }))
);

const Item3 = lazy(() =>
  import("../components/Item3").then((module) => ({
    default: module.Item3,
  }))
);

const Settings = lazy(() =>
  import("../components/Settings").then((module) => ({
    default: module.Settings,
  }))
);

export const Routes: FC = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Switch>
        <Route path={RoutePath.item1} component={Item1} />
        <Route path={RoutePath.item2} component={Item2} />
        <Route path={RoutePath.item3} component={Item3} />
        <Route path={RoutePath.settings} component={Settings} />
      </Switch>
    </Suspense>
  );
};
