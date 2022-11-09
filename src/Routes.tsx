import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/trending" element={<Trending />}/>
			<Route path="/genres" element={<Genres />}/>
		</Routes>
	);
}