import type { GameDetail } from '../enums/games';
import type { CollectionGameResults, GameResults, SearchGameResults } from '../types/game.types';

/**
 * Type guard to confirm return type is GameResults and that the type is combined (external and user data)
 * @param results - GameResults object
 * @returns boolean
 */
export const isResultsTypeCollection = (results?: GameResults): results is SearchGameResults & CollectionGameResults & { type: GameDetail.Collection } => {
	return results?.type === 'collection';
};