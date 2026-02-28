import { useContext } from "react";

import { ThemeModeContext } from "../context/ThemeModeContext";
import type { ThemeModeContextValue } from "../types/themeMode.types";

export const useThemeMode = (): ThemeModeContextValue => {
	const context = useContext(ThemeModeContext)

	if (!context) {
		throw new Error('Must be used within a ThemeModeProvider')
	}

	return context
}