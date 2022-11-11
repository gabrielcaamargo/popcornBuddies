import { User } from "phosphor-react";
import { Link } from "react-router-dom";
import { Title } from "../common/Title";
import { Container } from "./styles";

export default function Header() {
	return (
		<Container>
			<Link to="/">
				<Title>popcorn
					<span>Buddies</span>
				</Title>
			</Link>

			<div>
				<nav>
					<ul>
						<li>
							<Link to="/trending">
								Trending
							</Link>
						</li>
						<li>
							<Link to="/genres">
								Genres
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
