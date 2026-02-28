import { Switch } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { useThemeMode } from '../../hooks/useThemeMode';

export const ThemeModeToggle = () => {
	const themeModeContext = useThemeMode();

	const [themeMode, setThemeMode] = useState<string>(themeModeContext.mode);
	
	const toggleThemeMode = useCallback(() => {
		themeModeContext.toggleMode();
	}, [themeModeContext]);
	
	useEffect(() => {
		setThemeMode(themeModeContext.mode);
	}, [themeModeContext]);

	return (
		<Switch checked={themeMode === 'dark'} onChange={toggleThemeMode} />
	);
};