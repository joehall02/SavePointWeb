import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import GameService from '../../api/services/GameService';
import { Details } from '../../components/Details';
import type { DetailsResults, GetExternalGameDetailsParams } from '../../types/game.types';
import { useStyles } from './styles';

export const ExternalGameDetails = () => {
	const [queryParams] = useSearchParams();
	const searchParams = (useMemo<GetExternalGameDetailsParams>(() => {
		const id = queryParams.get('id') ?? undefined;

		const gameId = id ? parseInt(id) : undefined;

		return { 'gameId': gameId };
	}, [queryParams]));

	const { classes } = useStyles();

	const {
		data: results,
		isLoading,
	} = useQuery({
		queryKey: ['external-game-details', searchParams],
		queryFn: () => GameService.getExternalGameDetails(searchParams),
		// Set query results with type 'external'
		select: (data): DetailsResults => ({
			...data,
			type: 'external',
		}),
	});

	return (
		<div className={classes.root}>
			<Details 
				results={results}
				isLoading={isLoading}
			/>
		</div>
	);
};