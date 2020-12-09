import { useCallback, useState } from "react";

interface HeaderManagerResult {
  isLogoHovered: boolean;
  isMenuOpen: boolean;
  onHeaderIconHoverOver: () => void;
  onHeaderIconHoverOut: () => void;
  onMenuToggle: () => void;
  onMenuClose: () => void;
}

export const useHeaderManager = (): HeaderManagerResult => {
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onHeaderIconHoverOver = useCallback(() => setIsLogoHovered(true), []);
  const onHeaderIconHoverOut = useCallback(() => setIsLogoHovered(false), []);

  const onMenuOpen = useCallback(() => setIsMenuOpen(true), []);
  const onMenuClose = useCallback(() => setIsMenuOpen(false), []);

  const onMenuToggle = useCallback(() => {
    isMenuOpen ? onMenuClose() : onMenuOpen();
  }, [isMenuOpen, onMenuClose, onMenuOpen]);

  return {
    isLogoHovered,
    isMenuOpen,
    onMenuClose,
    onMenuToggle,
    onHeaderIconHoverOver,
    onHeaderIconHoverOut,
  };
};
