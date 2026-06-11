import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	isMobile?: boolean
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { isMobile }) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	sectionOne: {
		display: 'flex',
		flexDirection: isMobile ? 'column' : 'row',
		gap: theme.spacing(3),
		marginBottom: theme.spacing(1.5),
	},
	sectionOneLeft: {
		...(!isMobile && {
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
		justifyContent: 'center',
		borderRadius: theme.spacing(0.5),

		'& > *:not(:last-child)': {
			borderBottom: `2px solid ${theme.palette.divider}`,
			paddingBottom: theme.spacing(2.5),
			marginBottom: theme.spacing(2),
		},
	},
	text: {
		marginBottom: theme.spacing(1),
	},
	title: {
		marginBottom: theme.spacing(5),
	},
	sectionTwo: {
		display: 'flex',
		flexDirection: isMobile ? 'column' : 'row',
		alignItems: isMobile ? 'center' : 'start',
		marginTop: theme.spacing(5),
		gap: theme.spacing(3),
		borderTop: `2px solid ${theme.palette.divider}`,
		padding: theme.spacing(4.5, 0),

		...!isMobile && {
			padding: theme.spacing(6, 2.5),
		},
	},
	mediaContainer: {
		...!isMobile && {
			flex: '0 0 50%',
		},
		width: '100%',
		...isMobile && {
			width: '95%',
		},
	},
	storyline: {
		alignSelf: 'start',
		width: '100%',
	},
}));

export const useCoverStyles = makeStyles<IStyleProps>()((theme: Theme, { isMobile }) => ({
	coverContainer: {
		display: 'flex',
		justifyContent: isMobile ? 'start' : 'center',
		width: '100%',
		...(isMobile && {
			transform: `translateY(${theme.spacing(-10)})`,
			marginBottom: theme.spacing(-10),
		}),
	},
	cover: {
		width: isMobile ? 'auto' : '100%',
		height: 'auto',
		maxHeight: 650,
		objectFit: 'contain',
		...(isMobile && {
			border: `3px solid ${theme.palette.primary.main}`,
			maxHeight: 200,
		}),
	},
}));