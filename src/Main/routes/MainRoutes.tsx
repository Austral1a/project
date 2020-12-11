import React, { FC, Suspense } from "react";
import { Route, Redirect, Switch } from "react-router";
import { RoutePath } from "@helpers";

export const MainRoutes: FC = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Switch>
        <Route exact path={RoutePath.home}>
          <Redirect to={RoutePath.accordion} />
        </Route>
      </Switch>
    </Suspense>
  );
};
