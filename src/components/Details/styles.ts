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
		width: 600,
	},
	cover: {
		width: '100%',
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
	},
	summary: {

	},
	pillsContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		gap: theme.spacing(1),
	},
	imageCarousel: {

	},
}));