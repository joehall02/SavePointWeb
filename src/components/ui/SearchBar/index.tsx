import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Divider } from '@mui/material';
import { useState } from 'react';
import React from 'react';

import { useThemeMode } from '../../../hooks/useThemeMode';
import type { ExternalGame } from '../../../types/game.types';
import { Game } from '../../Game';
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

	const isExpanded = (searchResults && searchResults.length > 0 && input.length > 0 && isSelected) ?? false;

	const { classes } = useStyles({ themeType: themeType.mode, input, isSelected, isExpanded });

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
						onInput={(e) => {
							setInput(e.currentTarget.value);
							if (handleDebounce) {
								handleDebounce(e.currentTarget.value, 150);
							}
						}}
						onFocus={() => setIsSelected(true)}
						onBlur={() => setIsSelected(false)}
					/>
					<CloseIcon 
						className={classes.discardButton}
						onClick={() => {
							setInput('');
							handleSearch('');
						}}
						fontSize='small'
					/>
				</div>
				<Button className={classes.searchButton} type='submit'>
					<SearchIcon className={classes.searchIcon} />
				</Button>
			</div>
			{isExpanded && (
				<div className={classes.expandedContainer}>
					{searchResults?.map((game) => (
						<React.Fragment key={game.id}>
							<Divider className={classes.divider} />
							<Game name={game.name} cover={game.cover} />
						</React.Fragment>
					))}
				</div>
			)}
		</Box>
	);
};
