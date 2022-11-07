import { Title } from "../common/Title";
import { Container } from "./styles";

export default function Header() {
	return (
		<Container>
			<Title>popcorn
				<span>Buddies</span>
			</Title>

			<div>
				<input type="text" placeholder="Find a movie" />
				<nav>
					<ul>
						<li>Trending</li>
						<li>Genres</li>
						<li>Most Watched</li>  
					</ul>  
				</nav>  
				<p>User</p>
			</div>  
		</Container>
	);
}
