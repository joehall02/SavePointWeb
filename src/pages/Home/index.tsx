import IncompleteCircleRoundedIcon from '@mui/icons-material/IncompleteCircleRounded';
import { Box } from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GameService from '../../api/services/GameService';
import { SearchBar } from '../../components/SearchBar';
import { usePageTitle } from '../../hooks/usePageTitle';
import type { ExternalGame } from '../../types/game.types';
import { useStyles } from './styles';

export const Home = () => {
	const { classes } = useStyles();
	const [searchResults, setSearchResults] = useState<ExternalGame[]>([]);
	const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
	const navigate = useNavigate();

	usePageTitle('Home');
	
	const handleSearch = useCallback((input: string) => {
		navigate(`/search?search=${input}`);
	}, [navigate]);

	const handleDebounce = useCallback((input: string, delay: number) => {
		// Clear timeout when handleDebounce is called again
		// This stops multiple requests queuing up
		if (timeout.current) clearTimeout(timeout.current);
		
		// Sets timeout to fetch game data after delay
		timeout.current = setTimeout(async () => {
			if (input === '') {
				setSearchResults([]);
				return;
			}
			
			const results = await GameService.searchGameHome(input);
			
			if (results.length > 0) {
				setSearchResults(results);
			} else {
				setSearchResults([]);
			}
		}, delay);
	}, []);

	return (
		<Box className={classes.root}>
			<IncompleteCircleRoundedIcon className={classes.logo} />

			<div className={classes.searchBarContainer}>
				<SearchBar 
					searchResults={searchResults} 
					handleSearch={handleSearch} 
					handleDebounce={handleDebounce}
				/>
			</div>
		</Box>
	);
};
