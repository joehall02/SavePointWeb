import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1,
		alignItems: 'center',
	},
	pagination: {
		margin: theme.spacing(6, 0),
	},
}));