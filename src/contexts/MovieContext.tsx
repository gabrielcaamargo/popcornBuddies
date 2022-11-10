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
	setIsModalOpen: () => {},

	movieList: [],
	setMovieList: () => {},
};

interface MovieInterface {
  name: string;
  description: string | undefined;
  banner: string;
	rate: number
}

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

	movieList: MovieInterface[];
	setMovieList: (setState: MovieInterface[]) => void;
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
	const [movieList, setMovieList] = useState<MovieInterface[]>([]);

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
				setIsModalOpen,
				movieList,
				setMovieList
			}}>
			{children}
		</MovieContext.Provider>
	);
}