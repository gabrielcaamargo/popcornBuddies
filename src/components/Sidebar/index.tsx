import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Title } from "../common/Title";
import { Aside, Container, UserLinks } from "./styles";

import { GearSix, LightbulbFilament, PaperPlaneTilt, User } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const { isUserLogged, userName } = useContext(UserContext);

	return (
		<Aside>
			<Title>popcorn<span>Buddies</span></Title>

			<Container>
				<UserLinks>
					<li><Link to="/my-list">My list</Link></li>
					<li><Link to="/trending">Trending</Link></li>
					<li><Link to="/genres">Genres</Link></li>
					<li><Link to="/recommendation">Today's recommendation</Link></li>
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
			</Container>
		</Aside>
	);
}