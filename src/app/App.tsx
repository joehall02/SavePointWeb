import { Outlet } from "react-router-dom";
import Nav from "../components/ui/Nav";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ThemeModeProvider from "./ThemeModeProvider";


function App() {
	return (
		<ThemeModeProvider>
			<Nav />
			<Outlet />
		</ThemeModeProvider>
	);
}

export default App;
