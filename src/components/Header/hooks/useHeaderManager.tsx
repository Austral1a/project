import {useCallback, useState} from "react";

interface HeaderManagerResult {
    isLogoHovered: boolean;
    isMenuOpen: boolean;
    onMouseOver: () => void;
    onMouseOut: () => void;
    onMenuToggle: () => void;
    onMenuClose: () => void;
}

export const useHeaderManager = (): HeaderManagerResult => {
    const [isLogoHovered, setIsLogoHovered] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const onMouseOver = useCallback(() => setIsLogoHovered(true), [])
    const onMouseOut = useCallback(() => setIsLogoHovered(false), [])

    const onMenuOpen = useCallback(() => setIsMenuOpen(true), [])
    const onMenuClose = useCallback(() => setIsMenuOpen(false),[])

    const onMenuToggle = useCallback(() => {
        isMenuOpen ? onMenuClose() : onMenuOpen()
    }, [isMenuOpen, onMenuClose, onMenuOpen])

    return {
        isLogoHovered,
        isMenuOpen,
        onMenuClose,
        onMenuToggle,
        onMouseOut,
        onMouseOver,
    }

}