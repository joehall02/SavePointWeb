import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		padding: theme.spacing(2.5, 0),
	},
	deleteButtons: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: theme.spacing(3),
	},
}));