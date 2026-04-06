import Collection from '../pages/Collection';
import { ExternalResults } from '../pages/ExternalResults';
import GameDetails from '../pages/GameDetails';
import { Home } from '../pages/Home';
import Platforms from '../pages/Platforms';
import type { RouterType } from '../types/router.types';

const publicRoutes: RouterType[] = [
	{
		path: '/',
		title: 'Home',
		element: <Home />,
	},
	{
		path: '/search',
		title: 'Search',
		element: <ExternalResults />,
	},
	{
		path: '/collection',
		title: 'Collection',
		element: <Collection />,
	},
	{
		path: '/platforms',
		title: 'Platforms',
		element: <Platforms />,
	},
	{
		path: '/game',
		title: 'Game',
		element: <GameDetails />,
	},
];

export default publicRoutes;
