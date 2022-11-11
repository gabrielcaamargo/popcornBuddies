import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { Button } from "../common/Button";
import Content from "../Content";
import { Container, Input } from "./styles";

export default function UserAreaContent() {
	const {userName, setUserName, isUserLogged, setIsUserLogged} = useContext(UserContext);

	function handleSetUserData(event, setterFunction) {
		setterFunction(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		setIsUserLogged(true);
	}


	return (
		<Content bannerTitle="Log In" isLoginPage>
			{isUserLogged && (
				<Container>
					<h1>Welcome, {userName}</h1>

					<Link to="/" style={{width: "50%"}}>
						<Button>Back to home</Button>
					</Link>
				</Container>
			)}

			{!isUserLogged && (
				<Container onSubmit={handleSubmit}>
					<Input placeholder="Username" onChange={(event) => handleSetUserData(event, setUserName)}/>
					<Button disabled={userName.length < 1}>Log in</Button>
				</Container>
			)}
		</Content>
	);
} 