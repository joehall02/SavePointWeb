import { Box, Button, Checkbox, FormControlLabel, Rating, Stack,TextField, Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

import GameService from '../../../api/services/GameService';
import { Conditions } from '../../../enums/condition';
import { Dialogs } from '../../../enums/dialogs';
import { GameDetail } from '../../../enums/games';
import { useDialogContext } from '../../../hooks/useDialogContext';
import { useGameDetails } from '../../../hooks/useGameDetails';
import type { GameDetails } from '../../../types/game.types';
import type { EditGameDao } from '../../../types/gameDao.types';
import { Loading } from '../../Loading';
import { useStyles } from './styles';

interface IEditForm {
	gameId: number;
	results: GameDetails;
};

const EditForm = ({ gameId, results }: IEditForm) => {
	const { classes } = useStyles();
	const { setDialog } = useDialogContext();

	const [formData, setFormData] = useState<EditGameDao>({
		title: results.title,
		condition: results.condition,
		notes: results.notes,
		boxIncluded: results.boxIncluded,
		rating: results.rating,
	});

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		const gamePayload: EditGameDao = { ...formData };

		setDialog(Dialogs.None);

		await GameService.editGame(gameId, gamePayload);
	};

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

export const EditGameInCollection = () => {
	const { gameId, results, isLoading } = useGameDetails(GameDetail.Collection, true);
	const collectionResults = results as (GameDetails & { type: GameDetail.Collection });

	if (isLoading) {
		return <Loading isLoading={isLoading} />;
	}

	if (!collectionResults || !gameId) {
		return null;
	}

	return <EditForm gameId={gameId} results={collectionResults} />;
};

EditGameInCollection.displayName = 'EditGameInCollection';
