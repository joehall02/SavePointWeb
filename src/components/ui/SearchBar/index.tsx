import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';

import { useThemeMode } from '../../../hooks/useThemeMode';
import type { ExternalGame } from '../../../types/game.types';
import { useStyles } from './styles';

interface ISearchBarProps {
	searchResults?: ExternalGame[];
	handleSearch: (input: string) => void;
	handleDebounce?: (input: string, delay: number) => void;
}

export const SearchBar = ({ searchResults, handleSearch, handleDebounce }: ISearchBarProps) => {
	const [input, setInput] = useState<string>('');
	const [isSelected, setIsSelected] = useState<boolean>(false);
	
	const themeType = useThemeMode();

	const { classes } = useStyles({ themeType: themeType.mode, input, isSelected });

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(searchResults);
	}, [searchResults]);

	const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		handleSearch(input);
	};

	return (
		<Box className={classes.root} component='form' onSubmit={onSearch}>
			<div className={classes.searchWrapper}>
				<div className={classes.inputContainer}>
					<Box 
						className={classes.searchField} 
						component='input' 
						maxLength={35} 
						placeholder='Search...'
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
							if (handleDebounce) {
								handleDebounce(input, 500);
							}
						}}
						onFocus={() => setIsSelected(true)}
						onBlur={() => setIsSelected(false)}
					/>
					<CloseIcon 
						className={classes.discardButton}
						onClick={() => setInput('')}
						fontSize='small'
					/>
				</div>
				<Button className={classes.searchButton} type='submit'>
					<SearchIcon className={classes.searchIcon} />
				</Button>
			</div>
		</Box>
	);
};
