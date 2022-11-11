import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { Container } from "./styles";

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