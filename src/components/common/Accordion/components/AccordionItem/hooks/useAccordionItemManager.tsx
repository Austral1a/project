import { useCallback, useState } from "react";

interface AccordionItemManagerResult {
  isItemOpen: boolean;
  onItemShrink: () => void;
  onItemExpand: () => void;
  onItemToggle: () => void;
}

export const useAccordionItemManager = (): AccordionItemManagerResult => {
  const [isItemOpen, setIsItemOpen] = useState(false);

  const onItemExpand = useCallback(() => setIsItemOpen(true), []);
  const onItemShrink = useCallback(() => setIsItemOpen(false), []);

  const onItemToggle = useCallback(
    () => (isItemOpen ? onItemShrink() : onItemExpand()),
    [isItemOpen, onItemExpand, onItemShrink]
  );

  return {
    isItemOpen,
    onItemShrink,
    onItemExpand,
    onItemToggle,
  };
};
