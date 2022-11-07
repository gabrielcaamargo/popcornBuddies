import MovieList from "../MovieList";
import { Banner, Main, MovieWrapper } from "./styles";

export default function MainContent() {
	return (
		<Main>
			<Banner />

			<MovieWrapper>
				<MovieList title="Trending" seeMoreUrl="/trending" />
				<MovieList title="Most Watched" seeMoreUrl="/most-watched" />
				<MovieList title="Kids are in the room" seeMoreUrl="/kids" />
			</MovieWrapper>
		</Main>
	);
}