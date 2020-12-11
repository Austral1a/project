import { Key, useCallback, useState } from "react";

interface AccordionContainerResult {
  isItemActive: (id: number) => boolean;
  onItemToggle: (id: number) => void;
}

export const useAccordionContainerManager = (): AccordionContainerResult => {
  const [activeItemId, setActiveItemId] = useState<Key>(0);

  const isItemActive = useCallback((id: number) => activeItemId === id, [
    activeItemId,
  ]);

  const onItemToggle = useCallback(
    (id: number) => {
      setActiveItemId(id);
    },
    [setActiveItemId]
  );

  return {
    isItemActive,
    onItemToggle,
  };
};
