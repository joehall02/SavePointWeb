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
		marginBottom: theme.spacing(10),
	},
	searchBarContainer: {
		width: '100%',

		[theme.breakpoints.up('md')]: {
			width: '75%',
		},
		[theme.breakpoints.up('lg')]: {
			width: '50%',
		},
	},
	logo: {
		width: '10%',
		height: 'auto',
		
	},
}));