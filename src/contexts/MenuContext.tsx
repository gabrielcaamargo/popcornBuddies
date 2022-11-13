import { createContext, useState } from "react";

interface MenuContextInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: (setState: boolean) => void;
}

const MenuContextDefaultValues = {
	isMenuOpen: false,
	setIsMenuOpen: () => {}
};

interface MenuContextProviderProps {
  children: React.ReactNode
}

export const MenuContext = createContext<MenuContextInterface>(MenuContextDefaultValues);

export default function MenuContextProvider({children}: MenuContextProviderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	return (
		<MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
			{children}
		</MenuContext.Provider>
	);
}