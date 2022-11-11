import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { Banner, Main, MovieWrapper, UserGreeting } from "./styles";

interface ContentProps {
  children: React.ReactNode,
	bannerTitle: string;
	isLoginPage: boolean;
}

export default function Content({children, bannerTitle, isLoginPage}: ContentProps) {
	const { isUserLogged, userName } = useContext(UserContext);
	
	return (
		<Main>
			<Banner>
				<h1>{bannerTitle}</h1>
			</Banner>
			{!isLoginPage && isUserLogged && <UserGreeting>Welcome, <span>{userName}</span></UserGreeting> }
			<MovieWrapper>
				{children}
			</MovieWrapper>
		</Main>
	);
}