import { Button, Modal, Overlay } from "./styles";
import ReactDOM  from "react-dom";
import { Star, X } from "phosphor-react";

interface MovieModalProps {
	name: string;
	banner: string;
	rate: string;
	description: string;
}

export default function MovieModal({name, banner, rate, description }: MovieModalProps) {
	const portalRoot = document.getElementById("modal-root") as HTMLElement;
  
	return ReactDOM.createPortal(
		<Overlay>
			<Modal>
				<div className="modalHeader">
					<h1>{name}</h1>
					<button>
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

								<Button>Add to my list</Button>
							</div>
						</div>
					</div>
				</div>
				
			</Modal>
		</Overlay>,
		portalRoot
	);
}

