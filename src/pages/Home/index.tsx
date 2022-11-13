import Content from "../../components/Content";
import MovieList from "../../components/MovieList";
import PageWrapper from "../../components/PageWrapper";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
	const { getMovies } = useFetch();
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	return (
		<PageWrapper>
			<Content bannerTitle="Home" isLoginPage={false}>
				<MovieList 
					title="Trending" 
					seeMoreUrl="/trending" 
					handleGetData={getMovies(`${baseURL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)}
					hasLink={true}
				/>

				<MovieList
					title="Comedies"
					seeMoreUrl="/genres/comedy"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=${API_KEY}`)}
					hasLink={true}
				/>

				<MovieList
					title="Dramas"
					hasLink={true}
					seeMoreUrl="/genres/drama"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>
			</Content>
		</PageWrapper>
	);
}