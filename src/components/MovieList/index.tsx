import { Link } from "react-router-dom";
import Movie from "../Movie";
import { Container, ListContainer } from "./styles";

const listMovies = [
	{id: 1, movieName: "The Pursuit of Happiness", banner: "https://imgs.search.brave.com/qNUKDqr8aQv3Ku207mN484wXpBFRbJ6AqAqiJ1mU-mw/rs:fit:1200:1152:1/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3Avb3JpZ2luYWwv/bnpNbU1ldlFzTDZI/dkhmaTRyd05UMHhM/TnV1LmpwZw", description: "Lorem ipsum dolor sit amet"},

	{id: 2, movieName: "Coraline", banner: "https://imgs.search.brave.com/1TfZlAxGuOJ_5PCUmh2jGOyU4y86YWzej8AJo5ChUJY/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9vY2Mt/MC0xNzIzLTE3MjIu/MS5uZmx4c28ubmV0/L2RubS9hcGkvdjYv/MERXNkNkRTRnWXRZ/eDhpeTNhajhnczlX/dFhFL0FBQUFCWEtQ/ZDQxeUFFLW1hOEZE/VGUwVmpQd0RwZ1lt/OTlrRVB3VVZBRF8x/Nkt5VUIyVVdQVXlk/azJtTWRQVU91c0xP/eFdHUUt3Umlsckdu/MTVHMTNhOG5kdHhw/QU5OLU1hNGhnQS5q/cGc_cj00Y2M", description: "Lorem ipsum dolor sit amet"},

	{id: 3, movieName: "Harry Potter and The Deathly Hallows", banner: "https://imgs.search.brave.com/k4sujfN1DUJBrxctv7kqBXHcOycVtUY3NEXZcDLD0zc/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9pbWcx/Lmxvb3Blci5jb20v/aW1nL2dhbGxlcnkv/aGFycnktcG90dGVy/LWNoYXJhY3Rlci1l/bmRpbmdzLXJhbmtl/ZC1mcm9tLXdvcnN0/LXRvLWJlc3QvbC1p/bnRyby0xNjA1NzQy/MjU4LmpwZw", description: "Lorem ipsum dolor sit amet"},

	{id: 4, movieName: "Jobs", banner: "https://imgs.search.brave.com/jOmzrTOUow5Jtj8QswUZVQJl_eF929mtCTjxuEA7sUQ/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pZG93bmxvYWRi/bG9nLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wNy9z/dGV2ZWpvYnMuanBn", description: "Lorem ipsum dolor sit amet"},
];


export default function MovieList() {
	return (    
		<ListContainer>
			<div className="listHeader">
				<h3>Trending</h3>
				<Link to="/trending">See more</Link>
			</div>

			<Container>
				{listMovies.map(movie => (
					<Movie 
						banner={movie.banner}
						name={movie.movieName}
						key={Math.random()}
						description={movie.description}
					/>
				))}
			</Container>
		</ListContainer>
	);
}