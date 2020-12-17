import React, { FC, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router";
import { RoutePath, TabRoute } from "@helpers";
import { Fallback } from "@components";

const accordion = lazy(() =>
  import("../../../containers/AccordionContainer").then((module) => ({
    default: module.AccordionContainer,
  }))
);

const Tabs = lazy(() =>
  import("../../../containers/Tabs").then((module) => ({
    default: module.Tabs,
  }))
);

const Item3 = lazy(() =>
  import("../../../containers/Item3").then((module) => ({
    default: module.Item3,
  }))
);

const Settings = lazy(() =>
  import("../../../containers/Settings").then((module) => ({
    default: module.Settings,
  }))
);

export const Routes: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route path={RoutePath.accordion} component={accordion} />
        <Route path={RoutePath.tabs} component={Tabs} />
        <Route path={RoutePath.item3} component={Item3} />
        <Route path={RoutePath.settings} component={Settings} />
      </Switch>
    </Suspense>
  );
};
