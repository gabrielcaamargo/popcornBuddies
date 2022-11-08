import { Link } from "react-router-dom";
import Movie from "../Movie";
import { Container, ListContainer } from "./styles";

interface MovieListProps {
	title: string;
	seeMoreUrl: string;
	handleGetData: any;
}

import NoPic from "../../assets/icons/noPic.png";

export default function MovieList({title, seeMoreUrl, handleGetData}: MovieListProps) {
	function getMoviePic(picUrl: string) {
		const baseURL = "https://image.tmdb.org/t/p/w342";
		const moviePic = `${baseURL}${picUrl}`;

		return moviePic;
	}
	
	return (    
		<ListContainer>
			<div className="listHeader">
				<h3>{title}</h3>
				<Link to={seeMoreUrl}>See more</Link>
			</div>
			<Container>
				{handleGetData?.results
					.filter((movie: any) => movie.poster_path !== null)
					.slice(0, 4)
					.map((movie:any) => (
						<Movie 
							banner={getMoviePic(movie.poster_path)}
							name={movie.title}
							key={movie.id}
							description={movie.title}
						/>
					))}
			</Container>
		</ListContainer>
	);
}