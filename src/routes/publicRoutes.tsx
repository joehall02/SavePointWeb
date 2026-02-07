import Collection from "../pages/Collection";
import GameDetails from "../pages/GameDetails";
import Home from "../pages/Home";
import Platforms from "../pages/Platforms";
import Search from "../pages/Search";
import type { RouterType } from "../types/router.types";

const publicRoutes: RouterType[] = [
	{
		path: "/",
		title: "Home",
		element: <Home />,
	},
	{
		path: "/search",
		title: "Search",
		element: <Search />,
	},
	{
		path: "/collection",
		title: "Collection",
		element: <Collection />,
	},
	{
		path: "/platforms",
		title: "Platforms",
		element: <Platforms />,
	},
	{
		path: "/game",
		title: "Game",
		element: <GameDetails />,
	},
];

export default publicRoutes;
