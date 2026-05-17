import Collection from '../pages/Collection';
import { ExternalGameDetails } from '../pages/ExternalGameDetails';
import { ExternalResults } from '../pages/ExternalResults';
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
		element: <ExternalGameDetails />,
	},
];

export default publicRoutes;
