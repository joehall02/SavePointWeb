import { Pagination } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../../api/services/GameService';
import { Search } from '../../components/Search';
import { fetchPagination } from '../../helpers/fetchPagination';
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

	const handleSearch = useCallback((key: string, input: string) => {
		if (key === 'search' || key === 'platform') {
			// Remove query param if it's empty
			if (!input) {
				setQueryParams(prev => (
					((next => (next.delete(key), next))(new URLSearchParams(prev)))
				));
	
				return;
			}

			// If search is updated, clear all query params except search
			// If platform is updated, clear all query params except platform & search
			setQueryParams(prev => 
				((next => (
					next.set(key, input),
					next.forEach((_value, paramKey) => 
						key === 'platform' 
							? ((paramKey !== 'search' && paramKey !=='platform') && next.delete(paramKey))
							: (paramKey !== 'search' && next.delete(paramKey)),  
					), next))(new URLSearchParams(prev))),
			);
			return;
		}

		// Update queryParams with updated value if input is not empty.
		// If input is empty, remove the key from queryParams.
		setQueryParams(prev => 
			input 
				? { ...Object.fromEntries(prev), [key]: input } 
				// Immediately Invoked Function Expression (IIFE) instantly invokes
				// the function using 'new URLSearchParams(prev)' as the argument.
				// So here we define the function to delete the key, returning the new URLSearchParams object 'next'.
				// Then we invoke it immediately with the previous queryParams as the argument.
				: ((next => (next.delete(key), next))(new URLSearchParams(prev))));
	}, [setQueryParams]);

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
