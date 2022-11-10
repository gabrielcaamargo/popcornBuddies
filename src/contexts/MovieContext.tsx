import { createContext, useState } from "react";

const MovieDefaultValues = {
	movieName: "",
	setMovieName: () => {},

	movieBanner: "",
	setMovieBanner: () => {},

	movieRate: 0,
	setMovieRate: () => {},

	movieDescription: "",
	setMovieDescription: () => {},

	isModalOpen: false,
	setIsModalOpen: () => {}
};

interface MovieContextInterface {
  movieName: string,
	setMovieName: (setState: string) => void,

	movieBanner: string,
	setMovieBanner: (setState: string) => void,

	movieRate: number,
	setMovieRate: (setState: number) => void,

	movieDescription: any,
	setMovieDescription: (setState: any) => void,

  isModalOpen: boolean;
	setIsModalOpen: (setState: boolean) => void,
}

interface MovieContextProviderProps {
  children: React.ReactNode
}

export const MovieContext = createContext<MovieContextInterface>(MovieDefaultValues); 

export default function MovieContextProvider({children}: MovieContextProviderProps) {
	const [movieName, setMovieName] = useState("");
	const [movieBanner, setMovieBanner] = useState("");
	const [movieRate, setMovieRate] = useState(0);
	const [movieDescription, setMovieDescription] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<MovieContext.Provider 
			value={{
				movieName, 
				setMovieName, 
				movieBanner, 
				setMovieBanner, 
				movieRate, 
				setMovieRate, 
				movieDescription, 
				setMovieDescription, 
				isModalOpen, 
				setIsModalOpen
			}}>
			{children}
		</MovieContext.Provider>
	);
}