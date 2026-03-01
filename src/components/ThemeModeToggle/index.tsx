import { Switch, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

import { useThemeMode } from '../../hooks/useThemeMode';
import { useStyles } from './styles';

export const ThemeModeToggle = () => {
	const themeModeContext = useThemeMode();

	const [themeMode, setThemeMode] = useState<string>(themeModeContext.mode);

	const { classes } = useStyles();

	const toggleThemeMode = useCallback(() => {
		themeModeContext.toggleMode();
	}, [themeModeContext]);
	
	useEffect(() => {
		setThemeMode(themeModeContext.mode);
	}, [themeModeContext]);

	return (
		<div className={classes.root}>
			<Typography variant='body1' className={classes.themeText}>Theme: {themeMode}</Typography>

			<Switch checked={themeMode === 'dark'} onChange={toggleThemeMode} />
		</div>
	);
};