import MovieList from "../MovieList";
import { Banner, Main, MovieWrapper } from "./styles";

export default function MainContent() {
	return (
		<Main>
			<Banner />

			<MovieWrapper>
				<MovieList />
			</MovieWrapper>
		</Main>
	);
}