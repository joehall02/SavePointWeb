import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		position: 'static',
	},
	navContent: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	navLeftContent: {
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(1),
	},
	navLinks: {
		display: 'flex',
		flexDirection: 'row',
		
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center',
			height: '30vh',
			justifyContent: 'space-around',
		},
	},
	navButton: {
		textAlign: 'center',
		width: 'auto',
		
		[theme.breakpoints.down('md')]: {
			maxHeight: 50,
			width: '100%',
		},
	},
	mobileDrawer: {
		display: 'flex',
		flexDirection: 'column',

		'& .MuiDrawer-paper': {
			width: '100vw',
			maxWidth: '100vw',
		},
	},
	mobileCloseContainer: {
		display: 'flex',
		justifyContent: 'flex-end',
		width: '100%',
		padding: theme.spacing(2),
	},
}));
