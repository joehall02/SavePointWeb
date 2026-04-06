import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from '@mui/material';
import { useState } from 'react';

import { PlatformLabels } from '../../enums/platforms';
import { useStyles } from './styles';

interface IPlatformFilterProps {
	handlePlatformFilter: (input: string) => void;
}

export const PlatformFilter = ({ handlePlatformFilter }: IPlatformFilterProps) => {
	const [platform, setPlatform] = useState<string>('');
	
	const handlePlatformChange = (event: SelectChangeEvent) => {
		const key = event.target.value;

		if (key === 'all') {
			setPlatform('');
			handlePlatformFilter('');
			return;
		}

		setPlatform(key);
		handlePlatformFilter(key);
	};

	const { classes } = useStyles();
	
	return (
		<Box className={classes.root}>
			<FormControl fullWidth size='small'>
				<InputLabel>Platform</InputLabel>
			
				<Select 
					fullWidth
					label='Platform'
					value={platform}
					onChange={handlePlatformChange}
				>
					<MenuItem value='all'>All</MenuItem>
					{Object.entries(PlatformLabels).map(([key, value]) => (
						<MenuItem key={key} value={key}>
							{value}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
