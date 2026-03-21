import { useContext } from 'react';

import { ThemeModeContext } from '../context/ThemeModeContext';
import type { ThemeModeContextValue } from '../types/themeMode.types';

/**
 * Provides access to theme mode and theme toggle funcionality to components via ThemeModeContext.
 * Throws an error if outside of the ThemeModeProvider.
 */
export const useThemeMode = (): ThemeModeContextValue => {
	const context = useContext(ThemeModeContext);

	if (!context) {
		throw new Error('Must be used within a ThemeModeProvider');
	}

	return context;
};