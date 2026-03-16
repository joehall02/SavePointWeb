import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Typography } from '@mui/material';

import { useStyles } from './styles';

interface IGameProps {
	name: string;
	cover?: string
}

export const Game = ({ name, cover }: IGameProps) => {

	const { classes } = useStyles();

	return (
		<Box className={classes.root}>
			{cover ? (
				<img className={classes.cover} src={cover} alt={name} />
			) : (
				<ImageNotSupportedIcon className={classes.cover} />
			)}
			<Typography variant='body1' noWrap={true}>{name}</Typography>
		</Box>
	);
};