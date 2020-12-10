import { Key, useCallback, useEffect, useState } from "react";
import { accordionItems } from "../Accordion";

interface ActiveKeys {
  itemId: Key;
  isActive: boolean;
}

interface AccordionContainerResult {
  findActiveId: (id: number) => boolean;
  onItemOpen: (id: number) => void;
}

export const useAccordionContainerManager = (): AccordionContainerResult => {
  const [activeKeys, setActiveKeys] = useState<ActiveKeys[]>([]);

  useEffect(() => {
    setActiveKeys(
      accordionItems.map((item, id) => {
        return {
          itemId: id,
          isActive: false,
        };
      })
    );
  }, []);

  const findActiveId = useCallback(
    (id: number) => {
      return activeKeys[id]?.isActive;
    },
    [activeKeys]
  );

  const onItemOpen = useCallback(
    (id: number) => {
      const newActiveKeys = activeKeys.map((item) => {
        if (item.itemId === id) {
          item = { ...item, isActive: true };
          return item;
        }

        return { ...item, isActive: false };
      });

      setActiveKeys(newActiveKeys);
    },
    [activeKeys, setActiveKeys]
  );

  return {
    findActiveId,
    onItemOpen,
  };
};
