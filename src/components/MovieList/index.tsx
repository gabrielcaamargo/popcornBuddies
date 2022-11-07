import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import Movie from "../Movie";
import { Container, ListContainer } from "./styles";

interface MovieListProps {
	title: string;
	seeMoreUrl: string;
}

interface ResponseInterface {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	images: string[];
	id: number;
	price: number;
	rating: number;
	stock: number;
	thumbnail: string;
	title: string;
}

export default function MovieList({title, seeMoreUrl}: MovieListProps) {
	// const [loading, response] = useFetch("https://dummyjson.com/docs/products?limit=4");

	return (    
		<ListContainer>
			<div className="listHeader">
				<h3>{title}</h3>
				<Link to={seeMoreUrl}>See more</Link>
			</div>

			<Container>
				{/* {response?.products?.map((movie: any) => (
					<Movie 
						banner={movie.images[0]}
						name={movie.title}
						key={movie.id}
						description={movie.description}
					/>
				))} */}
			</Container>
		</ListContainer>
	);
}