import IncompleteCircleRoundedIcon from '@mui/icons-material/IncompleteCircleRounded';
import { Box } from '@mui/material';
import { useRef, useState } from 'react';

import GameService from '../../api/services/GameService';
import { SearchBar } from '../../components/ui/SearchBar';
import { usePageTitle } from '../../hooks/usePageTitle';
import type { ExternalGame } from '../../types/game.types';
import { useStyles } from './styles';


export const Home = () => {
	const { classes } = useStyles();
	const [searchResults, setSearchResults] = useState<ExternalGame[]>([]);
	const timeout = useRef(0);
	
	usePageTitle('Home');
	
	const handleSearch = async (searchParam: string) => {
		const results = await GameService.searchGameHome(searchParam);
		
		setSearchResults(results);
	};

	const handleDebounce = (input: string, delay: number) => {
		clearTimeout(timeout.current);
		
		timeout.current = setTimeout(() => handleSearch(input), delay);
	};

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

