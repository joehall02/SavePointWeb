import type { GameDetail } from '../enums/games';
import type { DetailsResults, ExternalGameDetails,GameDetails } from '../types/game.types';

/**
 * Type guard to confirm return type is DetailsResults and that the type is combined (external and user data)
 * @param results - DetailsResults object
 * @returns boolean
 */
export const isDetailsTypeCollection = (results?: DetailsResults): results is GameDetails & ExternalGameDetails & { type: GameDetail.Collection } => {
	return results?.type === 'collection';
};