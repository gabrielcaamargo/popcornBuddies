import Content from "../../components/Content";
import MovieList from "../../components/MovieList";
import PageWrapper from "../../components/PageWrapper";
import { useFetch } from "../../hooks/useFetch";

export default function Documentary() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	return (
		<PageWrapper>
			<Content bannerTitle="Documentary" isLoginPage={false}>
				<MovieList 
					title="Documentary"
					hasLink={false}
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
				/>
			</Content>
		</PageWrapper>
	);
}