import MovieList from "../MovieList";
import { MovieWrapper } from "./styles";
import { useFetch } from "../../hooks/useFetch";
import Content from "../Content";

export default function HomeContent() {
	const { getMovies } = useFetch();

	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	
	return (
		<Content>
			<MovieWrapper>
				<MovieList 
					title="Trending" 
					seeMoreUrl="/trending" 
					handleGetData={getMovies(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=4`)}
				/>
				
				<MovieList
					title="Most rated Sci-fi"
					seeMoreUrl="/sci-fi"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=878&with_cast=500&sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=4`)}
				/>

				<MovieList
					title="Grossing comedies"
					seeMoreUrl="/comedies"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${API_KEY}`)}
				/>
			</MovieWrapper>
		</Content>
	);
}