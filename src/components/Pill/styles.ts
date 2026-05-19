import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	region?: string | null;
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { region }) => ({ 
	root: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: region ? theme.palette.secondary.main : theme.palette.primary.main,
		borderRadius: theme.spacing(1.5),
		padding: theme.spacing(0.5, 1.5),
		border: '2px solid',
		
		...region && {
			gap: theme.spacing(1),
		},
	},
	regionIcon: {
		width: 32,
		height: 24,
	},
}));