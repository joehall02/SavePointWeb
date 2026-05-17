import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme: Theme) => ({
	loading: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		marginTop: theme.spacing(2),
	},
}));