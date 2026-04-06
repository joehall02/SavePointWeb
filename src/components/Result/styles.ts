import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		gap: theme.spacing(2),
		padding: theme.spacing(1, 1.5),
		height: 80,
		borderRadius: theme.spacing(1.5),
		'&:hover': {
			background: theme.palette.action.hover,
			cursor: 'pointer',
		},
	},
	cover: {
		width: 48,
		height: 'auto',
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
	},
}));