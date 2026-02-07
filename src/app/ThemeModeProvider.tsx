import { CssBaseline,ThemeProvider } from "@mui/material";
import { createContext, type ReactNode,useCallback, useEffect, useMemo, useState } from "react";

import { darkTheme,lightTheme } from "./themes";

type ThemeMode = "light" | "dark";
type ThemeModeContextValue = { mode: ThemeMode; toggleMode: () => void };

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

function getInitialMode(): ThemeMode {
	// Fetch mode from local storage if available
	const savedMode = localStorage.getItem("themeMode") as ThemeMode | null;

	if (savedMode === "light" || savedMode === "dark") return savedMode;

	// Default to light mode
	return "light"
}

function ThemeModeProvider({ children }: { children: ReactNode }) {
	// Use state expects generic type of ThemeMode
	const [mode, setMode] = useState<ThemeMode>(() => getInitialMode());

	// Set 'themeMode' in local storage when mode changes
	useEffect(() => {
		localStorage.setItem("themeMode", mode);
	}, [mode]);

	// useCallback stores the function so it isn't re-created between renders
	const toggleMode = useCallback(() => {
		setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
	}, []);

	// useMemo caches the result of the function between renders
	const theme = useMemo(() => (mode === "light" ? lightTheme : darkTheme), [mode]);

	return (
	// .Provider allows children to access the context value
		<ThemeModeContext.Provider value={{ mode, toggleMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeModeContext.Provider>
	);
}

export default ThemeModeProvider;
