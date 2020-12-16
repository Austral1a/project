import React, { CSSProperties, useCallback, useEffect, useState } from "react";

interface TabManagerResult {
  activeTab: number;
  activateTab: (id: number) => void;
  activeLineStyle: CSSProperties;
}

export const useTabManager = (
  tabValues: any,
  tabHeaderRef: React.RefObject<HTMLDivElement>
): TabManagerResult => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const [tabHeaderWidth, setTabHeaderWidth] = useState<number>(0);

  const activateTab = useCallback((id: number) => {
    setActiveTab(id);
  }, []);

  const tabWidth = tabHeaderWidth / tabValues.length;

  const activeLineStyle = {
    width: tabWidth,
    left: tabWidth * (activeTab + 1) - tabWidth,
  };

  useEffect(() => {
    setTabHeaderWidth(tabHeaderRef.current!.clientWidth);
  }, [tabHeaderRef]);

  return {
    activeTab,
    activateTab,
    activeLineStyle,
  };
};
