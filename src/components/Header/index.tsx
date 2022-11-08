import { User } from "phosphor-react";
import { Link } from "react-router-dom";
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
						<li>
							<Link to="/trending">
								Trending
							</Link>
						</li>
						<li>
							<Link to="/most-watched">
								Most Watched
							</Link>	
						</li>
						<li>
							<Link to="/available-now">
								Available now
							</Link>	
						</li>  
					</ul>  
				</nav>  
				<Link to="/user-area">
					<User size={24} />
				</Link>
			</div>  
		</Container>
	);
}
