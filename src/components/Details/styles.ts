import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	isMobile?: boolean
	coverImage?: string;
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
	},
	sectionOneLeft: {
		...(!isMobile && {
			display: 'flex',
			width: '100%',
		}),
	},
	sectionOneRight: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	info: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		justifyContent: 'center',
	},
	title: {
		marginBottom: theme.spacing(3),
	},
	sectionTwo: {
		display: 'flex',
		flexDirection: 'column',
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