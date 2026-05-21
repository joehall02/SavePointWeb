import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	sectionOne: {
		display: 'flex',
		flexDirection: 'row',
	},
	sectionOneLeft: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	coverContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	cover: {
		width: '100%',
		height: '100%',
		maxHeight: 700,
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
	pillsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		gap: theme.spacing(1),
		marginBottom: theme.spacing(4),
	},
	imageCarousel: {

	},
}));