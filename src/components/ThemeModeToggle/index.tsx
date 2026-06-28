import { Switch, Typography } from '@mui/material';
import { useCallback } from 'react';

import { useThemeMode } from '../../hooks/useThemeMode';
import { useStyles } from './styles';

export const ThemeModeToggle = () => {
	const { mode, toggleMode } = useThemeMode();

	const { classes } = useStyles();

	const toggleThemeMode = useCallback(() => {
		toggleMode();
	}, [toggleMode]);
	
	return (
		<div className={classes.root}>
			<Typography variant='body1' className={classes.themeText}>Theme: {mode}</Typography>

			<Switch checked={mode === 'dark'} onChange={toggleThemeMode} />
		</div>
	);
};