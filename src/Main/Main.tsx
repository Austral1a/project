import React, { FC, ReactElement } from "react";
import { Sidebar, Header } from "@components";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "../styles/Main.module.scss";
import { MainRoutes } from "./routes/MainRoutes";

export const Main: FC = (): ReactElement => {
  return (
    <Router>
      <div className={classes["root"]}>
        <Header />
        <div className={classes["main"]}>
          <Sidebar />
        </div>
      </div>
      <MainRoutes />
    </Router>
  );
};
