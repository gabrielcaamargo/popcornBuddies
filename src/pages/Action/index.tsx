import { useFetch } from "../../hooks/useFetch";

import PageWrapper from "../../components/PageWrapper";
import Content from "../../components/Content";
import MovieList from "../../components/MovieList";

export default function Action() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	return (
		<PageWrapper>
			<Content bannerTitle="Action" isLoginPage={false}>
				<MovieList
					title="Action"
					hasLink={false}
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=28sort_by=popularity.desc&api_key=${API_KEY}&page=1&limit=24`)}
				/>
			</Content>
		</PageWrapper>
	);
}