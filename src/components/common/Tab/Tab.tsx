import React, {
  FC,
  ReactElement,
  Suspense,
  useCallback,
  useEffect,
  useRef,
} from "react";
import classNames from "classnames";
import classes from "./Tab.module.scss";
import { TabItem } from "./components";
import { useTabManager } from "./hooks";
import { Route, Switch, useLocation } from "react-router";
import { TabRoute } from "@helpers";

interface TabProps {
  tabContainerClasses?: string;
  tabHeaderClasses?: string;
  tabBodyClasses?: string;
  tabValues: { title: string; route: string }[];
  tabRoutes?: any;
}

export const Tab: FC<TabProps> = ({
  tabContainerClasses,
  tabHeaderClasses,
  tabBodyClasses,
  tabValues,
  tabRoutes,
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

  const handleTabItemClick = useCallback(
    (id: number) => {
      setActiveTab(id);
    },
    [setActiveTab]
  );

  let location = useLocation();
  useEffect(() => {
    setActiveTab(+location.pathname[location.pathname.length - 1] - 1 || 0);

    console.log(
      activeTab,
      +location.pathname[location.pathname.length - 1] - 1
    );
  }, [location, setActiveTab, activeTab]);

  return (
    <>
      <div className={tabCustomClasses}>
        <div ref={tabHeaderRef} className={tabHeaderCustomClasses}>
          {tabValues.map((item, id) => {
            return (
              <TabItem
                routePath={item.route}
                className={classes["tab__title"]}
                key={item.title + id}
                onClick={() => handleTabItemClick(id)}
              >
                {item.title}
              </TabItem>
            );
          })}
          <span className={classes["tab__header-line"]} />
        </div>
        <span
          style={{ ...activeLineStyle }}
          className={classes["tab__active-line"]}
        />
        {/*<div
          className={classNames(
            activeTab === +location.pathname[location.pathname.length - 1]
              ? classes["tab__body--showed"]
              : classes["tab__body"],
            classes["tab__body--showed"]
          )}
        >
          {tabRoutes}
        </div>*/}
        {tabValues.map((_, id) => {
          return (
            <div
              className={classNames(
                id === activeTab
                  ? classes["tab__body--showed"]
                  : classes["tab__body"]
              )}
            >
              {tabRoutes}
            </div>
          );
        })}
      </div>
    </>
  );
};
