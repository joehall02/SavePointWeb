import { Details } from '../../components/Details';
import { GameDetail } from '../../enums/games';
import { useGameDetails } from '../../hooks/useGameDetails';
import { useStyles } from './styles';

export const CollectionGameDetails = () => {
	const { classes } = useStyles();
	const { results, isLoading } = useGameDetails(GameDetail.Collection);

	return (
		<div className={classes.root}>
			<Details 
				results={results}
				isLoading={isLoading}
			/>
		</div>
	);
};