import React, {
  FC,
  ReactChild,
  ReactElement,
  useCallback,
  useRef,
} from "react";
import classNames from "classnames";
import classes from "./Tab.module.scss";
import { TabItem } from "./components";
import { useTabManager } from "./hooks";

export interface TabValues {
  title: ReactChild;
  content: ReactChild;
}

interface TabProps {
  tabContainerClasses?: string;
  tabHeaderClasses?: string;
  tabBodyClasses?: string;
  tabValues: TabValues[];
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

  const tabHeaderRef = useRef<HTMLDivElement>(null);

  const { activeTab, activeLineStyle, setActiveTab } = useTabManager(
    tabValues,
    tabHeaderRef
  );

  const handleItemClick = useCallback(
    (id: number) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  return (
    <div className={tabCustomClasses}>
      <div ref={tabHeaderRef} className={tabHeaderCustomClasses}>
        {tabValues.map((tab, id) => {
          return (
            <TabItem
              className={classes["tab__title"]}
              key={id}
              onClick={() => handleItemClick(id)}
            >
              {tab.title}
            </TabItem>
          );
        })}
        <span className={classes["tab__header-line"]} />
        <span
          style={{ ...activeLineStyle }}
          className={classes["tab__header-active-line"]}
        />
      </div>
      <div>
        {tabValues.map((tab, id) => {
          return (
            <div
              key={id}
              className={classNames(
                id === activeTab
                  ? classes["tab__body--showed"]
                  : classes["tab__body"],
                tabBodyClasses
              )}
            >
              {tab.content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
