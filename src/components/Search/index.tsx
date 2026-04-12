import { Box, CircularProgress, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { Result } from '../../components/Result';
import { getLocalStorageItem, setLocalStorageItem } from '../../helpers/localStorage';
import { LayoutToggle } from '../../LayoutToggle';
import type { SearchGameResults } from '../../types/game.types';
import type { LayoutType } from '../../types/layout.types';
import { PlatformFilter } from '../PlatformFilter';
import { SearchBar } from '../SearchBar';
import { useStyles } from './styles';

interface ISearchProps {
	results?: SearchGameResults;
	isLoading: boolean;
	searchTerm: string;
	handleSearch: (key: string, input: string) => void;
}

export const Search = ({ results, isLoading, searchTerm, handleSearch }: ISearchProps) => {
	const [layoutType, setlayoutType] = useState<LayoutType>(getLocalStorageItem<LayoutType>('layoutType', 'grid'));
	
	const { classes } = useStyles({ layoutType: layoutType || 'grid' });

	const handleBarSeach = useCallback((input: string) => {
		handleSearch('search', input);
	}, [handleSearch]);

	const handlePlatformFilter = useCallback((input: string) => {
		handleSearch('platform', input);
	}, [handleSearch]);

	const handleLayoutToggle = useCallback((input: LayoutType) => {
		setLocalStorageItem('layoutType', input);
		setlayoutType(input);
	}, []);

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

			{/* Loading */}
			{isLoading ? (
				<div className={classes.loading}>
					<CircularProgress aria-label='Loading…' />
				</div>
			) : null}

			{/* No Results */}
			{!isLoading && (typeof results === 'undefined' || results.games.length === 0) ? (
				<div className={classes.noResults}>
					<Typography variant='body1' color='error'>No results found. Please try again later.</Typography>
				</div>
			) : null}

			{/* Game Results */}
			<div className={classes.gameResults}>
				{results?.games.map((result) => {
					return (
						<React.Fragment key={result.id}>
							<Result id={result.id} name={result.name} cover={result.cover} layoutType={layoutType} />
						</React.Fragment>
					);
				})}
			</div>
		</Box>
	);
};
