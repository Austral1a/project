import React, { FC, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router";
import { RoutePath } from "@helpers";
import { Fallback } from "@components";

export const MainRoutes: FC = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <Switch>
        <Route exact path={RoutePath.home}>
          <Redirect to={RoutePath.accordion} />
        </Route>
      </Switch>
    </Suspense>
  );
};
