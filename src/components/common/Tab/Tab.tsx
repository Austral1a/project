import React, { FC, ReactElement, useRef } from "react";
import classNames from "classnames";
import classes from "./Tab.module.scss";
import { TabItem } from "./components";
import { useTabManager } from "./hooks";

interface TabProps {
  tabContainerClasses?: string;
  tabHeaderClasses?: string;
  tabBodyClasses?: string;
  tabValues: { title: string; content: string }[];
}

export const Tab: FC<TabProps> = ({
  tabContainerClasses,
  tabHeaderClasses,
  tabBodyClasses,
  tabValues,
}): ReactElement => {
  const tabCustomClasses = classNames(classes["tab"], tabContainerClasses);
  const tabHeaderCustomClasses = classNames(
    classes["tab__header"],
    tabHeaderClasses
  );
  const tabBodyCustomClasses = classNames(classes["tab__body"], tabBodyClasses);

  const tabHeaderRef = useRef<HTMLDivElement>(null);

  const { activeTab, activeLineStyle, activateTab } = useTabManager(
    tabValues,
    tabHeaderRef
  );

  return (
    <div className={tabCustomClasses}>
      <div ref={tabHeaderRef} className={tabHeaderCustomClasses}>
        {tabValues.map((item: any, id) => {
          return (
            <TabItem key={item.title} onClick={() => activateTab(id)}>
              {item.title}
            </TabItem>
          );
        })}
      </div>
      <span
        style={{ ...activeLineStyle }}
        className={classes["tab__active-line"]}
      />
      <div className={tabBodyCustomClasses}>{tabValues[activeTab].content}</div>
    </div>
  );
};
