import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { DIALOG_MAP, Dialogs } from '../../enums/dialogs';
import { fetchDialogMeta } from '../../helpers/fetchDialogMeta';
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

	const handleClose = () => {
		setDialog(Dialogs.None);
	};
	
	const { title, description } = fetchDialogMeta(dialog);

	return (
		<Dialog 
			className={classes.root}
			open={dialog !== Dialogs.None}
			disableScrollLock={true}
			fullWidth={true}
			maxWidth='md'
			onClose={handleClose}
			slotProps={{
				paper: { className: classes.dialog },
			}}
		>	
			<Box className={classes.dialogHeader}>
				<DialogTitle>{title}</DialogTitle>
				<IconButton className={classes.closeButton} onClick={handleClose}>
					<CloseIcon />
				</IconButton>
			</Box>
			<DialogContent>
				<DialogContentText>{description}</DialogContentText>
				<Box
					className={classes.formContainer}
				>
					{renderedDialog}
				</Box>
			</DialogContent>
		</Dialog>
	);
};

DialogResolver.displayName = 'DialogResolver';