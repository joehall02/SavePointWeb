import { Box, Typography } from '@mui/material';
import React, { useCallback } from 'react';

import { Result } from '../../components/Result';
import { isResultsTypeCollection } from '../../helpers/isResultsTypeCollection';
import { useLayoutToggle } from '../../hooks/useLayoutToggle';
import { LayoutToggle } from '../../LayoutToggle';
import type { CollectionGame, ExternalGame, GameResults } from '../../types/game.types';
import { Loading } from '../Loading';
import { PlatformFilter } from '../PlatformFilter';
import { SearchBar } from '../SearchBar';
import { useStyles } from './styles';

interface ISearchProps {
	results?: GameResults;
	isLoading: boolean;
	searchTerm: string;
	handleSearch: (key: string, input: string) => void;
}

export const Search = ({ results, isLoading, searchTerm, handleSearch }: ISearchProps) => {
	const { layoutType, handleLayoutToggle } = useLayoutToggle();
	const { classes } = useStyles({ layoutType: layoutType || 'grid' });

	const isCollection = isResultsTypeCollection(results);

	const handleBarSeach = useCallback((input: string) => {
		handleSearch('search', input);
	}, [handleSearch]);

	const handlePlatformFilter = useCallback((input: string) => {
		handleSearch('platform', input);
	}, [handleSearch]);

	{/* Loading */}
	if (isLoading) {
		return <Loading isLoading={isLoading} />;
	}

	return (
		<Box className={classes.root}>
			{/* Top Bar */}
			<div className={classes.topSection}>
				<div className={classes.platformFilter}>
					<PlatformFilter handlePlatformFilter={handlePlatformFilter} />
				</div>

				<div className={classes.searchBar}>
					<SearchBar handleSearch={handleBarSeach} />
				</div>
			</div>

			{/* Middle Bar */}
			<div className={classes.middleSection}>
				<div className={classes.resultsNumber}>
					{results?.count !== undefined ? (
						<Typography variant='body1'>{`${results?.count} Results for ${searchTerm}`}</Typography>
					) : null}
				</div>
				<LayoutToggle layoutType={layoutType} handleToggle={handleLayoutToggle} />
			</div>

			{/* No Results */}
			{typeof results === 'undefined' || results.games.length === 0 ? (
				<div className={classes.noResults}>
					<Typography variant='body1' color='error'>No results found. Please try again later.</Typography>
				</div>
			) : null}

			{/* Game Results */}
			<div className={classes.gameResults}>
				{results?.games.map((result) => {
					return (
						<React.Fragment key={result.id}>
							<Result 
								url={isCollection ? `/collection-game?id=${result.id}` : `/game?id=${result.id}`}
								name={isCollection ? (result as CollectionGame).title : (result as ExternalGame).name}
								cover={result.cover}
								layoutType={layoutType} 
							/>
						</React.Fragment>
					);
				})}
			</div>
		</Box>
	);
};
