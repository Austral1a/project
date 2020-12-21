import React, { CSSProperties, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { TabValues } from "@components";

interface TabManagerResult {
  activeTab: number;
  setActiveTab: (id: number) => void;
  activeLineStyle: CSSProperties;
}

export const useTabManager = (
  tabValues: any,
  tabHeaderRef: React.RefObject<HTMLHeadingElement | HTMLSpanElement>
): TabManagerResult => {
  const location = useLocation();

  const tabNameFromURL: string = location.pathname.replace(
    /^(.+\/)([a-z]+)$/i,
    "$2"
  );

  const [activeTab, setActiveTab] = useState<number>(0);

  const [activeTabName, setActiveTabName] = useState<string>(tabNameFromURL);

  const [tabWidth, setTabWidth] = useState<number>(0);

  const [activeLinePosition, setActiveLinePosition] = useState<number>(0);

  const calculateActiveLinePosition = useCallback(() => {
    return (
      Object.values(tabHeaderRef.current!.children)
        // collect only heading elements
        .filter((item: any) => item.className.includes("tab__title"))
        // grab their width
        .map((el: any) => el.clientWidth)
        // make slice from first tab to active tab
        .splice(0, activeTab + 1)
        // get sum of widths
        .reduce((acc: number, width: number) => acc + width)
    );
  }, [activeTab, tabHeaderRef]);

  useEffect(() => {
    setActiveTabName(tabNameFromURL);

    setActiveTab(
      tabValues.find((tab: TabValues) => tab.tabName === activeTabName).id
    );

    setActiveLinePosition(calculateActiveLinePosition());

    setTabWidth(tabHeaderRef.current!.children[activeTab].clientWidth);
  }, [
    tabNameFromURL,
    tabValues,
    activeTabName,
    activeTab,
    tabHeaderRef,
    calculateActiveLinePosition,
  ]);

  const activeLineStyle = {
    width: tabWidth,
    left: activeLinePosition - tabWidth,
  };

  return {
    activeTab,
    setActiveTab,
    activeLineStyle,
  };
};
