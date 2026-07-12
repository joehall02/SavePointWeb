import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import PlatformService from '../../api/services/PlatformService';
import { Loading } from '../../components/Loading';
import { Result } from '../../components/Result';
import { useStyles } from '../../components/Search/styles';
import { PlatformIdsByLabel, PlatformLabel } from '../../enums/platforms';
import { useLayoutToggle } from '../../hooks/useLayoutToggle';
import { LayoutToggle } from '../../LayoutToggle';
import type * as platformTypes from '../../types/platform.types';

export const Platforms = () => {
	const { layoutType, handleLayoutToggle } = useLayoutToggle();

	const { classes } = useStyles({ layoutType: layoutType || 'grid' });

	const { data: results, isLoading } = useQuery({
		queryKey: ['platformResults'],
		queryFn: async (): Promise<platformTypes.Platform[]> => {
			const data = await PlatformService.getPlatforms();

			return data;
		},
	});

	{/* Loading */}
	if (isLoading) {
		return <Loading isLoading={isLoading} />;
	}

	return (
		<div className={classes.root}>
			{/* Middle Bar */}
			<div className={classes.middleSection}>
				<div className={classes.resultsNumber}>
					{results?.length !== undefined ? (
						<Typography variant='body1'>{`${results?.length} Results for platforms`}</Typography>
					) : null}
				</div>
				<LayoutToggle layoutType={layoutType} handleToggle={handleLayoutToggle} />
			</div>

			{/* No Results */}
			{typeof results === 'undefined' || results.length === 0 ? (
				<div className={classes.noResults}>
					<Typography variant='body1' color='error'>No results found. Please try again later.</Typography>
				</div>
			) : null}

			{/* Game Results */}
			<div className={classes.gameResults}>
				{results?.map((result) => {
					const platformByLabel = PlatformIdsByLabel[result.title as PlatformLabel];

					return (
						<React.Fragment key={result.id}>
							<Result 
								url={`/collection?platform=${platformByLabel}`}
								name={result.title}
								cover={result.cover}
								layoutType={layoutType} 
							/>
						</React.Fragment>
					);
				})}
			</div>			
		</div>
	);
};
