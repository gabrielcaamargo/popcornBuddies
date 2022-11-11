import Content from "../Content";

import { useFetch } from "../../hooks/useFetch";
import MovieList from "../MovieList";

export default function DramasContent() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;

	return (
		<Content bannerTitle="Dramas" isLoginPage={false}>
			<MovieList 
				title="Dramas"
				handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
				hasLink={false}
			/>
		</Content>
	);
}