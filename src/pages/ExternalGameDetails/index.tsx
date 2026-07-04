import { Details } from '../../components/Details';
import { useGameDetails } from '../../hooks/useGameDetails';
import { useStyles } from './styles';

export const ExternalGameDetails = () => {
	const { classes } = useStyles();
	const { results, isLoading } = useGameDetails('external');

	return (
		<div className={classes.root}>
			<Details 
				results={results}
				isLoading={isLoading}
			/>
		</div>
	);
};