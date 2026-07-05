import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	mobileUi?: boolean;
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { mobileUi }) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	sectionOne: {
		display: 'flex',
		flexDirection: mobileUi ? 'column' : 'row',
		gap: theme.spacing(3),
		marginBottom: theme.spacing(1.5),
	},
	sectionOneLeft: {
		...(!mobileUi && {
			display: 'flex',
			width: '100%',
		}),
	},
	sectionOneRight: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		borderRadius: theme.spacing(0.5),

		'& > *:not(:last-child)': {
			borderBottom: `2px solid ${theme.palette.divider}`,
			paddingBottom: theme.spacing(2.5),
			marginBottom: theme.spacing(2),
		},
	},
	dialogButtons: {
		marginTop: 'auto',
	},
	text: {
		marginBottom: theme.spacing(1),
	},
	title: {
		marginBottom: theme.spacing(5),
	},
	sectionTwo: {
		display: 'flex',
		flexDirection: mobileUi ? 'column' : 'row',
		alignItems: mobileUi ? 'center' : 'start',
		marginTop: theme.spacing(5),
		gap: theme.spacing(3),
		borderTop: `2px solid ${theme.palette.divider}`,
		padding: theme.spacing(4.5, 0),

		...!mobileUi && {
			padding: theme.spacing(6, 2.5),
		},
	},
	mediaContainer: {
		flex: '0 0 100%',
		width: '100%',
		...mobileUi && {
			width: '95%',
		},
	},
	mediaContainerSmall: {
		...!mobileUi && {
			flex: '0 0 50%',
		},
	},
	storyline: {
		alignSelf: 'start',
		width: '100%',
	},
}));