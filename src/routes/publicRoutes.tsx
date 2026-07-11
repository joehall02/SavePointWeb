import { CollectionGameDetails } from '../pages/CollectionGameDetails';
import { CollectionResults } from '../pages/CollectionResults';
import { ExternalGameDetails } from '../pages/ExternalGameDetails';
import { ExternalResults } from '../pages/ExternalResults';
import { Home } from '../pages/Home';
import { Platforms } from '../pages/Platforms';
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
		element: <CollectionResults />,
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
	{
		path: '/collection-game',
		title: 'Collection Game',
		element: <CollectionGameDetails />,
	},
];

export default publicRoutes;
