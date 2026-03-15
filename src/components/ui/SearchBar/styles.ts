import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

type IStyleParams = {
	themeType: 'light' | 'dark';
	input: string;
	isSelected: boolean;
};

export const useStyles = makeStyles<IStyleParams>()((theme: Theme, { themeType, input, isSelected }) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
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
		borderRadius: theme.spacing(1.2),
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
		borderRadius: theme.spacing(1.2),
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		alignSelf: 'stretch',
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
}));
