import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()(() => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
	},
	sectionOne: {
		display: 'flex',
		flexDirection: 'row',
		height: '70dvh',
	},
	sectionOneLeft: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	coverContainer: {
		display: 'flex',
		alignItems: 'center',
		// justifyContent: 'center',
		width: 600,
	},
	cover: {
		// objectFit: 'cover',
		width: '100%',
	},
	sectionOneRight: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	info: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		width: '100%',
	},
	imageCarousel: {

	},
}));