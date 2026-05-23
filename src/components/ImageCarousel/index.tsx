import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';

import type { Screenshot } from '../../types/game.types';
import { useStyles } from './styles';

interface ICarouselProps {
	images: Screenshot[] | null | undefined;
	isMobile?: boolean;
}

export const ImageCarousel = ({ images, isMobile }: ICarouselProps) => {
	const [index, setIndex] = useState(0);
	const { classes, cx } = useStyles({ isMobile, slideIndex: index });
	
	if (!images) {
		return null;
	}
	
	const prev = () => {
		setIndex((prev) =>
			prev === 0 ? images.length - 1 : prev - 1,
		);
	};

	const next = () => {
		setIndex((prev) =>
			prev === images.length - 1 ? 0 : prev + 1,
		);
	};

	return (
		<Box className={classes.root}>			
			{/* Images */}
			<Box className={classes.imageContainer}>
				{images.map((src, i) => (
					<div
						key={src.url}
						aria-label={`slide-${i}`}
						className={classes.image}
						style={{
							backgroundImage: `url(${src.url})`,
						}}
					/>
				))}
			</Box>

			{/* Left button */}
			<IconButton onClick={prev} className={cx(classes.navButton, classes.leftButton)}>
				<ChevronLeft />
			</IconButton>

			{/* Right button */}
			<IconButton onClick={next} className={cx(classes.navButton, classes.rightButton)}>
				<ChevronRight />
			</IconButton>

			{/* Dot image indicators */}
			<Box className={classes.indicators}>
				{images.map((src, i) => (
					<Box
						key={src.url}
						onClick={() => setIndex(i)}
						className={cx(classes.dot, i === index && classes.activeDot)}
					/>
				))}
			</Box>
		</Box>
	);
};

ImageCarousel.displayName = 'ImageCarousel';