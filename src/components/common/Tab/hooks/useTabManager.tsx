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

  useEffect(() => {
    setActiveTab(activeTab);

    setTabWidth(
      tabHeaderRef.current.clientWidth / tabHeaderRef.current.childElementCount
    );
    setTimeout(
      () => console.log(Array.isArray(tabHeaderRef.current!.children)),
      1000
    );
    console.log(tabHeaderRef);
  }, [setActiveTab, activeTab, tabHeaderRef, activeTabFromURL]);

  //
  /*const tabHeaderChildrenWidth = tabHeaderRef
    .current!.children.splice(0, activeTab)
    .map((child: HTMLElement) => child.clientWidth);
*/
  const activeLineStyle = {
    width: tabWidth,
    /*  left: tabHeaderChildrenWidth.reduce(
      (acc: number, width: number) => acc + width
    ),
  */ // left: tabWidth * (activeTab + 1) - tabWidth,
  };

  return {
    activeTab,
    setActiveTab,
    activeLineStyle,
  };
};
