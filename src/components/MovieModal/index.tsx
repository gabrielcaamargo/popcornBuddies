import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

import { Button, Modal, Overlay } from "./styles";
import ReactDOM  from "react-dom";
import { Star, X } from "phosphor-react";

interface MovieModalProps {
	name: string;
	banner: string;
	rate: number;
	description: string;
	id: number
}

export default function MovieModal({name, banner, rate, description, id}: MovieModalProps) {
	const portalRoot = document.getElementById("modal-root") as HTMLElement;
  
	const {setIsModalOpen, setMovieList, movieList, movieId} = useContext(MovieContext);

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	function handleAddFav() {
		setMovieList((prevState) => [
			...prevState,
			{name, description, rate, banner, id: movieId}
		]);
	} 


	function handleRemoveFav(idMovie: number) {
		setMovieList((prevState) => (
			prevState.filter(movie => movie.id !== idMovie)
		));
	}

	const isAdded = movieList.some(movie => movie.id === movieId);
	console.log(isAdded);
	return ReactDOM.createPortal(
		<Overlay>
			<Modal>
				<div className="modalHeader">
					<h1>{name}</h1>
					<button onClick={handleCloseModal}>
						<X size={32} color="#FFF"/>
					</button>
				</div>

				<div className="modalContent">
					<div className="moviePresentation">
						<img src={banner ? banner : "http://lorempixel.com.br/342/513"} />

					</div>
					<div className="movieInfo">
						<div className="movieDescription">
							<p className="description">{description}</p>

							<div className="movieActions">
								<div className="movieRate">
									<p><strong>Rate:</strong></p>
									<div className="rateInfo">
										<Star size={32} color="#FFF" />
										<p>{rate}</p>
									</div>
								</div>

								<Button 
									onClick={() => isAdded ? handleRemoveFav(id) : handleAddFav(id)} 
									isMovieAdded={isAdded ? true : false}
								>
									{isAdded ? "Remove from my list" : "Add to my list"}
								</Button>

							</div>
						</div>
					</div>
				</div>
				
			</Modal>
		</Overlay>,
		portalRoot
	);
}

