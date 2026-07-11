import { IgdbPlatformId, PlatformIds } from '../enums/platforms';
import type { DetailsResults } from '../types/game.types';

/**
 * Returns the PlatformIds whose labels match the platforms returned in results?.platforms.
 * 
 * @param results - DetailsResults object
 * @returns Filtered entries of PlatformIds as [label, id] pairs
 */
export const getFilteredPlatforms = (results: DetailsResults | undefined): [string, IgdbPlatformId][] => {
	return Object.entries(PlatformIds).filter(
		([label]) => results?.platforms?.some((p) => p.name === label),
	);
};
