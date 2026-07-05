import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../api/services/GameService';
import { GameDetail } from '../enums/games';
import { fetchPagination } from '../helpers/fetchPagination';
import type { GameDetailType, GameResults, SearchGameResultsParams, UseGameResultsResult } from '../types/game.types';
import { useSearchQueryParams } from './useSearchQueryParams';

/**
 * Fetches paginated game results from either the external IGDB API or the user's collection,
 * determined by `type`. Search, platform, and pagination state are synced with URL query params.
 *
 * @param type - Whether to query the external API or the user's collection.
 * @returns Results data, loading state, current search params, and a handler to update query params.
 */
export const useGameResults = (type: GameDetailType): UseGameResultsResult => {
	const [queryParams, setQueryParams] = useSearchParams();

	const searchParams = useMemo<SearchGameResultsParams>(() => {
		const search = queryParams.get('search') ?? undefined;
		const platform = queryParams.get('platform') ?? undefined;
		const pageParam = queryParams.get('page') ?? undefined;
		const limitParam = queryParams.get('limit') ?? '16';
		const pagination = fetchPagination(pageParam, limitParam);

		return { search, platform, pagination };
	}, [queryParams]);

	const { data: results, isLoading } = useQuery({
		queryKey: ['gameResults', type, searchParams],
		queryFn: async (): Promise<GameResults> => {
			if (type === GameDetail.External) {
				const data = await GameService.searchGameResults(searchParams);
				return { ...data, type: GameDetail.External };
			}
			
			const data = await GameService.fetchFromCollection({
				title: searchParams.search,
				platform: searchParams.platform,
				pagination: searchParams.pagination,
			});
			return { ...data, type: GameDetail.Collection };

		},
	});

	const handleSearch = useSearchQueryParams(setQueryParams);

	return { results, isLoading, searchParams, handleSearch };
};
