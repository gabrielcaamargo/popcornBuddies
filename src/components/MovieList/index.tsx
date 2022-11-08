import { Link } from "react-router-dom";
import Movie from "../Movie";
import { Container, ListContainer } from "./styles";

import { getData } from "../../types/interfaces/getData";

interface MovieListProps {
	title: string;
	seeMoreUrl: string;
	handleGetData: any;
}

export default function MovieList({title, seeMoreUrl, handleGetData}: MovieListProps) {
	function getMoviePic(picUrl: string) {
		const baseURL = "https://image.tmdb.org/t/p/w342";
		const moviePic = `${baseURL}${picUrl}`;

		return moviePic;
	}
	
	function handleCreateDotsToString(string: string) {
		if(string.length > 100) {
			const slicedString = string.slice(0, 95);
			const stringWithDots = `${slicedString}...`;
			return stringWithDots;
		}
	}

	return (    
		<ListContainer>
			<div className="listHeader">
				<h3>{title}</h3>
				<Link to={seeMoreUrl}>See more</Link>
			</div>
			<Container>
				{handleGetData?.results
					.filter((movie: getData) => movie.poster_path !== null)
					.slice(0, 4)
					.map((movie:getData) => (
						<Movie 
							banner={getMoviePic(movie.poster_path)}
							name={movie.title}
							key={movie.id}
							description={handleCreateDotsToString(movie.overview)}
						/>
					))}
			</Container>
		</ListContainer>
	);
}