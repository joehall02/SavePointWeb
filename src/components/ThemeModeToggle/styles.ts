import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: theme.spacing(0.5),
	},
	themeText: {
		opacity: 0.65,
		textTransform: 'capitalize',
	},
}));