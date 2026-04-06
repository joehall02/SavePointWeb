import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	topBar: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column-reverse',
			justifyContent: 'center',
			gap: theme.spacing(2),
		},
	},
	searchBar: {
		display: 'flex',
		alignSelf: 'center',
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			width: '35%',
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',
		},
		height: 40,
	},
	platformFilter: {
		display: 'flex',
		flex: 1,
	},
}));