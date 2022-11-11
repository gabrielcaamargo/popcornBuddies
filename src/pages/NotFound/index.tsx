import { Link } from "react-router-dom";
import { Container, Button } from "./styles";

export default function NotFound() {
	return (
		<Container>
			<h1>Oopss, page not found</h1>
			<Link to="/">
				<Button>Back to home</Button>
			</Link>
		</Container>
	);
}