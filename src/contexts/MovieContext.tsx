import { createContext, useState } from "react";

const MovieDefaultValues = {
	movieName: "",
	setMovieName: () => {},

	movieBanner: "",
	setMovieBanner: () => {},

	movieRate: 0,
	setMovieRate: () => {},

	movieDescription: "",
	setMovieDescription: () => {}
};

interface MovieContextInterface {
  movieName: string,
	setMovieName: (setState: string) => void,

	movieBanner: string,
	setMovieBanner: (setState: string) => void,

	movieRate: number,
	setMovieRate: (setState: number) => void,

	movieDescription: string,
	setMovieDescription: (setState: string) => void
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

	return (
		<MovieContext.Provider value={{movieName, setMovieName, movieBanner, setMovieBanner, movieRate, setMovieRate, movieDescription, setMovieDescription}}>
			{children}
		</MovieContext.Provider>
	);
}