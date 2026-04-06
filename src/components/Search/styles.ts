import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	topSection: {
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
	middleSection: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: theme.spacing(2, 0),
	},
	resultsNumber: {
		alignSelf: 'center',
	},
	layoutToggle: {

	},
	gameResults: {
		// Override padding on Result component so SearchBar isn't effected
		'&& .MuiBox-root': {
			padding: theme.spacing(1, 0),
		},
	},
}));