import { useContext, useEffect } from "react";
import { MovieContext } from "../../contexts/MovieContext";

import Content from "../Content";
import Movie from "../Movie";
import { ListContainer } from "./styles";

export default function MyListContent() {
	const { movieList } = useContext(MovieContext);
  
	useEffect(() => console.log(movieList), []);
  
	return (
		<Content bannerTitle="My List" isLoginPage={false}>
			{movieList.length === 0 && 
      <h1 className="emptyList">Your list is currently empty. Add a movie!</h1>
			}
    
			<ListContainer>
				{movieList.length >= 1 && 
      		movieList.map(movie => (      	
      			<Movie
      				key={Math.random()}
      				name={movie.name}
      				banner={movie.banner}
      				description={movie.description}
      				rate={movie.rate}
      				movieId={movie.id}
      			/>  
      		))
				}
			</ListContainer>
		</Content>
	);
}