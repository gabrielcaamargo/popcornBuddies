import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { MovieContainer } from "./styles";

interface MovieProps {
  name: string;
  description: string | undefined;
  banner: string;
	rate: number;
	movieId: number;
}

export default function Movie({name, banner, description, rate, movieId}: MovieProps) {
	const { setIsModalOpen, setMovieBanner, setMovieDescription, setMovieName, setMovieRate, setMovieId } = useContext(MovieContext);
	
	function handleOpenModal() {
		setMovieBanner(banner);
		setMovieName(name);
		setMovieDescription(description);
		setMovieRate(rate);
		setMovieId(movieId);
		setIsModalOpen(true);
	}

	function handleCreateDotsToString(string: string | undefined = "") {
		if(string.length >= 75) {
			const slicedString = string?.slice(0, 95);
			const stringWithDots = `${slicedString}...`;
			return stringWithDots;
		} else {
			return;
		}
	}

	return (
		<MovieContainer onClick={handleOpenModal}>
			<img src={banner} alt={name} />
			<div className="movieInfo">
				<p><strong>{name}</strong></p>
				<small>{handleCreateDotsToString(description)}</small>
			</div>
		</MovieContainer>
	);
}