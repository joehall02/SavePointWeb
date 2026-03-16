import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.spacing(3),
		marginBottom: theme.spacing(40),
	},
	searchBarContainer: {
		position: 'relative',
		width: '100%',

		[theme.breakpoints.up('md')]: {
			width: '75%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '50%',
		},
	},
	logo: {
		width: '35%',
		[theme.breakpoints.up('md')]: {
			width: '15%',
		},
		height: 'auto',
		
	},
}));