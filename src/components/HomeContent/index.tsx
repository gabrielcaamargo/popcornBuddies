import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
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
				title="Most rated Sci-fi"
				seeMoreUrl="/sci-fi"
				handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=878&sort_by=popularity.desc&api_key=${API_KEY}`)}
				hasLink={true}
			/>

			<MovieList
				title="Grossing comedies"
				seeMoreUrl="/comedies"
				handleGetData={getMovies(`${baseURL}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=${API_KEY}`)}
				hasLink={true}
			/>
		</Content>
	);
}