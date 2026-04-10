import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			width: '30%',
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
	},
	select: {
		borderRadius: theme.spacing(1),
	},
}));