import MovieList from "../MovieList";
import { Banner, Main, MovieWrapper } from "./styles";
import { useFetch } from "../../hooks/useFetch";

export default function MainContent() {
	const { getTrendingMovies } = useFetch();

	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;

	console.log(getTrendingMovies(`${baseURL}/discover/movie?sort_by=popularity.asc&api_key=${API_KEY}&page=1`));
	

	return (
		<Main>
			<Banner />
			<MovieWrapper>
				<MovieList 
					title="Trending" 
					seeMoreUrl="/trending" 
					handleGetData={getTrendingMovies(`${baseURL}/discover/movie?sort_by=popularity&api_key=${API_KEY}&page=1&limit=4`)}
				/>
			</MovieWrapper>
		</Main>
	);
}