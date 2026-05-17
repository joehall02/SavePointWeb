import { CircularProgress } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

interface ILoadingProps {
	isLoading: boolean;
}

export const Loading = ({ isLoading }: ILoadingProps) => {
	const { classes } = useStyles();
	
	return (
		<React.Fragment>
			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress aria-label='Loading…' />
				</div>
			) : null}
		</React.Fragment>
	);
};