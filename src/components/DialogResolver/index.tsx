import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { DIALOG_MAP, Dialogs } from '../../enums/dialogs';
import { useDialogContext } from '../../hooks/useDialogContext';
import { useStyles } from './styles';

export const DialogResolver = () => {
	const { pathname } = useLocation();
	
	const { dialog, setDialog } = useDialogContext();
	
	const { classes } = useStyles();

	// Remove dialog on page change
	useEffect(() => {
		setDialog(Dialogs.None);
	}, [pathname, setDialog]);

	const renderedDialog = DIALOG_MAP[dialog];

	return (
		<Box className={classes.root}>
			{renderedDialog}
		</Box>
	);
};

DialogResolver.displayName = 'DialogResolver';