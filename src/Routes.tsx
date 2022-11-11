import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import MyList from "./pages/MyList";
import NotFound from "./pages/NotFound";
import UserArea from "./pages/UserArea";
import Dramas from "./pages/Dramas";
import Action from "./pages/Action";
import Horror from "./pages/Horror";

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/trending" element={<Trending />}/>
			<Route path="/genres" element={<Genres />}/>
			<Route path="/genres/drama" element={<Dramas />}/>
			<Route path="/genres/action" element={<Action />}/>
			<Route path="/genres/horror" element={<Horror />}/>
			<Route path="/my-list" element={<MyList />}/>
			<Route path="/user" element={<UserArea />}/>
			<Route path="/*" element={<NotFound />}/>
		</Routes>
	);
}