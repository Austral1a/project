import { useCallback, useState } from "react";

interface SidebarManagerResult {
  isSidebarOpen: boolean;
  onSidebarClose: () => void;
  onSidebarOpen: () => void;
  onSidebarToggle: () => void;
}

export const useSidebarManager = (): SidebarManagerResult => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onSidebarOpen = useCallback(() => setIsSidebarOpen(true), []);

  const onSidebarClose = useCallback(() => setIsSidebarOpen(false), []);

  const onSidebarToggle = useCallback(() => {
    isSidebarOpen ? onSidebarClose() : onSidebarOpen();
  }, [isSidebarOpen, onSidebarOpen, onSidebarClose]);

  return {
    isSidebarOpen,
    onSidebarClose,
    onSidebarOpen,
    onSidebarToggle,
  };
};
