import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../api/services/GameService';
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

	const { data: results, isLoading } = useQuery<ExternalGameDetails | GameDetails, Error, DetailsResults>({
		queryKey: ['game-details', type, gameId],
		queryFn: (): Promise<ExternalGameDetails | GameDetails> =>
			type === 'external'
				? GameService.getExternalGameDetails({ gameId })
				: GameService.getGameDetails(gameId!), // TODO: remove non-null assertion
		select: (data): DetailsResults => ({ ...data, type } as DetailsResults),
	});

	return { results, isLoading, gameId };
};
