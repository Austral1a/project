import React, { FC, lazy, Suspense } from "react";
import { Switch, Route } from "react-router";
import { TabRoute } from "@helpers";

const Tab1 = lazy(() =>
  import("../../../containers/Tabs/components/Tab1").then((module) => ({
    default: module.Tab1,
  }))
);

const Tab2 = lazy(() =>
  import("../../../containers/Tabs/components/Tab2").then((module) => ({
    default: module.Tab2,
  }))
);

const Tab3 = lazy(() =>
  import("../../../containers/Tabs/components/Tab3").then((module) => ({
    default: module.Tab3,
  }))
);

export const TabRoutes: FC = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Switch>
        <Route path={TabRoute.tab1} component={Tab1} />
        <Route path={TabRoute.tab2} component={Tab2} />
        <Route path={TabRoute.tab3} component={Tab3} />
      </Switch>
    </Suspense>
  );
};
