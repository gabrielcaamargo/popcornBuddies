import { useContext, useEffect } from "react";
import ReactDOM  from "react-dom";
import { MenuContext } from "../../contexts/MenuContext";
import { PaperPlaneTilt, User, X } from "phosphor-react";
import { Title } from "../common/Title";
import { MenuContainer, UserLinks } from "./styles";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function NavMenu() {  
	const portalMenu = document.getElementById("menu-root") as HTMLElement;
	
	const {setIsMenuOpen} = useContext(MenuContext);
	const {isUserLogged, userName} = useContext(UserContext);

	function handleCloseMenu() {
		setIsMenuOpen(false);
	}

	useEffect(() => {
		return () => {
			setIsMenuOpen(false);
		};
	}, []);

	return ReactDOM.createPortal(
		<MenuContainer>
			<header>
				<Title>popcorn
					<span>Buddies</span>
				</Title>

				<button onClick={handleCloseMenu}>
					<X size={28} color="#FFF"/>
				</button>
			</header>
			<UserLinks>
				<li><Link to="/my-list">My list</Link></li>
				<li><Link to="/trending">Trending</Link></li>
				<li><Link to="/genres">Genres</Link></li>
			</UserLinks>

			<span className="divider"></span>

			<UserLinks>
				<li>
					<a href="https://instagram.com/gabcamargo" target="_blank" rel="noreferrer">
						<PaperPlaneTilt size={32} weight="thin" />
							Contact me
					</a>
				</li>

				<li>
					<Link to="/user">
						<User size={32} weight="thin" />
						{isUserLogged ? userName : "Log in"}
					</Link>
				</li>
			</UserLinks>	
		</MenuContainer>,
		portalMenu
	);
}