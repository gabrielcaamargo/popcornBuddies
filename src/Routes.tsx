import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import MyList from "./pages/MyList";
import NotFound from "./pages/NotFound";
import UserArea from "./pages/UserArea";
import Dramas from "./pages/Dramas";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/trending" element={<Trending />}/>
			<Route path="/genres" element={<Genres />}/>
			<Route path="/genres/drama" element={<Dramas />}/>
			<Route path="/my-list" element={<MyList />}/>
			<Route path="/user" element={<UserArea />}/>
			<Route path="/*" element={<NotFound />}/>
		</Routes>
	);
}