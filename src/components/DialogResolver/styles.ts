import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		zIndex: theme.zIndex.modal,
	},
	dialog: {
		height: 'auto',
		border: `3px solid ${theme.palette.primary.main}`,
		borderRadius: theme.spacing(1.5),
		minHeight: 600,
	},
	formContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	dialogHeader: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	closeButton: {
		margin: theme.spacing(2),
	},
}));