import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useThemeMode } from '../../hooks/useThemeMode';
import type { LayoutType } from '../../types/layout.types';
import { useStyles } from './styles';

interface IResultProps {
	id: number;
	name: string;
	cover?: string;
	layoutType?: LayoutType;
}

export const Result = ({ id, name, cover, layoutType }: IResultProps) => {
	const themeMode = useThemeMode();

	const { classes } = useStyles({ layoutType: layoutType || 'list', themeMode: themeMode });

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
			<Typography variant='body1' noWrap={true} className={classes.name}>{name}</Typography>
		</Box>
	);
};