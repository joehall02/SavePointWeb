import { Box, Button } from '@mui/material';
import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import GameService from '../../../api/services/GameService';
import { Dialogs } from '../../../enums/dialogs';
import { useDialogContext } from '../../../hooks/useDialogContext';
import { useStyles } from './styles';

export const DeleteGameInCollection = () => {
	const { classes } = useStyles();

	const [queryParams] = useSearchParams();

	const navigate = useNavigate();

	const gameId = useMemo(() => {
		const id = queryParams.get('id') ?? undefined;
			
		return id ? parseInt(id) : undefined;
	}, [queryParams]);

	const { setDialog } = useDialogContext();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault();

		setDialog(Dialogs.None);
		
		if (!gameId) return;

		await GameService.deleteGame(gameId);

		navigate('/collection');
	};
	
	return (
		<Box
			component='form'
			onSubmit={handleSubmit}
			className={classes.root}
		>
			<div className={classes.deleteButtons}>
				<Button 
					type='submit' 
					variant='contained' 
					color='secondary'
					size='large'
					onClick={() => setDialog(Dialogs.None)}
				>
					Cancel
				</Button>
				<Button 
					type='submit' 
					variant='contained' 
					color='error' 
					size='large'
				>
					Delete Game
				</Button>
			</div>
		
		</Box>
	);
};

DeleteGameInCollection.displayName = 'DeleteGameInCollection';