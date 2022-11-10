import { MovieContainer } from "./styles";

interface MovieProps {
  name: string;
  description: string | undefined;
  banner: string;
}

export default function Movie({name, banner, description}: MovieProps) {
	return (
		<MovieContainer onClick={() => console.log(name, banner, description)}>
			<img src={banner} alt={name} />
			<div className="movieInfo">
				<p><strong>{name}</strong></p>
				<small>{description}</small>
			</div>
		</MovieContainer>
	);
}