import type { DetailsResults } from '../types/game.types';

/**
 * Evaluate if all values in results (except 'id', 'type' and 'name') are null or undefined
 * 
 * @param results - DetailsResults object
 * @returns boolean
 */
export const isResultsNullOrUndefined = (results: DetailsResults): boolean =>
	results && Object.entries(results)
		.filter(([key]) => key !== 'id' && key !== 'type' && key !== 'name')
		.every(([_, value]) => value === null || value === undefined);
