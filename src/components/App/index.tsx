import { BrowserRouter } from "react-router-dom";
import Router from "../../Routes";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import globalTheme from "../../assets/styles/themes/globalTheme";
import MovieContextProvider from "../../contexts/MovieContext";
import UserContextProvider from "../../contexts/UserContext";
import MenuContextProvider from "../../contexts/MenuContext";

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={globalTheme}>
				<GlobalStyles />
				<UserContextProvider>
					<MovieContextProvider>
						<MenuContextProvider>
							<Router />
						</MenuContextProvider>
					</MovieContextProvider>
				</UserContextProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
}