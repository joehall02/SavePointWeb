import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../api/services/GameService';
import { GameDetail } from '../enums/games';
import type { DetailsResults, ExternalGameDetails, GameDetails, GameDetailType, UseGameDetailsResult } from '../types/game.types';

/**
 * Fetches game details based on the `id` URL search parameter.
 *
 * @param type - Whether to fetch from the external IGDB source 'external' or the user's collection 'collection'.
 * @returns The resolved game details, loading state, and the parsed game ID.
 */
export const useGameDetails = (type: GameDetailType): UseGameDetailsResult => {
	const [queryParams] = useSearchParams();

	const gameId = useMemo(() => {
		const id = queryParams.get('id') ?? undefined;
		
		return id ? parseInt(id) : undefined;
	}, [queryParams]);

	const { data: results, isLoading } = useQuery<ExternalGameDetails | (GameDetails & ExternalGameDetails), Error, DetailsResults>({
		queryKey: ['game-details', type, gameId],
		queryFn: async (): Promise<ExternalGameDetails | (GameDetails & ExternalGameDetails)> => {
			switch (type) {
				case GameDetail.External:
					return GameService.getExternalGameDetails({ gameId });
				case GameDetail.Collection: {
					const collectionData = await GameService.getGameDetails(gameId!);

					const externalData = await GameService.getExternalGameDetails({ gameId: collectionData.igdbId });

					return { ...collectionData, ...externalData };
				}
				default:
					throw new Error('Unknown game detail');
			}
		},
		select: (data): DetailsResults => ({ ...data, type } as DetailsResults),
	});

	return { results, isLoading, gameId };
};
