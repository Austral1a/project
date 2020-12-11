import { Key, useCallback, useEffect, useState } from "react";
import { accordionItems } from "@containers";

interface ActiveAccordionItems {
  itemId: Key;
  isActive: boolean;
}

interface AccordionContainerResult {
  isItemActive: (id: number) => boolean;
  onItemToggle: (id: number) => void;
}

export const useAccordionContainerManager = (): AccordionContainerResult => {
  const [activeItems, setActiveItems] = useState<ActiveAccordionItems[]>([]);

  useEffect(() => {
    setActiveItems(
      accordionItems.map((item, id) => {
        return {
          itemId: id,
          isActive: false,
        };
      })
    );
  }, []);

  const isItemActive = useCallback(
    (id: number) => {
      return activeItems[id]?.isActive;
    },
    [activeItems]
  );

  const onItemToggle = useCallback(
    (id: number) => {
      const newActiveItems = activeItems.map((item) => {
        if (item.itemId === id) {
          item = { ...item, isActive: !activeItems[id].isActive };
          return item;
        }

        return { ...item, isActive: false };
      });

      setActiveItems(newActiveItems);
    },
    [activeItems, setActiveItems]
  );

  return {
    isItemActive,
    onItemToggle,
  };
};
