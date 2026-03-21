import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useStyles } from './styles';

interface IGameProps {
	id: number;
	name: string;
	cover?: string
}

export const GameResult = ({ id, name, cover }: IGameProps) => {

	const { classes } = useStyles();

	const navigate = useNavigate();

	return (
		// tabIndex allows the element to be focused
		// Allows us to click element without triggering onBlur event
		<Box tabIndex={0} className={classes.root} onClick={() => navigate(`/game/${id}`)}>
			{cover ? (
				<img className={classes.cover} src={cover} alt={name} />
			) : (
				<ImageNotSupportedIcon className={classes.cover} />
			)}
			<Typography variant='body1' noWrap={true}>{name}</Typography>
		</Box>
	);
};