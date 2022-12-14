import Content from "../../components/Content";
import MovieList from "../../components/MovieList";
import PageWrapper from "../../components/PageWrapper";
import { useFetch } from "../../hooks/useFetch";

export default function Genres() {
	const baseURL = "https://api.themoviedb.org/3";
	const API_KEY = import.meta.env.VITE_API_KEY;
	const { getMovies } = useFetch();
	return (
		<PageWrapper>
			<Content bannerTitle="Genres" isLoginPage={false}>
				<MovieList 
					title="Dramas"
					hasLink={true} 
					seeMoreUrl="/genres/drama"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>

				<MovieList 
					title="Action"
					hasLink={true} 
					seeMoreUrl="/genres/action"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=28&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>

				<MovieList 
					title="Horror"
					hasLink={true} 
					seeMoreUrl="/genres/horror"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=27&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>

				<MovieList 
					title="Documentary"
					hasLink={true} 
					seeMoreUrl="/genres/documentary"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=99&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>

				<MovieList 
					title="Comedy"
					hasLink={true} 
					seeMoreUrl="/genres/comedy"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=35&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>

				<MovieList 
					title="Family"
					hasLink={true} 
					seeMoreUrl="/genres/family"
					handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=10751&sort_by=popularity.desc&api_key=${API_KEY}`)}
				/>
			</Content>
		</PageWrapper>
	);
}