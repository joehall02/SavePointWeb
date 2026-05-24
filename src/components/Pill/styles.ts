import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	region?: string | null;
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { region }) => ({ 
	root: {
		display: 'flex',
		alignItems: 'center',
		width: 'fit-content',
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

export const usePillsContainerStyles = makeStyles()((theme: Theme) => ({
	pillsContainer: {
		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(1),
		marginBottom: theme.spacing(4),
	},
	pill: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: theme.spacing(1),

	},
}));