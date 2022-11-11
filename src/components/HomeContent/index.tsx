import MovieList from "../MovieList";
import { useFetch } from "../../hooks/useFetch";
import Content from "../Content";

export default function HomeContent() {
	const { getMovies } = useFetch();

	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	
	return (
		<Content bannerTitle="Home" isLoginPage={false}>
			<MovieList 
				title="Trending" 
				seeMoreUrl="/trending" 
				handleGetData={getMovies(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)}
				hasLink={true}
			/>

			<MovieList
				title="Comedies"
				seeMoreUrl="/genres/comedies"
				handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${API_KEY}`)}
				hasLink={true}
			/>

			<MovieList
				title="Dramas"
				hasLink={true}
				seeMoreUrl="/genres/drama"
				handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${API_KEY}`)}
			/>
		</Content>
	);
}