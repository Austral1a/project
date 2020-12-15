import React, { FC, ReactElement } from "react";
import { translation } from "@helpers";
import { Tab } from "@components";
import classes from "./Tabs.module.scss";

const {
  tabsItems: { item2, item3, item1 },
} = translation;

const tabValues = [
  { title: item1.title, content: item1.content },
  { title: item2.title, content: item2.content },
  { title: item3.title, content: item3.content },
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
