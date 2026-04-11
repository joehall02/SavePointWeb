import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	themeType: 'light' | 'dark';
	input: string;
	isSelected: boolean;
	isExpanded: boolean;
};

const BORDER_RADIUS = 1.2;

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { themeType, input, isSelected, isExpanded }) => ({
	root: {
		display: 'flex',
		position: 'absolute',
		left: 0,
		right: 0,
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		border: '2px solid',
		borderRadius: theme.spacing(1.5),
		borderColor: isSelected ? theme.palette.primary.main : theme.palette.grey[300],
	},
	searchWrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		width: '100%',
		height: 36,
		background: theme.palette.secondary.main,		
		borderRadius: theme.spacing(BORDER_RADIUS),
		...(isExpanded && {
			borderBottomLeftRadius: 0,
		}),
	},
	inputContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignContent: 'center',
		alignSelf: 'stretch',
		width: '100%',
		background: 'none',
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	},
	searchField: {
		resize: 'none',
		background: 'none',
		border: 'none',
		outline: 'none',
		overflow: 'hidden',
		width: '100%',
		height: '100%',
		alignSelf: 'stretch',
		fontSize: theme.typography.body1.fontSize,
		color:
		themeType === 'dark'
			? 'white'
			: 'black',
		'::placeholder': {
			color: theme.palette.text.secondary,
		},
		padding: theme.spacing(1, 0, 1, 2),
	},
	searchButton: {
		background: theme.palette.primary.main,
		borderRadius: theme.spacing(BORDER_RADIUS),
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		alignSelf: 'stretch',
		...(isExpanded && {
			borderBottomRightRadius: 0,
		}),
	},
	discardButton: {
		background: theme.palette.secondary.main,
		color: theme.palette.text.secondary,
		alignSelf: 'center',
		height: '80%',
		width: 'auto',
		visibility: input === '' ? 'hidden' : 'visible',
		marginRight: theme.spacing(1),
		'&:hover': {
			cursor: 'pointer',
		},
	},
	searchIcon: {
		color: themeType === 'dark' ? theme.palette.common.white : theme.palette.common.black,
	},
	expandedContainer: {
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		background: themeType === 'dark' ? theme.palette.grey[600] : theme.palette.grey[300],
		borderRadius: theme.spacing(BORDER_RADIUS),
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		
		// Override padding/margin on Result component so Search page results aren't effected
		'&& .MuiBox-root': {
			padding: theme.spacing(1),
			margin: theme.spacing(0),
		},
	},
	divider: {
		background: theme.palette.secondary.main,
	},
}));
