import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Nav from "../components/ui/Nav";
import ThemeModeProvider from "./ThemeModeProvider";


function App() {
	return (
		<ThemeModeProvider>
			<Container maxWidth="xl">
				<Nav />
				<Outlet />
			</Container>
		</ThemeModeProvider>
	);
}

export default App;
