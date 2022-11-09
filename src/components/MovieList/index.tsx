import { Link } from "react-router-dom";
import Movie from "../Movie";
import { Container, ListContainer } from "./styles";

import { getData } from "../../types/interfaces/getData";

interface MovieListProps {
	title: string;
	seeMoreUrl?: string;
	handleGetData: any;
	hasLink: boolean
}

export default function MovieList({title, seeMoreUrl, handleGetData, hasLink}: MovieListProps) {
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
				{seeMoreUrl && <Link to={seeMoreUrl}>See more</Link>}
			</div>
			{hasLink && 
				<Container>
					{handleGetData?.results
						.filter((movie: getData) => movie.poster_path !== null)
						.slice(0, 4)
						.map((movie:getData) => (
							<Movie 
								banner={getMoviePic(movie.poster_path)}
								name={movie.title}
								key={movie.id}
								description={movie.overview ? handleCreateDotsToString(movie.overview) : "No description available"}
							/>
						))}
				</Container>
			}

			{!hasLink && 
						<Container>
							{handleGetData?.results
								.filter((movie: getData) => movie.poster_path !== null)
								.map((movie:getData) => (
									<Movie 
										banner={getMoviePic(movie.poster_path)}
										name={movie.title}
										key={movie.id}
										description={movie.overview ? handleCreateDotsToString(movie.overview) : "No description available"}
									/>
								))}
						</Container>
			}
		</ListContainer>
	);
}