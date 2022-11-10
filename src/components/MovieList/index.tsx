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
								description={movie.overview}
								rate={movie.vote_average}
								movieId={movie.id}
								
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
										description={movie.overview}
										rate={movie.vote_average}
										movieId={movie.id}
									/>
								))}
						</Container>
			}
		</ListContainer>
	);
}