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

  const activeLineStyle = {
    width: tabWidth,
    left: tabWidth * (activeTab + 1) - tabWidth,
  };

  useEffect(() => {
    setActiveTab(activeTab);

    setTabWidth(tabHeaderRef.current.firstChild.clientWidth);
  }, [setActiveTab, activeTab, tabHeaderRef, activeTabFromURL]);

  return {
    activeTab,
    setActiveTab,
    activeLineStyle,
  };
};
