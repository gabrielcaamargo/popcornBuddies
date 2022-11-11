import Content from "../Content";
import MovieList from "../MovieList";

import { useFetch } from "../../hooks/useFetch";

export default function TrendingContent() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;

	return (
		<Content bannerTitle="Trending" isLoginPage={false}>
			<MovieList 
				title="Trending"
				handleGetData={getMovies(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
				hasLink={false}
			/>
		</Content>
	);
}