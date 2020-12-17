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

  const [tabHeaderChildrenWidth, setTabHeaderChildrenWidth] = useState<number>(
    0
  );

  useEffect(() => {
    setTabHeaderChildrenWidth(
      Object.values(tabHeaderRef.current.children)
        .filter((item: any) => item.className.includes("tab__title"))
        .map((el: any) => el.clientWidth)
        .splice(0, activeTab + 1)
        .reduce((acc: number, width: number) => acc + width)
    );

    setTabWidth(tabHeaderRef.current.children[activeTab].clientWidth);
  }, [
    activeTab,
    tabHeaderRef,
    tabHeaderChildrenWidth,
    tabHeaderChildrenWidth,
    tabWidth,
  ]);

  const activeLineStyle = {
    width: tabWidth,
    left: tabHeaderChildrenWidth - tabWidth,
  };

  return {
    activeTab,
    setActiveTab,
    activeLineStyle,
  };
};
