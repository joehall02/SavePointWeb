import type { Theme } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

interface IStyleProps {
	isMobile?: boolean;
	slideIndex: number;
	isHovering: boolean;
}

export const useStyles = makeStyles<IStyleProps>()((theme: Theme, { slideIndex, isMobile, isHovering }) => ({
	root: {
		position: 'relative',
		overflow: 'hidden',
		
		...isMobile && {
			borderBottom: `3px solid ${theme.palette.primary.main}`,
			
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(0, -2),
			},
			[theme.breakpoints.up('sm')]: {
				margin: theme.spacing(0, -3),
			},
		},
	},
  
	imageContainer: {
		display: 'flex',
		transition: 'transform 0.4s ease-in-out',
		width: '100%',

		// Moves image along the X axis based on the slides index
		transform: `translateX(-${slideIndex * 100}%)`,
	},
  
	image: {
		minWidth: '100%',
		aspectRatio: '16 / 9',
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center top',
	},
  
	navButton: {
		position: 'absolute',
		top: '50%',
		transform: 'translateY(-50%)',
		backgroundColor: 'rgba(0,0,0,0.45)',
		color: theme.palette.common.white,

		transition: 'opacity 0.5s ease, visibility 0.5s ease',

		opacity: isHovering ? 1 : 0,
		visibility: isHovering ? 'visible' : 'hidden',
		
		'&:hover': {
			backgroundColor: 'rgba(0,0,0,0.75)',
		},
	},
  
	leftButton: {
		left: 25,
	},
  
	rightButton: {
		right: 25,
	},
  
	indicators: {
		position: 'absolute',
		top: 12,
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		gap: theme.spacing(1.2),

		transition: 'opacity 0.5s ease, visibility 0.5s ease',

		opacity: isHovering ? 1 : 0,
		visibility: isHovering ? 'visible' : 'hidden',
		
	},
	dot: {
		width: 10,
		height: 10,
		borderRadius: '50%',
		backgroundColor: theme.palette.grey[400],
		cursor: 'pointer',
		transition: 'all 0.2s ease',
	},
  
	activeDot: {
		backgroundColor: theme.palette.common.white,
		transform: 'scale(1.2)',
	},
}));