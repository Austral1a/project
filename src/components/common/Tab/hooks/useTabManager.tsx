import React, { CSSProperties, useEffect, useState } from "react";
import { useLocation } from "react-router";

interface TabManagerResult {
  activeTab: number;
  setActiveTab: (id: number) => void;
  activeLineStyle: CSSProperties;
}

export const useTabManager = (
  tabValues: any,
  tabHeaderRef: React.RefObject<any>
): TabManagerResult => {
  const location = useLocation();

  const activeTabFromURL = +location.pathname[location.pathname.length - 1] - 1;

  const [activeTab, setActiveTab] = useState<number>(activeTabFromURL || 0);

  const [tabWidth, setTabWidth] = useState<number>(0);

  const [activeLinePosition, setActiveLinePosition] = useState<number>(0);

  useEffect(() => {
    setActiveLinePosition(
      Object.values(tabHeaderRef.current.children)
        // collect only heading elements
        .filter((item: any) => item.className.includes("tab__title"))
        // grab their width
        .map((el: any) => el.clientWidth)
        // make slice from first tab to active tab
        .splice(0, activeTab + 1)
        // get sum of widths
        .reduce((acc: number, width: number) => acc + width)
    );

    setTabWidth(tabHeaderRef.current.children[activeTab].clientWidth);
  }, [activeTab, tabHeaderRef, activeLinePosition, tabWidth]);

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
