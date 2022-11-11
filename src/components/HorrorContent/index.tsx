import { useFetch } from "../../hooks/useFetch";
import Content from "../Content";
import MovieList from "../MovieList";

export default function HorrorContent() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
  
	return (
		<Content bannerTitle="Horror" isLoginPage={false}>
			<MovieList
				title="Horror"
				hasLink={false}
				handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=27sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
			/>
		</Content>
	);
}