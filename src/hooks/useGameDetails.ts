import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../api/services/GameService';
import { GameDetail } from '../enums/games';
import { CACHE_TTL_MS } from '../helpers/consts';
import type { DetailsResults, ExternalGameDetails, GameDetails, GameDetailType, UseGameDetailsResult } from '../types/game.types';

/**
 * Fetches game details based on the `id` URL search parameter.
 *
 * Results are cached by react-query under `['game-details', type, gameId, suppressExternal]`,
 * so each game/type/suppressExternal combination gets its own cache entry. Cached data is
 * treated as fresh for `CACHE_TTL_MS` (5 minutes) before it's eligible for a refetch.
 *
 * @param type - Whether to fetch from the external IGDB source 'external' or the user's collection 'collection'.
 * @param suppressExternal - Whether to suppress the `getExternalGameDetails` request.
 * @returns The resolved game details, loading state, and the parsed game ID.
 */
export const useGameDetails = (type: GameDetailType, suppressExternal?: boolean): UseGameDetailsResult => {
	const [queryParams] = useSearchParams();

	const gameId = useMemo(() => {
		const id = queryParams.get('id') ?? undefined;
		
		return id ? parseInt(id) : undefined;
	}, [queryParams]);

	const { data: results, isLoading } = useQuery<ExternalGameDetails | GameDetails | (GameDetails & ExternalGameDetails), Error, DetailsResults>({
		queryKey: ['game-details', type, gameId, suppressExternal],
		queryFn: async (): Promise<ExternalGameDetails | GameDetails | (GameDetails & ExternalGameDetails)> => {
			switch (type) {
				case GameDetail.External:
					return GameService.getExternalGameDetails({ gameId });
				case GameDetail.Collection: {
					const collectionData = await GameService.getGameDetails(gameId!);

					if (suppressExternal) return collectionData;

					const externalData = await GameService.getExternalGameDetails({ gameId: collectionData.igdbId });

					return { ...collectionData, ...externalData };
				}
				default:
					throw new Error('Unknown game detail');
			}
		},
		select: (data): DetailsResults => ({ ...data, type } as DetailsResults),
		staleTime: CACHE_TTL_MS,
	});

	return { results, isLoading, gameId };
};
