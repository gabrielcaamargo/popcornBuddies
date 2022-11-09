import { Title } from "../common/Title";
import { Aside, Container, UserLinks } from "./styles";

import { GearSix, LightbulbFilament, PaperPlaneTilt, User } from "phosphor-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
						<Link to="/settings">
							<GearSix size={32} weight="thin" />
							Settings
						</Link>
					</li>

					<li>
						<Link to="/support-me">
							<LightbulbFilament size={32} weight="thin" />
							Support me
						</Link>
					</li>

					<li>
						<Link to="/contact-me">
							<PaperPlaneTilt size={32} weight="thin" />
							Contact me
						</Link>
					</li>

					<li>
						<Link to="/login">
							<User size={32} weight="thin" />
							Log in
						</Link>
					</li>
				</UserLinks>		
			</Container>
		</Aside>
	);
}