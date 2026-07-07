import { Box, Button, Checkbox, FormControlLabel, Rating, Stack,TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

import GameService from '../../../api/services/GameService';
import { Conditions } from '../../../enums/condition';
import { Dialogs } from '../../../enums/dialogs';
import { GameDetail } from '../../../enums/games';
import { getFilteredPlatforms } from '../../../helpers/getFilteredPlatforms';
import { useDialogContext } from '../../../hooks/useDialogContext';
import { useGameDetails } from '../../../hooks/useGameDetails';
import type { CreateGameDao } from '../../../types/gameDao.types';
import { Loading } from '../../Loading';
import { useStyles } from './styles';

export const AddToCollection = () => {
	const { classes } = useStyles();
	const { gameId, results, isLoading } = useGameDetails(GameDetail.External);

	const { setDialog } = useDialogContext();
	
	const filteredPlatforms = getFilteredPlatforms(results);

	const [formData, setFormData] = useState<Omit<CreateGameDao, 'igdbId'>>({
		title: results?.name || '',
		condition: Conditions.Good,
		notes: '',
		boxIncluded: true,
		rating: 0,
		platformId: filteredPlatforms[0]?.[1],
	});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const gamePayload: CreateGameDao = {
			...formData,
			igdbId: gameId ?? 0,
		};

		setDialog(Dialogs.None);
		
		await GameService.createGame(gamePayload);
	};

	if (isLoading) {
		return (
			<Loading isLoading={isLoading} />
		);
	}
	
	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			className={classes.root}
		>
			<Stack spacing={4} >
				{/* Title */}
				<TextField
					label='Game Title'
					variant='outlined'
					required
					value={formData.title}
					onChange={(e) => setFormData({ ...formData, title: e.target.value })}
				/>

				{/* Condition */}
				<TextField
					select
					label='Condition'
					variant='outlined'
					required
					value={formData.condition ?? ''}
					onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
				>
					{Object.values(Conditions).map((label, index) => (
						<MenuItem key={index} value={label}>
							{label}
						</MenuItem>
					))}
				</TextField>

				{/* Platform */}
				<TextField
					select
					label='Platform'
					variant='outlined'
					required
					value={formData.platformId || ''}
					onChange={(e) => setFormData({ ...formData, platformId: Number(e.target.value) || 0 })}
				>
					{/* Filter out platforms that aren't returned in the results?.platforms response data */}
					{filteredPlatforms.map(([label, id]) => (
						<MenuItem key={id} value={id}>
							{label}
						</MenuItem>
					))}
				</TextField>

				{/* Notes */}
				<TextField
					label='Notes'
					variant='outlined'
					multiline
					rows={3}
					value={formData.notes}
					onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
				/>

				{/* Box Included */}
				<FormControlLabel
					label='Box Included'
					control={
						<Checkbox
							checked={formData.boxIncluded}
							onChange={(e) => setFormData({ ...formData, boxIncluded: e.target.checked })}
						/>
					}
				/>

				{/* Ratings */}
				<Box>
					<Typography>Rating</Typography>
					<Rating
						name='game-rating'
						value={formData.rating}
						onChange={(_, newValue) => setFormData({ ...formData, rating: newValue ?? 0 })}
					/>
				</Box>

				<Button 
					type='submit' 
					variant='contained' 
					color='primary' 
					size='large'
				>
					Save to Collection
				</Button>
			</Stack>
		</Box>
	);
};
