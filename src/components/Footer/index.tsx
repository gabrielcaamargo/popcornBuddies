import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import { Container, MyLinks } from "./styles";

export default function Footer() {
	return (
		<Container>
			<MyLinks>
				<a href="https://instagram.com/gabcamargo" target="_blank" rel="noreferrer">
					<InstagramLogo size={32} />
				</a>

				<a href="https://github.com/gabrielcaamargo" target="_blank" rel="noreferrer">
					<GithubLogo size={32} />
				</a>

				<a href="https://linkedin.com/in/gabrielcaamargo" target="_blank" rel="noreferrer">
					<LinkedinLogo size={32} />
				</a>
			</MyLinks>
      
			<p>Created with 💜 by <strong>Gabriel Camargo</strong></p>
		</Container>
	);
}