import { Box } from '@mui/material';
import React, { useCallback } from 'react';

import { Result } from '../../components/Result';
import type { ExternalGame } from '../../types/game.types';
import { PlatformFilter } from '../PlatformFilter';
import { SearchBar } from '../SearchBar';
import { useStyles } from './styles';

interface ISearchProps {
	results?: ExternalGame[]
	isLoading: boolean
	handleSearch: (key: string, input: string) => void;
}

export const Search = ({ results, handleSearch }: ISearchProps) => {
	// const [isGrid, setIsGrid] = useState<boolean>(true);
	
	const { classes } = useStyles();

	const handleBarSeach = useCallback((input: string) => {
		handleSearch('search', input);
	}, [handleSearch]);

	const handlePlatformFilter = useCallback((input: string) => {
		handleSearch('platform', input);
	}, [handleSearch]);

	return (
		<Box className={classes.root}>
			{/* Top Bar */}
			<div className={classes.topBar}>
				<div className={classes.platformFilter}>
					<PlatformFilter handlePlatformFilter={handlePlatformFilter} />
				</div>

				<div className={classes.searchBar}>
					<SearchBar handleSearch={handleBarSeach} />
				</div>
			</div>

			{/* Middle Bar */}

			{/* Game Results */}
			{results?.map((result) => {
				return (
					<React.Fragment key={result.id}>
						<Result id={result.id} name={result.name} cover={result.cover} />
					</React.Fragment>
				);
			})}
		</Box>
	);
};
