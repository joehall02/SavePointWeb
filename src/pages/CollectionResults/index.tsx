import { Pagination } from '../../components/Pagination';
import { Search } from '../../components/Search';
import { GameDetail } from '../../enums/games';
import { useGameResults } from '../../hooks/useGameResults';
import { useStyles } from './styles';

export const CollectionResults = () => {
	const { classes } = useStyles();
	const { results, isLoading, searchParams, handleSearch } = useGameResults(GameDetail.Collection);

	return (
		<div className={classes.root}>
			<Search
				results={results}
				isLoading={isLoading}
				searchTerm={searchParams.search || ''}
				handleSearch={handleSearch}
			/>

			{results ? (
				<Pagination
					pages={results.pages}
					page={searchParams.pagination?.page ?? 1}
					handleSearch={handleSearch}
				/>
			) : null}
		</div>
	);
};
