import { useCallback, useState } from "react";

interface HeaderManagerResult {
  isLogoHovered: boolean;
  isHeaderMenuOpen: boolean;
  onHeaderLogoHoverOver: () => void;
  onHeaderLogoHoverOut: () => void;
  onHeaderMenuToggle: () => void;
  onHeaderMenuClose: () => void;
}

export const useHeaderManager = (): HeaderManagerResult => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);

  const onHeaderLogoHoverOver = useCallback(() => setIsLogoHovered(true), []);
  const onHeaderLogoHoverOut = useCallback(() => setIsLogoHovered(false), []);

  const onHeaderMenuOpen = useCallback(() => setIsHeaderMenuOpen(true), []);
  const onHeaderMenuClose = useCallback(() => setIsHeaderMenuOpen(false), []);

  const onHeaderMenuToggle = useCallback(() => {
    isHeaderMenuOpen ? onHeaderMenuClose() : onHeaderMenuOpen();
  }, [isHeaderMenuOpen, onHeaderMenuClose, onHeaderMenuOpen]);

  return {
    isLogoHovered,
    isHeaderMenuOpen,
    onHeaderMenuClose,
    onHeaderMenuToggle,
    onHeaderLogoHoverOver,
    onHeaderLogoHoverOut,
  };
};
