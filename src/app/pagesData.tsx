import type { RouterType } from "../types/router.types";
import Collection from "../pages/Collection";
import GameDetails from "../pages/GameDetails";
import Home from "../pages/Home";
import Platforms from "../pages/Platforms";
import Search from "../pages/Search";

const pagesData: RouterType[] = [
  {
    path: "/",
    title: "home",
    element: <Home />,
  },
  {
    path: "/search",
    title: "search",
    element: <Search />,
  },
  {
    path: "/collection",
    title: "collection",
    element: <Collection />,
  },
  {
    path: "/platforms",
    title: "platforms",
    element: <Platforms />,
  },
  {
    path: "/game",
    title: "game",
    element: <GameDetails />,
  },
];

export default pagesData;
