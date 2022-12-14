import { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import { User } from "phosphor-react";
import { Link } from "react-router-dom";
import { Title } from "../common/Title";
import { Container } from "./styles";

import Menu from "../../assets/icons/menu-icon.png";

export default function Header() {
	const {setIsMenuOpen} = useContext(MenuContext);

	function handleOpenMenu() {
		setIsMenuOpen(true);
	}

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
							<Link to="/my-list">
								My List
							</Link>	
						</li>  
					</ul>  
				</nav>  
				<Link to="/user">
					<User size={24} />
				</Link>
			</div>  

			<button className="menu-button" onClick={handleOpenMenu}>
				<img src={Menu} alt="Menu icon" />
			</button>
		</Container>
	);
}
