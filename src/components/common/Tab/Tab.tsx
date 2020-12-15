import React, { FC, ReactElement, useState } from "react";
import classNames from "classnames";
import classes from "./Tab.module.scss";
import { TabItem } from "./components";
import { useTabManager } from "./hooks";

interface TabProps {
  className?: string;
  tabValues: { title: string; content: string }[];
}

export const Tab: FC<TabProps> = ({ className, tabValues }): ReactElement => {
  const tabClasses = classNames(classes["tab"], className);
  const tabHeaderClasses = classNames(classes["tab__header"], className);

  const { activeTab, activeLineStyle, activateTab } = useTabManager(tabValues);

  return (
    <div className={tabClasses}>
      <div className={tabHeaderClasses}>
        {tabValues.map((item: any, id) => {
          return (
            <TabItem onClick={() => activateTab(id)} className={"tab_title"}>
              {item.title}
            </TabItem>
          );
        })}
      </div>
      <span
        style={{ ...activeLineStyle }}
        className={classes["tab__active-line"]}
      />
      <div className={classes["tab__body"]}>{tabValues[activeTab].content}</div>
    </div>
  );
};
