import React, { FC, ReactElement, useRef } from "react";
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
  const tabHeaderClasses = classNames(classes["tab__header"]);

  const tabHeaderRef = useRef<HTMLDivElement>(null);

  const { activeTab, activeLineStyle, activateTab } = useTabManager(
    tabValues,
    tabHeaderRef
  );

  return (
    <div className={tabClasses}>
      <div ref={tabHeaderRef} className={tabHeaderClasses}>
        {tabValues.map((item: any, id) => {
          return (
            <TabItem
              key={item.title}
              onClick={() => activateTab(id)}
              className="tab_title"
            >
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
