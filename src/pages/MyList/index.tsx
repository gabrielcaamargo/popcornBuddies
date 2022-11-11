import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import MyListContent from "../../components/MyListContent";
import PageWrapper from "../../components/PageWrapper";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";

export default function MyList() {
	const { isUserLogged } = useContext(UserContext);

	return (
		<PageWrapper>
			{!isUserLogged && (
				<Container>
					<h1>You must be logged to add movies to your list.</h1>

					<Link to="/user">
						<Button>Log in</Button>
					</Link>
				</Container>
			)}
			{isUserLogged && <MyListContent />}
		</PageWrapper>
	);
}