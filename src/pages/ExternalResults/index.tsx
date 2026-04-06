import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../../api/services/GameService';
import { Search } from '../../components/Search';
import { fetchPagination } from '../../helpers/fetchPagination';
import type { SearchGameResultsParams } from '../../types/game.types';

export const ExternalResults = () => {
	const [queryParams, setQueryParams] = useSearchParams();
	const searchParams = (useMemo<SearchGameResultsParams>(() => {
		const search = queryParams.get('search') ?? undefined;
		const platform = queryParams.get('platform') ?? undefined;
		const pageParam = queryParams.get('page') ?? undefined;
		const limitParam = queryParams.get('limit') ?? undefined;
		
		const pagination = fetchPagination(pageParam, limitParam);

		return {
			search,
			platform,
			pagination,
		};
	}, [queryParams]));

	const {
		data: results,
		isLoading,
	} = useQuery({
		queryKey: ['gameResults', searchParams],
		queryFn: () => GameService.searchGameResults(searchParams),
	});

	const handleSearch = useCallback((key: string, input: string) => {
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
		<>
			<Search results={results} isLoading={isLoading} handleSearch={handleSearch} />
			{/* <Pagination /> */}
		</>
	);
};
