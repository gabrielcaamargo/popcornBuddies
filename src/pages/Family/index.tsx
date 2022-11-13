import Content from "../../components/Content";
import MovieList from "../../components/MovieList";
import PageWrapper from "../../components/PageWrapper";
import { useFetch } from "../../hooks/useFetch";

export default function Family() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	return (
		<PageWrapper>
			<Content bannerTitle="Family" isLoginPage={false}>
				<MovieList 
					title="Family"
					hasLink={false}
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=10751&sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
				/>
			</Content>
		</PageWrapper>
	);
}