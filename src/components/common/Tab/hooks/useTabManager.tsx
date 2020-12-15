import { CSSProperties, useCallback, useState } from "react";

interface TabManagerResult {
  activeTab: number;
  activateTab: (id: number) => void;
  activeLineStyle: CSSProperties;
}

export const useTabManager = (tabValues: any): TabManagerResult => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activateTab = useCallback((id: number) => {
    setActiveTab(id);
  }, []);

  const activeLineStyle = {
    width: `${100 / tabValues.length}%`,
    left: `calc(${100 / tabValues.length}% * ${activeTab + 1} - ${
      100 / tabValues.length
    }%)`,
  };

  return {
    activeTab,
    activateTab,
    activeLineStyle,
  };
};
