import { Box, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';

import { Result } from '../../components/Result';
import { LayoutToggle } from '../../LayoutToggle';
import type { ExternalGame } from '../../types/game.types';
import type { LayoutType } from '../../types/layout.types';
import { PlatformFilter } from '../PlatformFilter';
import { SearchBar } from '../SearchBar';
import { useStyles } from './styles';

interface ISearchProps {
	results?: ExternalGame[];
	isLoading: boolean;
	searchTerm: string;
	handleSearch: (key: string, input: string) => void;
}

export const Search = ({ results, searchTerm, handleSearch }: ISearchProps) => {
	const [layoutType, setlayoutType] = useState<LayoutType>('grid');
	
	const { classes } = useStyles();

	const handleBarSeach = useCallback((input: string) => {
		handleSearch('search', input);
	}, [handleSearch]);

	const handlePlatformFilter = useCallback((input: string) => {
		handleSearch('platform', input);
	}, [handleSearch]);

	const handleLayoutToggle = useCallback((input: LayoutType) => {
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
					<Typography variant='body1'>{`XX Results for ${searchTerm}`}</Typography>
				</div>
				<div className={classes.layoutToggle}>
					<LayoutToggle layoutType={layoutType} handleToggle={handleLayoutToggle} />
				</div>
			</div>

			{/* Game Results */}
			<div className={classes.gameResults}>
				{results?.map((result) => {
					return (
						<React.Fragment key={result.id}>
							<Result id={result.id} name={result.name} cover={result.cover} />
						</React.Fragment>
					);
				})}
			</div>
		</Box>
	);
};
