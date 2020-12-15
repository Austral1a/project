import React, { FC, ReactElement } from "react";
import { translation } from "@helpers";
import { Tab } from "@components";
import classes from "./Tabs.module.scss";

// TODO: translation
const tabValues = [
  { title: "item #1", content: "Content1" },
  { title: "item #2", content: "Content2" },
  { title: "item #3", content: "Content3" },
];

export const Tabs: FC = (): ReactElement => {
  return (
    <div className={classes["tabs"]}>
      <div>
        <h2>{translation.tabs}</h2>
      </div>
      <Tab tabValues={tabValues} />
    </div>
  );
};
