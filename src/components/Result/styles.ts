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
		gap: theme.spacing(2),
		padding: theme.spacing(1, 1.5),
		height: layoutType === 'grid' ? '100%' : 80,
		borderRadius: theme.spacing(1.5),
		'&:hover': {
			background: theme.palette.action.hover,
			cursor: 'pointer',
		},
	},
	cover: {
		width: layoutType === 'grid' ? '100%' : 64,
		height: 'auto',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	},
}));