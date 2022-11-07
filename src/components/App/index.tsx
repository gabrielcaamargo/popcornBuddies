import { BrowserRouter } from "react-router-dom";
import Router from "../../Routes";

import GlobalStyles from "../../assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

import globalTheme from "../../assets/styles/themes/globalTheme";

export default function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={globalTheme}>
				<GlobalStyles />
				<Router />
			</ThemeProvider>
		</BrowserRouter>
	);
}