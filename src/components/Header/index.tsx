import { Container } from "./styles";

export default function Header() {
	return (
		<Container>
			<h1>popcorn
				<span>Buddies</span>
			</h1>

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
