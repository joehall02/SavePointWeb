import type { PillItem, ReleaseDate } from '../types/game.types';

/**
 * Type guard to confirm return type is ReleaseDate and contains the 'region' property.
 * @param results - PillItem object
 * @returns boolean
 */
export const isTypeReleaseDate = (item: PillItem): item is ReleaseDate => {
	return 'region' in item;
};