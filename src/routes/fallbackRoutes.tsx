import NotFound from "../pages/NotFound";
import type { RouterType } from "../types/router.types";

const fallbackRoutes: RouterType[] = [
	{
		path: "*",
		title: "Not Found",
		element: <NotFound />,
	},
];

export default fallbackRoutes;
