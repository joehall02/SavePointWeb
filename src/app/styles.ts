import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		minHeight: '100dvh',
		flexDirection: 'column',
	},
	content: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
		marginBottom: theme.spacing(4),
	},
}));