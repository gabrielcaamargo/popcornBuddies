import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Trending from "./pages/Trending";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/trending" element={<Trending />}/>
		</Routes>
	);
}