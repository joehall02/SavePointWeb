import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
	root: {
		display: 'flex',
		minHeight: '100dvh',
		flexDirection: 'column',
	},
	content: {
		flex: 1,
		display: 'flex',
		flexDirection: 'column',
	},
}));