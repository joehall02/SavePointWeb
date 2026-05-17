import type { CollectionDetails, DetailsResults, ExternalGameDetails } from '../types/game.types';

/**
 * Type guard to confirm return type is DetailsResults and that the type is combined (external and user data)
 * @param results - DetailsResults object
 * @returns boolean
 */
export const isTypeCollection = (results?: DetailsResults): results is CollectionDetails & ExternalGameDetails & { type: 'collection' } => {
	return results?.type === 'collection';
};