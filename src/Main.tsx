import React, { FC, ReactElement } from "react";
import { Sidebar } from "@Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import classes from "./styles/Main.module.scss";
import { Header } from "./components/Header";

export const Main: FC = (): ReactElement => {
  return (
    <Router>
      <div className={classes["root"]}>
        <Header />
        <div className={classes["main"]}>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
};
