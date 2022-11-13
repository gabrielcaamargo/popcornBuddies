import { useFetch } from "../../hooks/useFetch";
import Content from "../../components/Content";
import MovieList from "../../components/MovieList";
import PageWrapper from "../../components/PageWrapper";

export default function Trending() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	return (
		<PageWrapper>
			<Content bannerTitle="Trending" isLoginPage={false}>
				<MovieList 
					title="Trending"
					handleGetData={getMovies(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
					hasLink={false}
				/>
			</Content>
		</PageWrapper>
	);
}