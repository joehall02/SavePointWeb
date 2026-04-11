import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import type { LayoutType } from '../../types/layout.types';

interface IStyleProps {
	layoutType?: LayoutType
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { layoutType }) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
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
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: theme.spacing(2),
	},
	noResults: {
		textAlign: 'center',
		margin: theme.spacing(2, 0),
	},
	gameResults: {
		gap: layoutType === 'grid' ? theme.spacing(2) : theme.spacing(2),
		[theme.breakpoints.up('lg')]: {
			gridTemplateColumns: layoutType === 'grid' ? 'repeat(4, minmax(0, 1fr))' : 'minmax(0, 1fr)',
		},
		[theme.breakpoints.between('sm', 'lg')]: {
			gridTemplateColumns: layoutType === 'grid' ? 'repeat(2, minmax(0, 1fr))' : 'minmax(0, 1fr)',
		},
		[theme.breakpoints.up('sm')]: {
			display: 'grid',
		},
	},
}));