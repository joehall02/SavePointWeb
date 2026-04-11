import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../../api/services/GameService';
import { Search } from '../../components/Search';
import { fetchPagination } from '../../helpers/fetchPagination';
import { useSearchQueryParams } from '../../hooks/useSearchQueryParams';
import type { SearchGameResultsParams } from '../../types/game.types';
import { useStyles } from './styles';

export const ExternalResults = () => {
	const [queryParams, setQueryParams] = useSearchParams();
	const searchParams = (useMemo<SearchGameResultsParams>(() => {
		const search = queryParams.get('search') ?? undefined;
		const platform = queryParams.get('platform') ?? undefined;
		const pageParam = queryParams.get('page') ?? undefined;
		const limitParam = queryParams.get('limit') ?? '16';
		
		const pagination = fetchPagination(pageParam, limitParam);

		return {
			search,
			platform,
			pagination,
		};
	}, [queryParams]));

	const { classes } = useStyles();

	const {
		data: results,
		isLoading,
	} = useQuery({
		queryKey: ['gameResults', searchParams],
		queryFn: () => GameService.searchGameResults(searchParams),
	});

	const handleSearch = useSearchQueryParams(setQueryParams);

	return (
		<div className={classes.root}>
			<Search 
				results={results}
				isLoading={isLoading}
				searchTerm={searchParams.search || ''} 
				handleSearch={handleSearch} 
			/>
			
			{/* <Pagination /> */}
			{results ? (
				<div className={classes.pagination}>
					<Pagination 
						count={results?.pages}
						page={searchParams.pagination?.page ?? 1}
						onChange={(_event, value) => handleSearch('page', value.toString())}
						size='large'
						color='primary'
					/>
				</div>
			) : null}
		</div>
	);
};
