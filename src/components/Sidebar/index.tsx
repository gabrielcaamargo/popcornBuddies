import { Title } from "../common/Title";
import { Aside, Container, UserLinks } from "./styles";

import { GearSix, LightbulbFilament, PaperPlaneTilt, User } from "phosphor-react";

export default function Sidebar() {
	return (
		<Aside>
			<Title>popcorn<span>Buddies</span></Title>

			<Container>
				<UserLinks>
					<li>My list</li>
					<li>Trending</li>
					<li>Most watched</li>
					<li>Today's recommendation</li>
				</UserLinks>

				<span className="divider"></span>

				<UserLinks>
					<li>
						<GearSix size={32} weight="thin" />
						Settings
					</li>

					<li>
						<LightbulbFilament size={32} weight="thin" />
						Support me
					</li>

					<li>
						<PaperPlaneTilt size={32} weight="thin" />
						Contact me
					</li>

					<li>
						<User size={32} weight="thin" />
						Log in
					</li>
				</UserLinks>		
			</Container>
		</Aside>
	);
}