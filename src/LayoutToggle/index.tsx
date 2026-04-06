import { GridView, List } from '@mui/icons-material';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

import type { LayoutType } from '../types/layout.types';

interface ILayoutToggleProps {
	layoutType: LayoutType;
	handleToggle: (input: LayoutType) => void;
}

export const LayoutToggle = ({ layoutType, handleToggle }: ILayoutToggleProps) => {

	return (
		<Box>
			<ToggleButtonGroup 
				size={'small'} 
				value={layoutType} 
				exclusive
				onChange={(_, newLayoutType) => {
					if (newLayoutType) handleToggle(newLayoutType);
				}}
			>
				<ToggleButton size='small' value='grid' selected={layoutType === 'grid'}>
					<GridView />
				</ToggleButton>

				<ToggleButton size='small' value='list' selected={layoutType === 'list'}>
					<List />
				</ToggleButton>
			</ToggleButtonGroup>
		</Box>
	);
};