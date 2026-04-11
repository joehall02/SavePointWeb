import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import type { LayoutType } from '../../types/layout.types';

interface IStyleProps {
	layoutType?: LayoutType
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { layoutType }) => ({
	root: {
		display: 'flex',
		flexDirection: layoutType === 'grid' ? 'column' : 'row',
		alignItems: 'center',
		width: '100%',
		gap: layoutType === 'grid' ? theme.spacing(0) : theme.spacing(2),
		height: layoutType === 'grid' ? '100%' : 80,
		borderRadius: layoutType === 'grid' ? theme.spacing(0.5) : theme.spacing(1.5),
		background: layoutType === 'grid' ? theme.palette.grey[800] : 'none',
		
		[theme.breakpoints.down('sm')]: {
			margin: layoutType === 'grid' ? theme.spacing(2, 0) : theme.spacing(0),
		},

		'&:hover': {
			background: theme.palette.action.hover,
			cursor: 'pointer',
		},
	},
	cover: {
		width: layoutType === 'grid' ? '100%' : 64,
		height: layoutType === 'grid' ? 350 : 64,
		objectFit: layoutType === 'grid' ? 'cover' : 'unset',
		overflow: 'hidden',
	},
	name: {
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		width: '100%',
		padding: layoutType === 'grid' ? theme.spacing(2) : theme.spacing(0),
		textAlign: layoutType === 'grid' ? 'center' : 'start',
	},
}));