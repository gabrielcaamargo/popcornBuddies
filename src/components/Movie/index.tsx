import { MovieContainer } from "./styles";

interface MovieProps {
  name: string;
  description: string | undefined;
  banner: string;
}

export default function Movie({name, banner, description}: MovieProps) {
	return (
		<MovieContainer>
			<div className="imgArea" style={{backgroundImage: `url(${banner})`}}>
			</div>
			<div className="movieInfo">
				<p><strong>{name}</strong></p>
				<small>{description}</small>
			</div>
		</MovieContainer>
	);
}