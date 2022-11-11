import { createContext, useState } from "react";

const userDefaultValues = {
	userName: "",
	setUserName: () => {},

	isUserLogged: false,
	setIsUserLogged: () => {},
};

interface UserContextInterface {
	userName: string;
	setUserName: (setState: string) => void;
	
	isUserLogged: boolean;
	setIsUserLogged: (setState: boolean) => void;
}

interface UserContextProviderProps {
  children: React.ReactNode
}

export const UserContext = createContext<UserContextInterface>(userDefaultValues);

export default function UserContextProvider({children}: UserContextProviderProps) {
	const [userName, setUserName] = useState<string>("");
	
	const [isUserLogged, setIsUserLogged] = useState<boolean>(false);

	return (
		<UserContext.Provider value={{ userName, setUserName, isUserLogged, setIsUserLogged }}>
			{children}
		</UserContext.Provider>
	);
}