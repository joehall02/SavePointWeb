import { Route, Routes } from "react-router-dom";
import type { RouterType } from "../types/router.types";
import App from "../app/App";
import publicRoutes from "./publicRoutes";
import fallbackRoutes from "./fallbackRoutes";

export function AppRoutes() {
	const routeBuilder = (routes: RouterType[]) => {
		return routes.map((route) => (
			<Route key={route.title} path={route.path} element={route.element} />
		));
	};

	const publicRoutesObjects = routeBuilder(publicRoutes);
	const fallbackRoutesObjects = routeBuilder(fallbackRoutes);

	const routes = [
		...publicRoutesObjects,
		...fallbackRoutesObjects
	];

	return (
		<Routes>
			<Route element={<App />}>
				{routes}
			</Route>
		</Routes>
	);
}
